function cons(x){
    console.log(x);
}
// pop Удаляет последний элемент из массива и возвращает его:
// push Добавляет элемент в конец массива:
// shift Удаляет из массива первый элемент и возвращает его:
// unshift Добавляет элемент в начало массива:

// var ar = [1,2,3,4,5,6,7,8,9,0];
// for (let i in ar) {
//   console.log(i+2);
// };
// for (let i of ar) {
//   console.log(i+2);
// }
// for (let i = 0; i < ar.length; i++) {
//   console.log(ar[i]+2);
// }

// https://eloquent-javascript.karmazzin.ru/chapter4#summa-diapazona
function range(x, y, z=1) {
    var list = [];
    if (x<y) {while (x<y+1) {list.push(x); x=x+z;}}
    else if (x>y) {while (1+x>y) {list.push(y); y=y+z;}}
    return list;
}
function sum(l) {
    var s = 0;
    while (l.length > 0) {
        s = s + l.shift();
    }
    return s;
}
console.log(sum(range(1, 10)));

// https://eloquent-javascript.karmazzin.ru/chapter4#obrashaem-vspyat-massiv
function  reverseArray(list) {
  // отдает новый массив реверс
  var arrayRev = []
  for (let i = 0; i < list.length; i++) {
    // console.log(list.pop(list[i]));
    arrayRev.unshift((list[i]));
  }
  return arrayRev
}

function reverseArrayInPlace(list) {
  let l = list.length-1
  let d = []
  while (l >= 0) {
    d.push(list.pop());
    l--;
  }
  return list.concat(d);
}
var testVar = ["1","2","3","4","5"]
cons(testVar);
testVar = reverseArrayInPlace(testVar);
cons(testVar);

// cons(reverseArray(["1","2","3","4","5"]));