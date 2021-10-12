//-----------Bai 1-------------
// let a = parseInt(prompt("Input a"));
// let b = parseInt(prompt("Input b"));
// let remain = a % b
// if (remain == 0) {
//     alert("a chia het cho b");
// } else {
//     alert("a khong chia het cho b");
// }

//-----------Bai 2-------------
// let age = Number(prompt("Nhap tuoi hoc sinh:"));
// if (age < 16) {
//     alert("Khong du dieu kien vao lop 10");
// } else {
//     alert("Du dieu kien voi lop 10");
// }

//-----------Bai 3-------------
// let inputRandom = parseInt(prompt("Nhap so ngau nhien de so sanh voi 0"))
// if (inputRandom > 0) {
//     alert("So nay lon hon 0");
// } else if (inputRandom < 0) {
//     alert("So nay nho hon 0");
// } else {
//     alert("So nay bang 0");
// }

//-----------Bai 4-------------
// let number1 = parseInt(prompt("Nhap so thu nhat"));
// let number2 = parseInt(prompt("Nhap so thu hai"));
// let number3 = parseInt(prompt("Nhap so thu ba"));
// if (number1 > number2) {
//     if (number1 > number3) {
//         alert("So lon nhat la " + number1);
//     }
// }

// if (number1 > number2) {
//     if (number1 < number3) {
//         alert("So lon nhat la " + number3);
//     }
// }

// if (number2 > number1) {
//     if (number2 > number3) {
//         alert("So lon nhat la " + number2);
//     }
// }

//-----------Bai 5-------------
// let scoreTest1 = parseInt(prompt("Diem bai kiem tra so 1 (0-10)"));
// let scoreTest2 = parseInt(prompt("Diem bai kiem tra so 2 (0-10)"));
// let scoreMidterm = parseInt(prompt("Diem bai kiem tra giua ky (0-10)"));
// let scoreFinal = parseInt(prompt("Diem bai kiem tra cuoi ky (0-10)"));
// let total = scoreTest1 + scoreTest2 + scoreMidterm + scoreFinal;
// if (total <= 40) {
//     if (total >= 35) {
//         alert("Hoc sinh loai S - xuat sac");
//     } else if (total >= 30 && total < 35) {
//         alert("Hoc sinh loai A - gioi");
//     } else if (total >= 25 && total < 30) {
//         alert("Hoc sinh loai B - kha");
//     } else if (total >= 20 && total < 25) {
//         alert("Hoc sinh loai C - trung binh");
//     } else if (total < 20) {
//         alert("Hoc sinh loai D - yeu kem");
//     }
// } else {
//     alert("Xin nhap lai diem so cho chinh xac!");
// }

//-----------Bai 6-------------
// const bill = Number(prompt("Hoa don la bao nhieu USD?"));
// if (bill >= 50) {
//     if (bill <= 300) {
//         let hoaHong = bill * 0.15;
//         alert("Hoa hong nhan duoc la " + hoaHong + " USD")
//     } else {
//         let hoaHong = bill * 0.2;
//         alert("Hoa hong nhan duoc la " + hoaHong + " USD");
//     }
// } else {
//     alert("Khong co hoa hong");
// }

//-----------Bai 7-------------
//Phí thuê bao bắt buộc là 25 nghìn.
//600 đồng cho mỗi phút gọi của 50 phút đầu tiên
//400 đồng cho mỗi phút gọi trong 150 phút tiếp theo
//200 đồng cho mỗi phút gọi sau 200 phút đầu tiên

// let soPhut = parseInt(prompt("Nhap so phut goi dien thoai da su dung"));
// let cuocPhi = 0;
// let tongPhi = 0;
// let phiCoDinh = 25000;
// if (soPhut > 200) {
//     cuocPhi = (soPhut - 200) * 200 + (150 * 400) + (50 * 600);
// } else if (soPhut > 50) {
//     cuocPhi = (soPhut - 150) * 400 + (50 * 600);
// } else {
//     cuocPhi = soPhut * 600;
// }
// tongPhi = cuocPhi + phiCoDinh;
// alert("Ban da goi " + soPhut + " phut. Cuoc phi dien thoai cua ban la " + tongPhi + " VND");
