import bcrypt from "bcryptjs";

export const generateHash = (password) => {
  const salt = bcrypt.genSalt(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const compareHash = (password, hashed) => {
  return bcrypt.compareHash(password, hashed);
};
