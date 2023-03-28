function SinhVien() {
  this.maSinhVien = "";
  this.tenSinhVien = "";
  this.email = "";
  this.loaiSinhVien = "";
  this.diemRenLuyen = 0;
  this.diemToan = 0;
  this.diemLy = 0;
  this.diemHoa = 0;
  this.soDienThoai = 0;
  this.tinhDiemTrungBinh = function () {
    return ((this.diemHoa + this.diemToan + this.diemLy) / 3).toFixed(2);
  };
}
