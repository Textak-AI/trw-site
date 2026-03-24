import { NextResponse } from "next/server";
import crypto from "crypto";

function signToken(payload) {
  const secret = process.env.AUTH_SECRET || "trw-dev-secret";
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  return data + "." + sig;
}

export function verifyToken(token) {
  if (!token) return null;
  const secret = process.env.AUTH_SECRET || "trw-dev-secret";
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [data, sig] = parts;
  const expected = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  if (sig !== expected) return null;
  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch { return null; }
}

export async function POST(req) {
  try {
    const { email, password, action } = await req.json();
    if (action === "logout") {
      const res = NextResponse.json({ ok: true });
      res.cookies.set("trw_token", "", { maxAge: 0, path: "/" });
      return res;
    }
    const adminEmail = process.env.ADMIN_EMAIL || "pauline@therailway.us";
    const adminPass = process.env.ADMIN_PASS;
    const editorPass = process.env.EDITOR_PASS;
    let role = null, userName = "";
    if (email === adminEmail && password === adminPass) {
      role = "admin"; userName = "Pauline";
    } else if (password === editorPass) {
      role = "editor"; userName = email.split("@")[0];
    }
    if (!role) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    const token = signToken({ email, role, name: userName, exp: Date.now() + 7*24*60*60*1000 });
    const res = NextResponse.json({ ok: true, role, name: userName, email });
    res.cookies.set("trw_token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 7*24*60*60, path: "/" });
    return res;
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req) {
  const token = req.cookies.get("trw_token")?.value;
  const user = verifyToken(token);
  if (!user) return NextResponse.json({ authenticated: false });
  return NextResponse.json({ authenticated: true, role: user.role, name: user.name, email: user.email });
}
