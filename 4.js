const currentYear = 2002;
const targetYear = 2045;
const ageInTargetYear = targetYear - currentYear;
const ageRatio = ageInTargetYear /  (currentYear - 2023);

console.log("В 2045 году вам будет " + ageInTargetYear + " лет.");
console.log("Вы будете старше в " + ageRatio.toFixed(2) + " раз.");
