export function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET environment variable is missing or shorter than 32 characters");
  }
  return secret;
}
