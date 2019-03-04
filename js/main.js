//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100



var prime = [ 2 ],
    num = 2;
while ( num <= 100) {
    var numcheck = 1;
    for ( var i = 0; i < prime.length; i++) {
        if ( num % prime[ i ] === 0) {
            numcheck = 0;
        }
    }
    if ( numcheck === 1 ) {
        prime.push( num );
    }
    num++;
}
console.log ( prime );