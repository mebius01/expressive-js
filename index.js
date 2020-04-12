function cons(x){
    console.log(x);
}

// || (ИЛИ)
// && (И)
// ! (НЕ)

// https://eloquent-javascript.karmazzin.ru/chapter2#treugolnik-v-cikle
function triangle() {
    var s = "12345678";
    var ls = 0;
    while (s.length >= ls) {
        cons(s.slice(0, ls));
        ls = ls + 1;
    }
}
// triangle();

// https://eloquent-javascript.karmazzin.ru/chapter2#fizzbuzz
function FizzBuzz(x) {
    var one = 1;
    while (one <= x) {
        if (one%3 == 0 && one%5 == 0) {
            cons(String(one) + ' = FizzBuzz - делится на 3 и на 5');
        } else {
            if (one%5 == 0 && one%3 != 0) {
                cons(String(one) + ' = Buzz - делется на 5 но не три');
            } else {
                if (one%3 == 0) {
                    cons(String(one) + ' = Fizz - делится на 3');
                }
            }
        }   
        one++;
    } 
}
// FizzBuzz(17);

// https://eloquent-javascript.karmazzin.ru/chapter2#shakhmatnaya-doska
function chessBoard(x, lat, spac) {
    var inter_result = "";
    var final_result ="";
    var zero = 1;

    // Функция переворачивает строку
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    };

    while (zero <= x) {
        var k;
        if (k === undefined) {
            k = lat;
        } else {
            if (k === lat) {
                k = spac;
            } else {
                if (k === spac) {
                    k = lat;
                }
            }
        }
        inter_result=inter_result+k;
        zero++;
    }
    final_result=inter_result+"\r\n"+inter_result.reverse()+"\r\n";

    cons(final_result.repeat(x/2));
}
// chessBoard(8, "#", " ");

// Замыкание
// function mul() {
//     var n = 0;
//     return function() {
//         return n++;
//     };
// }
// var k = mul();
// cons(k());
// cons(k());

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