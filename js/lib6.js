let ds = [];

function themMonHoc() {
    let ten = document.getElementById("tenMon").value;
    let tc = document.getElementById("soTinChi").value;
    let he = document.querySelector('input[name="he"]:checked').value;

    if (ten === "" || tc === "") {
        alert("Nhập thiếu!");
        return;
    }

    let mon = { ten, tc: Number(tc), he };
    ds.push(mon);

    const row = document.createElement("div");
    const text = document.createTextNode(
        ten + " - " + tc + " tín chỉ - " + he
    );

    const btnXoa = document.createElement("button");
    btnXoa.innerText = "Xóa";

    btnXoa.onclick = function () {
        document.getElementById("danhSachMonHoc").removeChild(row);
        ds = ds.filter(m => m !== mon);
    };

    row.appendChild(text);
    row.appendChild(btnXoa);

    document.getElementById("danhSachMonHoc").appendChild(row);

    document.getElementById("tenMon").value = "";
    document.getElementById("soTinChi").value = "";
}

function tinhHocPhi() {
    let tong = 0;

    ds.forEach(m => {
        if (m.he === "daiCuong") tong += m.tc * 500000;
        else tong += m.tc * 590000;
    });

    document.getElementById("tongHocPhi").innerText =
        "Tổng học phí: " + tong + " VND";
}