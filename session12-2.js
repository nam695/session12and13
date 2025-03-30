while (true){
    let baiTap = (`
        1: Chuyển từ độ C sang độ F.
        2: Chuyển từ mét sang feet
        3: Tính diện tích hình vuông .
        4: Tính diện tích hình chữ nhật.
        5: Tính diện tích tam giác vuông .
        6: Giải phương trình bậc 1.
        7: Giải phương trình bậc 2.
        8: Kiểm tra số tuổi một người là đúng hay không.
        9: Kiểm tra (a,b,c) nhập vào có phải là cạnh của một tam giác.`)

    if (baiTap==1){
      let doC = +prompt("nhập độ C bạn muốn quy đổi")
      const result = ((doC * 1.8)+32)
      alert(result);
    }

    if (baiTap==2){
      let feet = +prompt("nhập số M bạn muốn quy đổi")
      const result = (feet * 3.2808)
      alert(result);
    }

    if (baiTap==3){
     let a = +prompt("nhập chiều dài cạmh himhf vuông bạn muốn tính")
     const result = ( a * a )
     alert(`${result} là diện tích hình vuông có độ dài cạnh là${a}`);
    }

    if (baiTap==4){
      let a = +prompt("nhập chiều dài hình chữ nhật bạn muốn tính")
      let b = +prompt("nhập độ rộng hình chữ nhật bạn muốn tính ")
      const result = ( a * b )
      alert(`${result} là diện tích hình chữ nhật`);
    }

    if (baiTap==5){
        let c1 = +prompt("Nhập chiều dài cạnh thứ nhất");
        let c2 = +prompt("Nhập chiều dài cạnh thứ 2");
        const result = ( (c1 * c2)/2);
        alert(result);
    }

    if (baiTap==6){
      let a = +prompt("nhập biến a  (VD:ax + b = c)");
      let b = +prompt("nhập biến còn lại");
      let c = +prompt("nhập kết quả phương trình");
      if ((c - b)/a){
      alert(`giá trị của X = ${(c - b)/a}`)
      }else {
      alert("phương trình nhập sai biến")
      }
    }

    if (baiTap==7){
      console.log("xin lỗi hệ thống chưa cập nhập giải phương trình bậc 2 ")
      // e chưa nghĩ ra đc cách code giải phương trình bậc 2
    }

    if (baiTap==8){
       let age = +prompt("Nhập số bạn muốn kiểm tra có phải tuổi người không");
       if (0< age <120){
        alert(`${age}là tuổi của người bình thường`);
      }else{
        alert("Không thể xác minh, vui lòng nhập lại");
      }
    }

    if (baiTap==9){
       let c1 = +prompt("Nhập độ dài cạnh thứ nhất");
       let c2 = +prompt("Nhập độ dài cạnh thứ hai");
       let c3 = +prompt("Nhập độ dài cạnh thứ ba");
       const result = ( (c1+c2)>c3 || (c3+c2)>c1 ||(c1+c3)>c2);
       if (result>0){
        console.log("Đây là 1 tam giác");
       }else {
        console.log("Đây không phải tam giác");
       }
    
    }else{
      break
    }
}