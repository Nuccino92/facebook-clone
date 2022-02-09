import bcrypt from "bcryptjs";

export const generateHash = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const compareHash = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
};
