let mhs = {
  name: "Fulan",
  age: 22,
  major: "TRPL",
  skills: ["Sysadmin", "OOP", "Admin" ],
  poor: false,
};

// console.log("Mahasiswa boleh daftar : " +  (mhs.age > 17));
// if block I
// if (mhs.major == "TRMG") {
//     console.log(mhs.name + " Jurusan TRMG")
// } else if (mhs.major == "TRKJ"){
//     console.log(mhs.name + " Jurusan TRKJ")
// } else if (mhs.major == "TRPL"){
//     console.log(mhs.name + " Jurusan TRPL")
// } else {
//     console.log(mhs.name + " Jurusan " + mhs.major)
// }

// Tenary
// console.log(mhs.major == "TRPL" ? mhs.name + " Jurusan TRPL" : mhs.major == "TRMG" ? mhs.name + " Jurusan TRMG" : mhs.major == "TRKJ" ? mhs.name + " Jurusan TRKJ" : mhs.name + " Jurusan " + mhs.major);

// switch
// switch (mhs.major) {
//     case "TRPL":
//     console.log (mhs.name + " Jurusan TRPL");
//     break;
//     case "TRKJ":
//     console.log (mhs.name + " Jurusan TRKJ");
//     break;
//     case "TRMG":
//     console.log (mhs.name + " Jurusan TRMG");
//     break;
//     default:
//     console.log (mhs.name + " Jurusan " + mhs.major);
// }

// conditional function
// kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan(peserta) {
  let age = peserta.age;
  let poor = peserta.poor;
  let skills = peserta.skills;

  console.log("Biodata Peserta ", peserta);

  if ((age < 21 && poor == true && skills.length > 2)) {
    // Peserta lulus
    console.log("Peserta atas nama " + peserta.name + " lulus");
  } else if (
    (age < 21 || poor == true || skills.length > 2)
  ) {
    // Peserta harus nonton wpu dulu
    console.log(
      "Peserta atas nama " + peserta.name + " harus nonton yutup WPU dulu"
    );
  } else {
    // Peserta tidak lulus
    console.log("Peserta atas nama " + peserta.name + " tidak lulus");
  }
}

cekKelulusan(mhs);
