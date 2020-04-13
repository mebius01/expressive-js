function cons(x){
    console.log(x);
}

function isEven(p) {
    if (p%2 == 0) return true;
    else if (p%2 == 1) return false;
}


// function isEven(n) {
// 	if (n == 0) return true;
// 	else if (Math.abs(n) == 1) return false;
// 	else return isEven(Math.abs(n - 2));
// }
cons(isEven(1));
cons(isEven(-1));
cons(isEven(0));
cons(isEven(50));
cons(isEven(20));
cons(isEven(122));
cons(isEven(80));
cons(isEven(75));