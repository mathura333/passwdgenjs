import RandExp from 'randexp';

const smallLetters = 'a-z';
const capitals = 'A-Z';
const numbers = '0-9';
const symbols = '!@#$%^&*_+=-';

const createPassword = (
  length: number = 10,
  hasCapital: boolean = true,
  hasNumber: boolean = true,
  hasSymbol: boolean = true
) => {
  let passPattern = smallLetters;
  const lookAheads = [smallLetters];
  if (hasCapital) {
    passPattern = passPattern.concat(capitals);
    lookAheads.push(capitals);
  }
  if (hasNumber) {
    passPattern = passPattern.concat(numbers);
    lookAheads.push(numbers);
  }
  if (hasSymbol) {
    passPattern = passPattern.concat(symbols);
    lookAheads.push(symbols);
  }
  const lookAheadPattern = lookAheads.reduce(
    (patternString, look) =>
      (patternString += `(?=[${passPattern}]*[${look}])`),
    ''
  );
  const pattern = new RegExp(`${lookAheadPattern}[${passPattern}]{${length}}`);
  let password = new RandExp(pattern).gen();
  // ! Did a loop because randexp has a bug and lookaheads are not working it in
  while (!password.match(pattern)) {
    password = new RandExp(pattern).gen();
  }
  return password;
};

export default createPassword;
