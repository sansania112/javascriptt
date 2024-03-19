let a=parseInt(prompt("Masukan Jumlah Pembelian"));
let b=parseInt(prompt("Masukan Uang Yang Dibayarkan"));
if(a>=1000000){
    diskon=0.25*a;
}
else if(a>=500000){
    diskon=0.1*a;
}
else{
    diskon=0;
}
let susuk=b-(a-diskon)
document.write("Diskon "+diskon+"</br>");
document.write("susuk "+susuk);