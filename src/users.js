export function normalizeUserId(value) {
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) {
    throw new Error('Invalid user id');
  }
  return id;
}

export async function findUserByEmail(db, email) {
  const rows = await db.query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);
  return rows[0] || null;
}
