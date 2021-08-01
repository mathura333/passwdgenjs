import createPassword from './utils/createPassword';
import { IOptions } from './types/options';

const passwdgen = ({
  length = 10,
  hasCapital = true,
  hasNumber = true,
  hasSymbol = true,
}: IOptions) => createPassword(length, hasCapital, hasNumber, hasSymbol);

export default passwdgen;
