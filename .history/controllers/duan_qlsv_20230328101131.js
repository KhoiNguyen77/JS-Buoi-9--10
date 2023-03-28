let sinhVien = [];
document.querySelector("#frmSinhVien").onsubmit = (event) => {
  // Ngăn reload
  event.preventDefault();
  let addSinhVien = new SinhVien();
  //  Lấy info trên các thẻ input
  addSinhVien.maSinhVien = document.querySelector("#maSinhVien").value;
  addSinhVien.tenSinhVien = document.querySelector("#tenSinhVien").value;
  addSinhVien.email = document.querySelector("#email").value;
  addSinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  addSinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  addSinhVien.diemToan = document.querySelector("#diemToan").value;
  addSinhVien.diemLy = document.querySelector("#diemLy").value;
  addSinhVien.diemHoa = document.querySelector("#diemHoa").value;
  addSinhVien.soDienThoai = document.querySelector("#soDienThoai").value;
  // Thêm vào mảng sinhVien
  sinhVien.push(addSinhVien);
  console.log(sinhVien);
  localStorage.setItem("Mảng Sinh Viên", JSON.stringify(sinhVien));
  render(sinhVien);
};

// function render ra giao diện
render = (array) => {
  let stringHTML = "";
  array.forEach((sv) => {
    stringHTML += `
    <tr>
        <th>${sv.maSinhVien}</th>
        <th>${sv.tenSinhVien}</th>
        <th>${sv.email}</th>
        <th>${sv.soDienThoai}</th>
        <th>${sv.diemTrungBinh}</th>
    </tr>
    `;
  });
  document.querySelector("#tblSinhVien").innerHTML = stringHTML;
};