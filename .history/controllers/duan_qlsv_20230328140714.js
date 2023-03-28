let sinhVien = [];
// Submit
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
  addSinhVien.diemToan = +document.querySelector("#diemToan").value;
  addSinhVien.diemLy = +document.querySelector("#diemLy").value;
  addSinhVien.diemHoa = +document.querySelector("#diemHoa").value;
  addSinhVien.soDienThoai = document.querySelector("#soDienThoai").value;
  // Thêm vào mảng sinhVien
  sinhVien.push(addSinhVien);
  saveStorage();

  render(sinhVien);
};

// function render ra giao diện
render = (array) => {
  let newSinhVien = new SinhVien();
  newSinhVien = { ...array };
  let stringHTML = "";
  newSinhVien.forEach((sv) => {
    stringHTML += `
        <tr>
        <th>${sv.maSinhVien}</th>
        <th>${sv.tenSinhVien}</th>
        <th>${sv.email}</th>
        <th>${sv.soDienThoai}</th>
        <th>${sv.diemTrungBinh}</th>
        <th>${sv.diemTrungBinh()}</th>
        <th>
        <button class="btn btn-danger rounded" onclick="xoaSinhVien(${
          sv.maSinhVien
        })">Xóa</button>
        <button class="btn btn-success rounded" >Chỉnh sửa</button>
        </th>
        </tr>
        `;
  });
  document.querySelector("#tblSinhVien").innerHTML = stringHTML;
};

// Xóa SV:
xoaSinhVien = (maSV) => {
  let indexXoa = -1;
  for (let i = 0; i < sinhVien.length; i++) {
    if (+sinhVien[i].maSinhVien === maSV) {
      indexXoa = i;
      break;
    }
  }
  if (indexXoa !== -1) {
    sinhVien.splice(indexXoa, 1);
    render(sinhVien);
  }
  saveStorage();
};
// Set local storage
saveStorage = () => {
  return localStorage.setItem("Mảng Sinh Viên", JSON.stringify(sinhVien));
};

// Lấy local storage

getStorage = () => {
  if (localStorage.getItem("Mảng Sinh Viên")) {
    sinhVien = JSON.parse(localStorage.getItem("Mảng Sinh Viên"));
    console.log(sinhVien);
  }
};
getStorage();
// Rerender lại giao diện
render(sinhVien);
