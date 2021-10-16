//---------------------------------Bai 1---------------------------------
// let doC = parseInt(prompt("Nhap do C"));
// if (doC >= 0) {
//     let doF = doC * 9 / 5 + 32;
//     alert("Do F la " + doF);
// }

//---------------------------------Bai 2---------------------------------
// let soMet = parseInt(prompt("Nhap so met"));
// if (soMet >= 0) {
//     let soFeet = soMet * 3.2808;
//     alert("So feet la " + soFeet);
// }

//---------------------------------Bai 3---------------------------------
// let canhA = parseInt(prompt("Nhap do dai canh A (m)"));
// if (canhA >= 0) {
//     let dienTich = canhA * canhA;
//     alert("Dien tich hinh vuong la " + dienTich + " met vuong");
// }

//---------------------------------Bai 4---------------------------------
// let chieuDai = parseInt(prompt("Nhap chieu dai hinh chu nhat (m)"));
// let chieuRong = parseInt(prompt("Nhap chieu rong hinh chu nhat (m)"));
// if (chieuDai >= 0 && chieuRong >= 0) {
//     let dienTich = chieuDai * chieuRong;
//     alert("Dien tich hinh chu nhat la " + dienTich + " met vuong");
// }

//---------------------------------Bai 5---------------------------------
// let chieuCao = parseInt(prompt("Nhap chieu cao cua tam giac vuong"));
// let canhDay = parseInt(prompt("Nhap chieu dai canh day tam giac vuong"));
// if (chieuCao >= 0 && canhDay >= 0) {
//     let dienTich = 1 / 2 * chieuCao * canhDay;
//     alert("Dien tich tam giac vuong la " + dienTich + " met vuong");
// }

//---------------------------------Bai 6---------------------------------
// let a = parseInt(prompt("Nhap gia tri a:"));
// let b = parseInt(prompt("Nhap gia tri b:"));

// if (isNaN(a) || isNaN(b)) {
//     alert("Hay nhap dung so!")
// }
// else if (a == 0) {
//     alert("Phuong trinh khong co nghiem")
// }
// else if (b == 0) {
//     alert("Phuong trinh co vo so nghiem")
// }
// else {
//     let x = -b / a
//     alert("Sau khi giai phuong trinh thi ket qua cua x la " + x)
// }

//---------------------------------Bai 7---------------------------------
// let a = parseInt(prompt("Nhap gia tri a:"));
// let b = parseInt(prompt("Nhap gia tri b:"));
// let c = parseInt(prompt("Nhap gia tri c:"));
// let delta = b * b - 4 * a * c

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     alert("Hay nhap dung gia tri la so!")
// } else if (delta < 0) {
//     alert("Phuong trinh khong co nghiem")
// } else if (delta == 0) {
//     x = -b / (2 * a)
//     alert("Phuong trinh co nghiem kep la x1 = " + "x2 = " + x)
// } else if (delta > 0) {
//     x1 = (-b + Math.sqrt(delta)) / (2 * a)
//     x2 = (-b - Math.sqrt(delta)) / (2 * a)
//     alert("Phuong trinh co hai nghiem phan biet la x1 = " + x1 + " va x2 = " + x2)
// }

//---------------------------------Bai 8---------------------------------
// let checkIfAge = parseInt(prompt("Nhap mot so"));
// if (checkIfAge > 0 && checkIfAge <= 120) {
//     alert("So nay la tuoi cua mot nguoi");
// } else {
//     alert("So nay khong phai la tuoi cua mot nguoi");
// }

//---------------------------------Bai 9---------------------------------
// let a = parseInt(prompt("Nhap gia tri a"));
// let b = parseInt(prompt("Nhap gia tri b"));
// let c = parseInt(prompt("Nhap gia tri c"));
// if (a > 0 && b > 0 && c > 0) {
//     if (a + b > c && b + c > a && a + c > b) {
//         alert("Cac gia tri a, b, c la cac canh cua mot tam giac");
//     } else {
//         alert("Cac gia tri a, b, c khong phai la cac canh cua mot tam giac")
//     }
// } else {
//     alert("Hay nhap cac gia tri lon hon 0");
// }

//---------------------------------Bai 10---------------------------------
//kWh 0-50: 1678Vnd/kWh
//kWh 51-100: 1734Vnd/kWh
//kWh 101-200: 2014Vnd/kWh
//kWh 201-300: 2536Vnd/kWh
//kWh 301-400: 2834Vnd/kWh
//kWh tu 401 tro len: 2927Vnd/kWh

// let soDien = parseInt(prompt("Nhap so kWh dien da su dung"));
// let cuocPhi = 0;

// if (soDien > 400) {
//     cuocPhi = (soDien - 400) * 2927 + (100 * 2834) + (100 * 2536) + (100 * 2014) + (100 * 1734) + (50 * 1678);
// } else if (soDien > 300 && soDien < 401) {
//     cuocPhi = (soDien - 300) * 2834 + (100 * 2536) + (100 * 2014) + (100 * 1734) + (50 * 1678);
// } else if (soDien > 200 && soDien < 301) {
//     cuocPhi = (soDien - 200) * 2536 + (100 * 2014) + (100 * 1734) + (50 * 1678);
// } else if (soDien > 100 && soDien < 201) {
//     cuocPhi = (soDien - 100) * 2014 + (100 * 1734) + (50 * 1678);
// } else if (soDien > 50 && soDien < 101) {
//     cuocPhi = (soDien - 50) * 1734 + (50 * 1678);
// } else if (soDien > 0 && soDien < 51) {
//     cuocPhi = soDien * 1678;
// }

// alert("Ban da dung " + soDien + " kWh dien. Cuoc phi dien cua ban la " + cuocPhi + " VND");

//---------------------------------Bai 11---------------------------------
// - Khau tru thu nhap
// 0 nguoi phu thuoc: 11 triệu đồng/tháng
// 1 nguoi phu thuoc: 15.4 triệu đồng/tháng
// 2 nguoi phu thuoc: 19.8 triệu đồng/tháng
// 3 nguoi phu thuoc: 24.2 triệu đồng/tháng
// - Thue thu nhap sau khi khau tru
// Bậc 1: Đến 5 triệu đồng/tháng 5%;
// Bậc 2: Trên 5 - 10 triệu đồng/tháng: 10% - 0,25 trđ;
// Bậc 3: Trên 10 - 18 triệu đồng: 15% - 0,75 trđ;
// Bậc 4: Trên 18 - 32 triệu đồng/tháng: 20% - 1,65 trđ;
// Bậc 5: trên 32 - 52 triệu đồng/tháng: 25% - 3,25 trđ;
// Bậc 6: Trên 52 - 80 triệu đồng/tháng: 30% - 5,85 trđ;
// Bậc 7: Trên 80 triệu đồng: 35% - 9,85 trđ;

// let salary = parseFloat(prompt("Nhap so tien luong cua ban thang nay (don vi trieu dong)"));
// let dependent = parseInt(prompt("Ong/ba co bao nhieu nguoi phu thuoc? (0 den 3)"));
// let deductAmount;

// switch (dependent) {
//     case 0:
//         deductAmount = 11;
//         break;
//     case 1:
//         deductAmount = 15.4;
//         break;
//     case 2:
//         deductAmount = 19.8;
//         break;
//     case 3:
//         deductAmount = 24.2;
//         break;
//     default:
//         alert("Hay nhap so tu 0 den 3");
// }
// let salaryAfterDeduct = salary - deductAmount;
// console.log(salaryAfterDeduct);
// let tax;
// if (salaryAfterDeduct > 80) {
//     tax = (salaryAfterDeduct * 0.35) - 9.85;
// } else if (salaryAfterDeduct > 52 && salaryAfterDeduct <= 80) {
//     tax = (salaryAfterDeduct * 0.3) - 5.85;
// } else if (salaryAfterDeduct > 32 && salaryAfterDeduct <= 52) {
//     tax = (salaryAfterDeduct * 0.25) - 3.25;
// } else if (salaryAfterDeduct > 18 && salaryAfterDeduct <= 32) {
//     tax = (salaryAfterDeduct * 0.2) - 1.65;
// } else if (salaryAfterDeduct > 10 && salaryAfterDeduct <= 18) {
//     tax = (salaryAfterDeduct * 0.15) - 0.75;
// } else if (salaryAfterDeduct > 5 && salaryAfterDeduct <= 10) {
//     tax = (salaryAfterDeduct * 0.1) - 0.25;
// } else if (salaryAfterDeduct > 0 && salaryAfterDeduct <= 5) {
//     tax = (salaryAfterDeduct * 0.05);
// }
// console.log(tax);
// tax = tax.toFixed(2);
// if (tax <= 0) {
//     alert("Ban khong co thue")
// } else {
//     alert("Thue cua ban thang nay la: " + tax + " trieu VND");
// }

//---------------------------------Bai 12---------------------------------
//Lai suat vay hang thang la 5% thang
//Lai suat duoc tinh theo cach tinh lai kep (lai me de lai con)
// let money = parseInt(prompt("So tien ban vay ngan hang la bao nhieu? (don vi trieu dong)"));
// let monthBorrow = parseInt(prompt("Ban dinh vay trong bao nhieu thang"))
// let paybackAmount = money * Math.pow((1 + 0.05), monthBorrow);
// let interestAmount = paybackAmount - money;
// interestAmount = interestAmount.toFixed(2);
// alert("So tien lai phai tra neu vay so tien " + money + " trieu trong " + monthBorrow + " thang la " + interestAmount + " trieu dong")