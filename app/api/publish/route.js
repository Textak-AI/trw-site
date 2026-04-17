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
  if (!token) throw new Error("GITHUB_TOKEN not configured");
  const res = await fetch("https://api.github.com/repos/" + REPO + "/" + path, { method, headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github.v3+json", "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : null });
  if (!res.ok) throw new Error("GitHub API " + res.status);
  return res.json();
}
async function commitFile(filePath, content, message) {
  let sha = null;
  try { const e = await githubAPI("contents/" + filePath + "?ref=main", "GET"); sha = e.sha; } catch {}
  return githubAPI("contents/" + filePath, "PUT", { message, content: Buffer.from(content).toString("base64"), branch: "main", ...(sha ? { sha } : {}) });
}
export async function POST(req) {
  const token = req.cookies.get("trw_token")?.value;
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  try {
    const { type, data, message } = await req.json();
    if (type === "content") {
      await commitFile("public/data/content.json", JSON.stringify(data, null, 2), message || "Update content [" + user.name + "]");
      // Fire Vercel deploy hook as safety net in case Git auto-deploy webhook fails
      if (process.env.VERCEL_DEPLOY_HOOK_URL) {
        try { await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, { method: "POST" }); } catch (e) { console.error("Deploy hook failed:", e.message); }
      }
      return NextResponse.json({ ok: true });
    }
    if (type === "article") { await commitFile("public/insights/" + data.slug + ".html", data.html, message || "Update article: " + data.title + " [" + user.name + "]"); return NextResponse.json({ ok: true }); }
    return NextResponse.json({ error: "Unknown type" }, { status: 400 });
  } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }
}
