var list = ['a', 'b', 'c'];
var massage;
for (var i in list) {
    
    massage = 'indeks ' + i + ' berisi data ' + list[i];
    console.log(massage)
}


// For in untuk key

var person = {
    'name': 'boss',
    'age': 40,
    'sex': "male"
}

var massage;

for (var attr in person) {
    massage = 'atribut ' + attr + ' berisi data ' + person[attr];
    console.log(massage)
}