let arrayLength = Math.floor(Math.random() * 11) + 10;  
let arr = [];

for (let i = 0; i < arrayLength; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}

let sumOdd = 0;
let sumEven = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        sumOdd += arr[i]; 
    } else {
        sumEven += arr[i]; 
    }
}

alert("Tổng các số lẻ: " + sumOdd);
alert("Tổng các số chẵn: " + sumEven);