//Bai 1
// let n = 1;
// while (n <= 100 ) {
//     document.write(n + "<br>");
//     n++;
//     if (n == 99) {
//         alert("Da hoan thanh viec dem");
//     }
// }

//Bai 2
// do {
//     inputTemp = parseInt(prompt("Nhap nhiet do"));
//     if (inputTemp > 100) {
//         alert("Hay giam nhiet do");
//     } else if (inputTemp < 20) {
//         alert("Hay tang nhiet do");
//     } else {
//         alert("Da nhan thong tin");
//     }
// } while (inputTemp > 100 || inputTemp < 20)

//Bai 3
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

//Bai 4
// let a = 1;
// let b = 0;
// let c;
// let count = 100;
// while (count >= 0) {
//     c = a;
//     a = a + b;
//     b = c;
//     count--;
//     if (b % 5 == 0) {
//         document.write(b);
//         break;
//     }
// }

//Bai 5
// let a = 1;
// let b = 0;
// let c;
// let numbers = 20
// let total = 0;
// while (numbers >= 0) {
//     c = a;
//     a = a + b;
//     b = c;
//     total = total + b;
//     numbers--;
// } document.write(total);

//Bai 6
// let iMax = 20;
// let jMax = 10;
// let f = new Array();
//
// for (i = 0; i < iMax; i++) {
//     f[i] = new Array();
//     for (j = 0; j < jMax; j++) {
//         f[i][j] = 0;
//     }
// }

//Bai 7
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         document.write(i + " FizzBuzz <br>");
//     } else if (i % 3 == 0) {
//         document.write(i + " Fizz <br>");
//     } else if (i % 5 == 0) {
//         document.write(i + " Buzz <br>");
//     } else {
//         document.write(i + "<br>")
//     }
// }

//Bai 8
// let firstNumber = +prompt("Vui lòng nhập số đầu tiên: ");
// let lastNumber = +prompt("Vui lòng nhập số cuối cùng:   ");
// let luckyNumber;
// if(firstNumber >lastNumber){
//     luckyNumber =Math.floor(Math.random()*(firstNumber-lastNumber +1)) + lastNumber;
// } else {
//     luckyNumber = Math.floor(Math.random()*(lastNumber-firstNumber +1)) +firstNumber;
// }
// for (let i=0;i<=2 ;i++){
//     let numbers = +prompt("Vui lòng nhập số dự đoán");
//     if(luckyNumber === numbers) {
//         alert("Chúc Mừng bạn đã đoán đúng !")
//         break;
//     }else {
//         if(luckyNumber> numbers){
//             alert("Bạn hãy nhập số lớn hơn !")
//         }else {
//             alert("Bạn hãy nhập số nhỏ hơn !")
//         }
//
//     }
// }

