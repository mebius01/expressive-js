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

var list = {value: 1, rest: 
            {value: 2, rest:
              { value: 3, rest: null}
            }
          };

function arrayToList(arr) {
  obj = {};
  // if (arr.length > 1)
  //  return obj={ value: arr.shift(), rest: arrayToList(arr)};
  // else if (arr.length == 2)
  //   return obj = {value: arr.shift(), rest: {value: arr.shift(), rest: null}};
  // else return arrayToList(arr);


  // for (let i = 0; i < arr.length+1; i++) {
  //   obj[i] = (arr);
  //   cons(arr[i]);
  //   cons(obj);
  // }
  // z = 0
  // while (arr.length != 0 ) {
  //   obj = {value: 1, rest:arr.shift()};
  //   cons(arr);
  //   cons(obj);
  // }

  if (arr.length+1 != 0) {
    return obj = {value: arr.shift(),  rest: {value: arr.shift(), rest: null}};
  } else { return arrayToList(arr);}

  // for (var i = 0; i < arr.length; i++) {
//     // a(i)
//     obj['value']=arr[i];
//     obj['rest']= a(i);
//     cons(obj);
//   }
//   // obj['value']=arr[i];
//   //   obj['rest']={'value':i};
//   // while (arr.length > z) {
//   //   obj['value'] = z;
//   //   z++;
//   //   cons(obj);
//   // }
}

cons(arrayToList([1,2,3]));

// cons([1,2,3].length);