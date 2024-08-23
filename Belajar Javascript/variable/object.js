let pc = {
  proc: "celeron",
  ram: ["2gb", "8gb"],
  slotram: 2,
  mobo: {
    chip: "B450",
    socket: "LGA1S",
    dualchannel: true
  },
};

console.log(pc.ram);

// console.log(pc.ram); tidak bisa memilih menggunakan angka

// console.log(pc.ram[1]); bisa menggunakan array untuk memilih

// console.log(pc.mobo.socket) bisa menggunakan titik tidak perlu array

// console.log(pc ['ram'] [2]); menggunakan array dan memilih angka atau urutan meggunakan array

// console.log(pc ['ram']); menggunakan array untuk memilih
