var a = [];
var i = 0;

do {
    a.push(i)
    i++;

} while (i < 4);

console.log(a)

// perbedaan keduanya antara while dan do-while

var b = [];
var i =5;

while(i < 4) {
    b.push(i);
    i++;
}

// b memiliki elemen (kosong) karena blok kode tidak pernah di eksekusi

console.log(b)

var a = [];
var i = 5;

do {
    a.push(i);
    i++;
}while (i < 4);

// a memiliki satu elemen karena blok kode 
// dieksekusi minimal satu kali
console.log(a); 