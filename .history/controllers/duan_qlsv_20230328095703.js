var sinhVien = [];
document.querySelector("#frmSinhVien").onsubmit = () => {
    let addSinhVien = new SinhVien();
    addSinhVien.maSinhVien = document.querySelector("#maSinhVien");
    addSinhVien.tenSinhVien = document.querySelector("#tenSinhVien");
    addSinhVien.email = document.querySelector("#email");
    addSinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien");
    addSinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen");
    addSinhVien.diemToan = document.querySelector("#diemToan");
    addSinhVien.diemLy = document.querySelector("#diemLy");
    addSinhVien.diemHoa = document.querySelector("#diemHoa");
    addSinhVien.soDienThoai = document.querySelector("#soDienThoai");
}