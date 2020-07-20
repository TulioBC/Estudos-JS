const divisibleByThree = (inteiro) => {
  if (inteiro % 3 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(divisibleByThree(5));
console.log(divisibleByThree(15));
