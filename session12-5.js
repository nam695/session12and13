// bài 1
function inDayFibonacci(n) {
    let fibonacci = [0, 1]; 
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log("Dãy Fibonacci: " + fibonacci.join(", "));
}
let n = parseInt(prompt("Nhập số lượng phần tử Fibonacci cần in:"));
inDayFibonacci(n);
// bài 2
function tinhGiaiThua(m) {
    if (m < 0) {
        console.log("Vui lòng nhập số nguyên dương.");
        return;
    }

    let giaiThua = 1;

    for (let i = 1; i <= m; i++) {
        giaiThua *= i;
    }

    console.log("Giai thừa của " + m + " là: " + giaiThua);
}
let m = parseInt(prompt("Nhập một số nguyên dương để tính giai thừa:"));
tinhGiaiThua(m);
//bài 3

//tam giác vuông góc trái bên dưới
function inTamGiac1(a) {
    for (let i = 1; i <= a; i++) {
        let td = "";
        for (let j = 1; j <= i; j++) {
            td += "*"; 
        }
        console.log(td);
    }
}

let a = parseInt(prompt("Nhập chiều cao tam giác:"));
inTamGiac1(a);
// tam giác vuông góc trên bên trái
function inTamGiac2(b) {
    for (let i = b; i >= 1; i--) {
        let tt = "";
        for (let j = 1; j <= i; j++) {
            tt += "*"; 
        }
        console.log(tt);
    }
}
let b = parseInt(prompt("Nhập chiều cao tam giác:"));
inTamGiac2(b);
//tam giác vuông góc phải bên dưới
function inTamGiac3(c) {
    for (let i = 1; i <= c; i++) {
        let pd = "";
        for (let j = 1; j <= c - i; j++) {
            pd += " "; 
        }
        for (let j = 1; j <= i; j++) {
            pd += "*"; 
        }
        console.log(pd);
    }
}
let c = parseInt(prompt("Nhập chiều cao tam giác:"));
inTamGiac3(c);
// tam giác vuông góc bên trên
function inTamGiac4(d) {
    for (let i = d; i >= 1; i--) {
        let pt = "";
        for (let j = 1; j <= d - i; j++) {
            pt += " "; // In khoảng trắng
        }
        for (let j = 1; j <= i; j++) {
            pt += "*"; // In dấu *
        }
        console.log(pt);
    }
}
let d = parseInt(prompt("Nhập chiều cao tam giác:"));
inTamGiac4(d);
//bài 4
function inHinhChuNhatRong(chiềuRộng, chiềuCao) {
    for (let i = 1; i <= chiềuCao; i++) {
        let row = "";
        
        for (let j = 1; j <= chiềuRộng; j++) {
            if (i === 1 || i === chiềuCao || j === 1 || j === chiềuRộng) {
                row += "*"; 
            } else {
                row += " "; 
            }
        }

        console.log(row);
    }
}
let chiềuRộng = parseInt(prompt("Nhập chiều rộng hình chữ nhật:"));
let chiềuCao = parseInt(prompt("Nhập chiều cao hình chữ nhật:"));

inHinhChuNhatRong(chiềuRộng, chiềuCao);
// bài 5
function tinhLaiNgânHang(P, r, t) {
    let A = P * Math.pow((1 + r), t);

    console.log("Số tiền sau " + t + " tháng là: " + A.toFixed(2));
}
let P = parseFloat(prompt("Nhập số tiền ban đầu (VND):"));
let r = parseFloat(prompt("Nhập lãi suất hàng tháng (tính theo phần trăm, ví dụ 5% là 0.05):"));
let t = parseInt(prompt("Nhập số tháng cho vay:"));

tinhLaiNgânHang(P, r, t);