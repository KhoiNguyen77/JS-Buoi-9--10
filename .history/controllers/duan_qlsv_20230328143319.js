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
  let stringHTML = "";
  array.forEach((sv) => {
    let newSinhVien = new SinhVien();
    Object.assign(newSinhVien, sv);
    stringHTML += `
        <tr>
        <td>${newSinhVien.maSinhVien}</td>
        <td>${newSinhVien.tenSinhVien}</td>
        <td>${newSinhVien.email}</td>
        <td>${newSinhVien.soDienThoai}</td>
        <td>${newSinhVien.tinhDiemTrungBinh()}</td>
        <td>
        <button class="btn btn-danger rounded" onclick="xoaSinhVien(${
          newSinhVien.maSinhVien
        })">Xóa</button>
        <button class="btn btn-success rounded" onclick="editSinhVien(${
          newSinhVien.maSinhVien
        })">Chỉnh sửa</button>
        </td>
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
// Chỉnh sửa:
chinhSua = (maSV) => {
  let indexEdit = -1;
  sinhVien.forEach((key, index) => {
    if (key.maSV === maSV) indexEdit = index;
  });
  if (indexEdit !== -1) {
    document.querySelector("#maSinhVien").value = sinhVien[index].maSinhVien;
    document.querySelector("#tenSinhVien").value = sinhVien[index].tenSinhVien;
    document.querySelector("#loaiSinhVien").value =sinhVien[index].loaiSinhVien;
    document.querySelector("#email").value = sinhVien[index].email;
    document.querySelector("#soDienThoai").value = sinhVien[index].soDienThoai;
    document.querySelector("#diemToan").value = sinhVien[index].diemToan;
    document.querySelector("#diemLy").value = sinhVien[index].diemLy;
    document.querySelector("#diemHoa").value = sinhVien[index].diemHoa;
    document.querySelector("#diemRenLuyen").value =sinhVien[index].diemRenLuyen;

    document.querySelector("#maSinhVien").disabled = true;
    document.querySelector("#btnThemSinhVien").disabled = true;
  }
};

// Set local storage
saveStorage = () => {
  return localStorage.setItem("Mảng Sinh Viên", JSON.stringify(sinhVien));
};

// Lấy local storage

getStorage = () => {
  if (localStorage.getItem("Mảng Sinh Viên")) {
    sinhVien = JSON.parse(localStorage.getItem("Mảng Sinh Viên"));
  }
};
getStorage();
// Rerender lại giao diện
render(sinhVien);
