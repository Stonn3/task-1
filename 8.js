const findSmallestNumber = (num1, num2, num3) => {
  let sn = num1;

  if (num2 < sn) {
    sn = num2; 
  }

  if (num3 < sn) {
    sn = num3; 
  }

  return sn;
}
const num1 = 7;
const num2 = 3;
const num3 = 1;

const smallest = findSmallestNumber(num1, num2, num3);
console.log("Наименьшее число:", smallest); 
