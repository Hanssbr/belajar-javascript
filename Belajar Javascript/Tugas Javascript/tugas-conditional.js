let mhs = {
    name: "Fulan",
    age: 20,
    major: "TRPL",
    skills: ["Sysadmin", "OOP", "Admin" ],
    poor: true,
  };

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