function cons(x){
    console.log(x);
}
// pop Удаляет последний элемент из массива и возвращает его:
// push Добавляет элемент в конец массива:
// shift Удаляет из массива первый элемент и возвращает его:
// unshift Добавляет элемент в начало массива:


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
  var arrayRev = [];
  for (var i = 0; i < list.length; i++) {
    arrayRev.unshift((list[i]));
  }
  return arrayRev;
}

function reverseArrayInPlace(arr) {
  // эта штука съела мне мозг пока на листке бумаги не разобрал.
  var byTwo = Math.floor(arr.length/2);
  var arrLen = arr.length-1;
  var a; var b;

  for (var i = 0; i <  byTwo; i++) {

    a = arr[i];
    b = arr[arrLen];
    arr[i] = b;
    arr[arrLen] = a;
    arrLen--;
  }
  return arr;
}

// var testVar = range(1, 100000000)
// const start= new Date().getTime();
// reverseArrayInPlace(testVar);
// const end = new Date().getTime();
// console.log(end - start);


// https://eloquent-javascript.karmazzin.ru/chapter4#spisok
