var a = [];
var i = 0;

// selama i kurang dari 4
// break condition : i == 4

while (i < 4) {
    // simpan i dalam array
    a.push(i);
    
    // naikkan i untuk proses selanjutnya
    console.log(i)

    i++;
};

console.log(a)

// bisa juga di tulis dengan :

// var ikut var atas

while (i++ < 4) {
    a.push(i);
};

console.log(a)