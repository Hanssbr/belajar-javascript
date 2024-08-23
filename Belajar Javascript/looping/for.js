var a = [];

for (var i = 0; i < 10; i++) {
    a.push(i);
}

console.log(a)
console.log('panjang a = ' + a.length + ' elemen')

// menggandakan nilai a

var b = [];

for (var j = 0; j < a.length; j++) {
    b.push(a[j] * 2)
}

console.log(b)

//cari data bernilai 5 dalam array a dan hentikan pencarian //begitu data ditemukan

var c;

//sintaks alternatif, lebih efisien karena panjang array a //disimpan dalam variabel len

for (var k = 0, len = a.length; k < len; k++) {
    if (a[k] === 6) {
        c = a[k];

        //data ditemukan, hentikan loop dan keluar dari loop break;

    }
}

//perhatikan nilai k terakhir tidak sama dengan //panjang array a
console.log('data: ' + c + ' ditemukan di indeks ' + k);