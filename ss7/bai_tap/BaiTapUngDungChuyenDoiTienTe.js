function chuyenTien() {
    let tien = document.getElementById("tien").value;
    let sl1 = document.getElementById("sl1").value;
    let sl2 = document.getElementById("sl2").value;
    let VND1 = document.getElementById("VND1").value;
    let VND2 = document.getElementById("VND2").value;
    let USD1 = document.getElementById("USD1").value;
    let USD2 = document.getElementById("USD2").value;
    if (sl1 == VND1 && sl2== USD2)
        {tien= tien/24000}
    else if ((sl1 == VND1 && sl2 == VND2 )||(sl1==USD1 && sl2 == USD2))
         {tien = tien}
    else
         {tien = tien*24000}
    alert(tien);


}