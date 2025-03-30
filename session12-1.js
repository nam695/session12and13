while (true ){
    let baiTap = +prompt(`
         1: Nhập vào hai số a,b kiểm tra a có chia hết cho b hay không, hiển thị ra thông báo.
         2: Nhập tuổi để xét đủ điều kiện vào học lớp 10 hay không.
         3: Nhập một số nguyên bất kỳ để kiểm tra lớn hay nhỏ hơn 0.
         4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
         5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra.
    `)

     if (baiTap==1){
         let so1 = prompt("nhập số a");
         let so2 = prompt("nhập số b");
         const result = ( so1 % so2 );
         if ( result == 0 ){
           alert("đây là số nguyên");
        }else {
           alert(" đây không phải số nguyên");
        }
    }

     if (baiTap==2){
         let age = prompt("nhập tuổi để kiểm tra");
         if ( age >= 15 ){
         console.log("đủ điều kiện vào lớp 10");
        }else{
         console.log(`${age}rất tiếc nhưng chưa đủ tuổi`);
        }
    }

     if (baiTap==3){
         let number = +prompt("nhập số nguyên bất kì bạn muốn kiểm tra:");
         if ( number < 0 ){
           console.log(`${number} là số nhỏ hơn 0`);
        }else if ( number >0 ){
           console.log(`${number} là số lớn hơn 0`);
        }
    }

     if (baiTap==4){
         let so4 = +prompt("nhập số thứ nhất");
         let so5 = +prompt("nhập số thứ hai");
         let so6 = +prompt("nhập số thứ ba");
         if ( so4 > so5 && so4 > so6 ){
            console.log(`${so4}là số lớn nhất`);
        }else if ( so5 > so4 && so5 > so6 ){
            console.log(`${so5}là số lớn nhất`);
        }
    }
    

     if (baiTap==5){
         let giuaKy = +prompt("nhập điểm giữa kỳ");
         let cuoiKy = +prompt("nhập điểm cuối kỳ");
            const result = (((giuaKy *2)+(cuoiKy*3))/3)
         if ( result>9.0){
            console.log("đặt danh hiệu xuất sắc");
        }else if ( result>8.0){
            console.log("đặt danh hiệu giỏi");
        }else if ( result>7.0){
            console.log("đặt danh hiệu khá");
        }else if ( result>6.0){
            console.log("đặt danh hiệu trung bình");
        }else {
            console.log("đặt danh hiệu yếu");
        }
    }
    else {
        break;
    }
}

