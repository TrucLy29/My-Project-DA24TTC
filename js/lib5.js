function inBang() {
    let n = parseInt(document.getElementById("so").value);
    let kq = "";

    for (let i = 1; i <= 10; i++) {
        kq += n + " x " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("ketqua").innerHTML = kq;
}