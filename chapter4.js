function cons(x){
    console.log(x);
}
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
var list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };
  cons(list)