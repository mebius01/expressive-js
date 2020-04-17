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

var list = {value: 1,rest:
            {value: 2,rest:
              {value: 3,rest: null}
              }
            };

function arrayToList(arr) {
  // создаёт список из массива
  for (let i = 0; i < arr.length; i++) {
    var nextObj = obj || null;
    var obj = {};
    obj['value'] = arr[i];
    obj['rest'] = nextObj;
    // cons(obj);
  }
  return obj;
}

function listToArray(list) {
  // создаёт массив из списка
  var arr =[];
  arr.push(list.value)
  var rest = list.rest
  while (rest != null) {
    arr.push(rest.value)
    rest = rest["rest"];
  }
  return arr;
}

function prepend(list, el) {
  // получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку
  return {value: el, rest: list};
}

function search(list, n) {
  var value = list.value;
  var rest = list.rest;
  if (value == n) {
    return {"pos":0, "val": value};
  }
  var c = 1;
  while (rest != null) {
    rest = rest["rest"];
    c++;
    if (rest != null) {
      if (rest.value == n) {
        return {"pos":c, "val": rest.value};
      }
    }
  }
}

function nth(list, n) {
  // в качестве аргументов принимает список и число,
  // а возвращает элемент на заданной позиции в списке
  // или же undefined в случае отсутствия такого элемента.
  var c = 0;
  var rest = list.rest;
  var value;
  if (n == 0) {
    return list.value;
  } else {
      while (c < n) {
        rest = rest["rest"];
        c++;
        if (rest == null) {
          return undefined;
        } else {
          value = rest.value;
        }
      }
      return value;
    }
}

function deepEqual(x, y) {
  // cons(typeof x)
  // cons(typeof y)
  // cons(typeof x === typeof y)
  // let obj = [1,2,3,4];
  // let n = 2;
  // for (let i in obj) {
  //   cons(obj[i] === n)
  // }
  if (typeof x == typeof y && x != null && y !== null) {
    if (typeof x == 'string' || typeof x == 'number') {
      return x === y;
    } if (Array.isArray(x) && Array.isArray(y)) {
        for (let i in x && y) {
          cons(x[i] == y[i])
        }
    }
  }
}
cons(deepEqual([1,2,3],[1,5,6]))
// cons(deepEqual({v1:1,v2:2,v3:3},[1,5,6]))
// var l=[1,2,3,4,5,6,7,8,9];
// cons(nth(arrayToList(l), 2));
// cons(search(arrayToList(l), 1));
// listToArray(search(list, 3))
// cons(prepend(l, 12));
// cons(arrayToList(l));
// cons([1,2,3].length);
