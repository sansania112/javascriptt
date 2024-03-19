let jbtn=prompt("Masukan Jabatam Pegawai?");
switch (jbtn) {
    case "direktur":
        gaji=20000000;
        break;
    case "manager":
        gaji=10000000;
        break;
    default:
        gaji=7500000;
        break;
}

document.write("jadi gaji "+jbtn+"adalah "+gaji)