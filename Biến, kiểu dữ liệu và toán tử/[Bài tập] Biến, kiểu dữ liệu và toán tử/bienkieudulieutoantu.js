// //Bai 1

let inputPhysic;
let inputChemistry;
let inputBiology;
inputPhysic = Number(prompt("Nhap diem mon Vat ly"));
inputChemistry = Number(prompt("Nhap diem mon Hoa hoc"));
inputBiology = Number(prompt("Nhap diem mon Sinh hoc"));
let average = (inputPhysic + inputChemistry + inputBiology) / 3;
document.write("Diem trung binh la " + average);
document.write(" ");
let total = (inputPhysic + inputChemistry + inputBiology);
document.write("Diem tong la " + total);

// //Bai 2
// let inputCelsius;
// inputCelsius = Number(prompt("Nhap do C"));
// let convertCtoF = Number((9 * inputCelsius) / 5) + 32;
// document.write("Do F tuong ung la " + convertCtoF);

// //Bai 3
// let inputRadius;
// inputRadius = Number(prompt("Ban kinh hinh tron la? (don vi cm)"));
// let circleArea = (inputRadius * inputRadius * 3.14);
// document.write('Dien tich hinh tron la ' + circleArea + 'cm2');

// //Bai 4
// let inputRadius;
// inputRadius = Number(prompt("Ban kinh hinh tron la? (don vi cm)"));
// let circlePerimeter = (inputRadius * 2 * 3.14);
// document.write('Chu vi hinh tron la ' + circlePerimeter + 'cm');
