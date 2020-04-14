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
// console.log(sum(range(1, 10)));

// https://eloquent-javascript.karmazzin.ru/chapter4#obrashaem-vspyat-massiv
function  reverseArray(list) {
  // отдает новый массив реверс
  var arrayRev = []
  for (let i = 0; i < list.length; i++) {
    arrayRev.unshift((list[i]));
  }
  return arrayRev
}

function reverseArrayInPlace(list) {
  let l = list.length-1
  let d = []
  while (l >= 0) {
    list.unshift(12+l);
    // delete list[l];
    // cons(list[l]);
    l--
  }
  // list.unshift(list.pop())
  // list.unshift(list.pop())
  // list.unshift(list.pop())
  // list.unshift(list.pop())
  // list.unshift(list.pop())

  // while (l >= 0) {
    // d.push(list.pop());
    // l--;
  // }
  // cons(d);
  // list = d;
  // cons(list);
  return list;
  // return list.concat(d);
}

// function reverseArrayInPlace(arr) {
// 	var i = Math.floor(arr.length / 2);

// 	for (var j = 0; j < i; ++j) {
// 		var tmp = arr[arr.length - j - 1];
// 		arr[arr.length - j - 1] = arr[j];
// 		arr[j] = tmp;
// 	}

// 	return arr;
// }

var testVar = ["1","2","3","4","5"]
// cons(testVar);
reverseArrayInPlace(testVar);
cons(testVar);

// cons(reverseArray(["1","2","3"]));