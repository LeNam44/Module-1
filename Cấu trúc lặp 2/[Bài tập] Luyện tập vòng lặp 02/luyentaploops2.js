//Bai 1
// let a = 1;
// let b = 0;
// let c;
// let numbers = parseInt(prompt("Ban muon hien thi bao nhieu so fibonacci?"));
// while (numbers >= 0) {
//     c = a;
//     a = a + b;
//     b = c;
//     document.write(b + "<br>");
//     numbers--;
// }

//Bai 2
// let inputNumber = parseInt(prompt("Nhap mot so"));
// let factorial = 1;
// for (let i = inputNumber; i > 0; i--) {
//     factorial = factorial * i;
// }
// document.write("Giai thua cua " + inputNumber + " la " + factorial)

//Bai 3
//
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write('* ');
//     }
//     document.write('<br>');
// }
// document.write('<br>');
//
// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write('* ');
//     }
//     document.write('<br>');
// }
// document.write('<br>');
//
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j < i; j++) {
//         document.write('&ensp;');
//     }
//     for (let j = 5; j >= i; j--) {
//         document.write('*');
//     }
//     document.write("<br>")
// }
// document.write('<br>');
//
// for (let i = 0; i <= 5; i++) {
//     for (let j = 4; j >= i; j--) {
//         document.write('&ensp;');
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('*');
//     }
//     document.write("<br>")
// }

//Bai 5
// let money = +prompt("Nhap so tien gui")
// let month = +prompt("Nhap so thang gui")
// let laiSuat = +prompt("Nhap vao lai suat")
// let moneyAfter = money
// let tienLai = 0;
// for (let i = 0; i < month; i++) {
//     tienLai = moneyAfter * (laiSuat/100)
//     moneyAfter += tienLai
// }
// alert("So tien sau khi gui la " + moneyAfter + " trong " + month + " thang co lai suat la " + (moneyAfter - tienLai))

//Bai 6

