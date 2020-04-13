function cons(x){
    console.log(x);
}

// https://eloquent-javascript.karmazzin.ru/chapter3#minimum
function min(x, y) {
    if (x>y) return y;
    else if (x<y) return x;
}
// cons(min(0,10));

// https://eloquent-javascript.karmazzin.ru/chapter3#rekursiya-1
function isEven(p) {
    if (p == 0) return true;
    else if (p == 1) return false;
    else return isEven(p - 1);
}
// cons(isEven(1));
// // cons(isEven(-1));
// cons(isEven(0));
// cons(isEven(50));
// cons(isEven(75));


// https://eloquent-javascript.karmazzin.ru/chapter3#schitaem-boby
function  countChar(s, l) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i).toLowerCase() == l.toLowerCase()) count++;
    }
    return count;
}
cons(countChar('Takitak', 't'));