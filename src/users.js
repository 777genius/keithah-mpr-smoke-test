export function normalizeUserId(value) {
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) {
    throw new Error('Invalid user id');
  }
  return id;
}
