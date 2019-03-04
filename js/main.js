//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var prime = [ 2 ];
var num = 2;
while ( num <= 100) {
    let numcheck = true;
    for ( let i = 0; i < prime.length; i++) {
        if ( num % prime[ i ] === 0) {
            numcheck = false;
        }
    }
    if ( numcheck === true ) {
        prime.push( num );
    }
    num++;
}
console.log ( prime );


//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

for (let i = 0; i < 10; console.log (i++)) {

}


/*4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

var num = '';
for (let i = 1; i <=20; i++) {
    num +='x';
    console.log (num);
}