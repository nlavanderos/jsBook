//NESTED FUNCTIONS

function hypotenusa(a, b){
    let square=(x)=>{return x*x;}
    return Math.sqrt(square(a)+square(b))

}

console.log(hypotenusa(2,4))

//KNOW IF STRICT MODE, THE LINE BEFORE CAN CHANGE THE STRICT MODE
// 'use strict'
const strict = (function() {
    return !this; }());
console.log(strict)


//CALL, APPLY

function Car(type, fuelType){
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand){
    Car.call(this,"convertible", "petrol");
    Car.apply(this,['sport','gas'])
    this.brand = brand;
    console.log(`Car details = `,this.brand);
    console.log(`Car details = `,this.type);
    console.log(`Car details = `,this.fuelType);
}

setBrand('FORD')


//BIND, CLONE THE ORIGINAL OBJECT AND REWRITE A NEW ONE WITH NEW PROPERTY LIKE
// var concatenateLowDash = strHelper.concatenate.bind( newSeparator );
// ORIGINAL_OBJECT.METHOD.BIND(NEW OBJECT)

var strHelper = {
    separator: '-',

    concatenate: function ( ...str ) {
        return str.join( this.separator );
    }
};

console.info( strHelper.concatenate( 'la', 'donna', 'e', 'mobile' ) );

var newSeparator = {
    separator: '_'
};

var concatenateLowDash = strHelper.concatenate.bind( newSeparator );

console.info( concatenateLowDash( 'la', 'donna', 'e', 'mobile' ) );
// la_donna_e_mobile


function partial(f,...insideF){

    return function (...outsideF){
        let argumentos=[...insideF]
        console.log(argumentos)
        let outsideFIndex=0
        for (let x in argumentos){
            if(argumentos[x]===undefined){
                argumentos[x]=outsideF[outsideFIndex++]
            }
            argumentos.push(...outsideF.slice(outsideFIndex))
        }
        return f.apply(this,argumentos)
        // return f.call(this,...argumentos)


    }

}


//3*(4-1) other argument 2 will loss
const dummyFunction= (x,y,z)=>{return x*(y-z)}

//REPLACE UNDEFINED VALUE WITH OUTSIDEF VALUE
console.log(partial(dummyFunction,undefined,undefined,1)(3,4,2))



//MEMOIZATION WITH FIBONACCI
const fib = (n, memo) => {
    memo = memo || {}

    if (memo[n]){
        console.log(memo)
        return memo[n]}

    if (n <= 0) return 0
    else if (n===1){
        return 1
    }
    //CACHES THE VALUE IN MEMO=FORMULA OF FIBONACCI
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

console.log(fib(12))


//MEMOIZATION WITH GREATEST COMMON DIVISOR, euclidian algorithm
function memoize(f) {
    const cache = new Map(); // Value cache stored in the closure.
    return function(...args) {
// Create a string version of the arguments to use as a cache key.
        let key = args.length + args.join("+");
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            console.log(`EL RESULTAOD ES ${result} y su key ${key}`)
            cache.set(key, result);
            return result;
        }
    };
}

function GCD(a, b){
    if(a<b){
        [a,b]=[b,a]
        console.log('A ERA MENOR QUE B VALORES INTERCAMBIADOS',a,b)
    }
    while(b!==0){

        [a,b]=[b,a%b]
        console.log("VALORES INTERCAMBIADOS B ES NUMERADOR(A) Y EL MODULO ES DENOMINADOR(B)",a,b)

    }
    console.log('RESULTADO DEL GREATEST COMMON DIVISOR',a)
    return a
}

console.log(memoize(GCD)(270,192))