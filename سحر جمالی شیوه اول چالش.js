// The first method
let vazn = prompt("Enter your weight");
let weight = Number(vazn);
let qad = prompt("Enter your height");
let height = Number(qad);
let bmi = weight / (height ** 2);
const isHealthy = bmi < 25;
const isFat = bmi > 30;
console.log(bmi);
console.log(isHealthy);
console.log(weight);
console.log(height);
