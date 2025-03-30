function isPrime(num) {
    if (num <= 1) return false; // Số nguyên tố phải lớn hơn 1
    for (let i = 2; i <= Math.sqrt(num); i++) { // Kiểm tra các số từ 2 đến căn bậc 2 của num
        if (num % i === 0) {
            return false; // Nếu num chia hết cho i thì không phải số nguyên tố
        }
    }
    return true; // Nếu không có số nào chia hết thì là số nguyên tố
}

// Hàm để tìm và hiển thị 20 số nguyên tố đầu tiên
function displayPrimeNumbers() {
    let primes = [];
    let num = 2; // Bắt đầu kiểm tra từ số 2 (số nguyên tố đầu tiên)
    
    // Tiếp tục tìm cho đến khi có đủ 20 số nguyên tố
    while (primes.length < 20) {
        if (isPrime(num)) {
            primes.push(num); // Thêm số nguyên tố vào mảng
        }
        num++;
    }
    
    // Hiển thị các số nguyên tố đầu tiên
    alert("20 số nguyên tố đầu tiên là: " + primes.join(", "));
}

// Gọi hàm để hiển thị các số nguyên tố
displayPrimeNumbers();