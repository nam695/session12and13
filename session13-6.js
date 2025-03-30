let arrayLength = Math.floor(Math.random() * 11) + 10;  
let arr = [];

for (let i = 0; i < arrayLength; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}

let k = parseInt(prompt("Nhập một số nguyên k để kiểm tra:"));

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        count++;
    }
}

if (count > 0) {
    alert("Số " + k + " xuất hiện " + count + " lần trong mảng.");
} else {
    alert("Số " + k + " không xuất hiện trong mảng.");
}
