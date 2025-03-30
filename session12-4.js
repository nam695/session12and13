while (true){
    let baiTap = (`
        1: Đếm số từ 1 đến 100.
        2: Cập nhập nhiệt độ 
        4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
        5: Tổng của 20 số đầu tiên trong dãy fibonacci.
        6: Tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
        7: In ra các số từ 1 đến 100(chia hết cho 3 = "Fizz",
                                                  5 = "Buzz" 
                                                  cả 3 và 5 = "FizzBuzz".
        8: Game đoán số Nâng cấp game "Hãy thử đoán xem!"
    `)
    if (baiTap==1){
        for (let i = 1; i <= 100; i++) {
            if (i === 99) {
                alert("Đã hoàn thành!");
            }
        }
    }

    if (baiTap==2){
        let temperature = parseInt(prompt("Nhập nhiệt độ hiện tại:"));

        if (temperature > 100) {
          alert("Vui lòng giảm nhiệt độ.");
        } else if (temperature < 20) {
          alert("Vui lòng tăng nhiệt độ.");
        } else {
        alert("Nhiệt độ đã phù hợp.");
        }
    }

    if (baiTap==3){
        let fibonacci = [0, 1];
        for (let i = 2; i < 20; i++) {
             fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }

        alert("20 số Fibonacci đầu tiên: " + fibonacci.join(", "));
    }

    if (baiTap==4){
        let fibonacci = [0, 1];
        let num;
        let i = 2;
        while (true) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            if (fibonacci[i] % 5 === 0) {
            num = fibonacci[i];
            break;
        }
        i++;
        }
        alert("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + num);
    }

    if (baiTap==5){
        let fibonacci = [0, 1];
        let sum = 1; 
        for (let i = 2; i < 20; i++) {
           fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
           sum += fibonacci[i];
        }

        alert("Tổng của 20 số Fibonacci đầu tiên là: " + sum);
    }

    if (baiTap==6){
        let sum = 0;
        let count = 0;
        let num = 7;

        while (count < 30) {
           if (num % 7 === 0) {
           sum += num;
           count++;
          }
           num++;
        }

       alert("Tổng của 30 số chia hết cho 7 đầu tiên là: " + sum);
    }
    if (baiTap==7){
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}