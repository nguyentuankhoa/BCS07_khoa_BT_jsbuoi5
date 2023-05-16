// bài tập 1 : quản lí tuyển sinh
function quanLiTuyenSinh () {
    var khuVuc = document.getElementById("chonKhucVuc").value;
    if (khuVuc == "a") {
        khuVuc = 2;
    }
    else if (khuVuc == "b") {
        khuVuc = 1;
    }
    else if (khuVuc == "c") {
        khuVuc = 0.5;
    }
    var doiTuong = document.getElementById("chonDoiTuong").value; 
    if (doiTuong == 1) {
        doiTuong = 2.5;
    }
    else if (doiTuong == 2) {
        doiTuong =1.5;
    }
    else if (doiTuong == 3) {
        doiTuong = 1;
    }
    
    var diemTieuChuan = document.getElementById("diemChuan").value *1;
    var diemMon1 = document.getElementById("mon1").value * 1;
  var diemMon2 = document.getElementById("mon2").value * 1;
  var diemMon3 = document.getElementById("mon3").value * 1;
  var diemTong = diemMon1 + diemMon2 + diemMon3;

    var diemUuTien = khuVuc + doiTuong ;
    var tongKet = diemTong + diemUuTien;
    if (diemTong >= diemTieuChuan) {
        document.getElementById("ketQuaBai1").innerHTML = "Đậu rồi nhé: " + "số điểm: " + tongKet;
    }
    else {
        document.getElementById("ketQuaBai1").innerHTML = "Rớt rồi nhé: " + "số điểm: " + tongKet;
    }
}


// bài tập 2: tính tiền điện 

function soTienDien() {
    var hoTen = document.getElementById("hoVaTen").value; 
    var soKw = document.getElementById("nhapSoKw").value * 1;
    if ( soKw < 50) {
        var soTienDien = soKw * 500;  
    }
    else if (50 < soKw <= 100) {
        var soTienDien = 50 *500 + (soKw -50) *650;
    }
    else if (100 < soKw <= 200) {
        var soTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (200 < soKw <= 350) {
      var soTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else if (soKw > 350) {
      var soTienDien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    console.log(hoTen)
    console.log(soTienDien)
    document.getElementById("ketQuaBai2").innerHTML = "họ tên: " + hoTen + "Tiền điện: " + soTienDien;
}
