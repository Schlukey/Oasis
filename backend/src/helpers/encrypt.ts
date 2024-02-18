import bcrypt from 'bcrypt';

export const passwordHash = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt();
    const userPassword = await bcrypt.hash(password, salt);
    return userPassword;
  } catch (error) {
    console.log(`password saving error, ${error}`);
  }
};
