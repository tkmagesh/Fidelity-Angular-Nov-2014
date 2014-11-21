//create a function "getSpinner" which when invoked returns a "spinner" object.

var spinner = getSpinner();

//the following are the expected behaviour of the "spinner" obj

spinner.up() => 1
spinner.up() => 2
spinner.up() => 3
spinner.up() => 4

spinner.down() => 3
spinner.down() => 2
spinner.down() => 1
spinner.down() => 0
spinner.down() => -1

function getSpinner(){
    var counter = 0;
    function increment(){
       return ++counter;
    }
    function decrement(){
       return --counter;
    }
    return {
       up : increment,
      down : decrement
    }
}


function getPrimeChecker(){
    var cache = {};
    function isPrime(n){
        if (n <= 3) return true;
        for(var i=2;i<=(n/2);i++)
            if (n % i === 0) return false;
        return true;
    }
    function checkPrime(n){
        if (typeof cache[n] === "undefined"){
            cache[n] = isPrime(n);    
        }
        return cache[n];
    }
    return checkPrime;
}


function isPrime(n){
        if (n <= 3) return true;
        for(var i=2;i<=(n/2);i++)
            if (n % i === 0) return false;
        return true;
    }

function memoize(fn){
    var cache={};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === "undefined"){
            console.log("juz processed");
            cache[key] = fn.apply(this,[].slice.call(arguments,0));
        } else {
            console.log("from cache");
        }
        return cache[key];
    }
}




































