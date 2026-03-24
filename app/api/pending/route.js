import { NextResponse } from "next/server";
const REPO = process.env.GITHUB_REPO || "Textak-AI/trw-site";
function verifyToken(token) {
  if (!token) return null;
  const secret = process.env.AUTH_SECRET || "trw-dev-secret";
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [data, sig] = parts;
  const crypto = require("crypto");
  const expected = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  if (sig !== expected) return null;
  try { const p = JSON.parse(Buffer.from(data, "base64url").toString()); if (p.exp && Date.now() > p.exp) return null; return p; } catch { return null; }
}
async function githubAPI(path, method, body) {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch("https://api.github.com/repos/" + REPO + "/" + path, { method: method || "GET", headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github.v3+json", "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : null });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("GitHub " + res.status);
  return res.json();
}
async function getPending() {
  const data = await githubAPI("contents/data/pending.json?ref=main", "GET");
  if (!data) return { changes: [], settings: { requireApproval: true }, _sha: null };
  const content = JSON.parse(Buffer.from(data.content, "base64").toString());
  return { ...content, _sha: data.sha };
}
async function savePending(pending) {
  const sha = pending._sha;
  const clean = { changes: pending.changes || [], settings: pending.settings || { requireApproval: true } };
  return githubAPI("contents/data/pending.json", "PUT", { message: "Update pending [editor]", content: Buffer.from(JSON.stringify(clean, null, 2)).toString("base64"), branch: "main", ...(sha ? { sha } : {}) });
}
export async function GET(req) {
  const token = req.cookies.get("trw_token")?.value;
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  const pending = await getPending();
  return NextResponse.json({ changes: pending.changes || [], settings: pending.settings, role: user.role });
}
export async function POST(req) {
  const token = req.cookies.get("trw_token")?.value;
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  const { action, changeId, changeData, requireApproval } = await req.json();
  const pending = await getPending();
  if (action === "settings" && user.role === "admin") { pending.settings = { requireApproval: !!requireApproval }; await savePending(pending); return NextResponse.json({ ok: true, settings: pending.settings }); }
  if (action === "submit") { const nc = { id: Date.now().toString(), ...changeData, user: user.name, userEmail: user.email, timestamp: new Date().toISOString(), status: "pending" }; pending.changes = [...(pending.changes || []), nc]; await savePending(pending); if (!pending.settings?.requireApproval || user.role === "admin") return NextResponse.json({ ok: true, autoPublish: true, id: nc.id }); return NextResponse.json({ ok: true, queued: true, id: nc.id }); }
  if (action === "approve" && user.role === "admin") { pending.changes = (pending.changes || []).map(c => c.id === changeId ? { ...c, status: "approved", approvedAt: new Date().toISOString() } : c); await savePending(pending); return NextResponse.json({ ok: true }); }
  if (action === "reject" && user.role === "admin") { pending.changes = (pending.changes || []).map(c => c.id === changeId ? { ...c, status: "rejected" } : c); await savePending(pending); return NextResponse.json({ ok: true }); }
  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
