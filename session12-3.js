function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

function displayPrimeNumbers() {
    let primes = [];
    let num = 2; 
    
    while (primes.length < 20) {
        if (isPrime(num)) {
            primes.push(num); 
        }
        num++;
    }
    
    alert("20 số nguyên tố đầu tiên là: " + primes.join(", "));
}

displayPrimeNumbers();
