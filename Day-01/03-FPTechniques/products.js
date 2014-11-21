var products = [
    {id : 6, name : "Pen", cost : 10, units : 70, category : 1},
    {id : 3, name : "Hen", cost : 70, units : 50, category : 2},
    {id : 8, name : "Ten", cost : 40, units : 30, category : 1},
    {id : 2, name : "Den", cost : 80, units : 60, category : 2},
    {id : 9, name : "Len", cost : 60, units : 90, category : 1},
    {id : 5, name : "Zen", cost : 50, units : 20, category : 2}
]

console.log("Default list");
console.table(products);

var sort = function(list){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++){
            var left = list[i],
                right = list[j];
            if (left.id > right.id){
                var temp = left;
                list[i] = list[j];
                list[j] = temp;
            }
        }
}

console.log("After sorting [default]");
sort(products);
console.table(products);

var sort = function(list, attrName){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++){
            var left = list[i],
                right = list[j];
            if (left[attrName] > right[attrName]){
                var temp = left;
                list[i] = list[j];
                list[j] = temp;
            }
        }
}

console.log("Sort by cost");
sort(products,"cost");
console.table(products);

var sort = function(list, comparerFn){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++){
            var left = list[i],
                right = list[j];
            if (comparerFn(left,right) > 0){
                var temp = left;
                list[i] = list[j];
                list[j] = temp;
            }
        }
}

var productComparerByValue = function(p1,p2){
    var p1Value = p1.cost * p1.units,
        p2Value = p2.cost * p2.units;
    if (p1Value < p2Value) return -1;
    if (p1Value > p2Value) return 1;
    return 0;
}

console.log("Sort by product value [ cost * units ]");
sort(products,productComparerByValue);
console.table(products);

var filter = function(list,predicate){
    var result = [];
    for(var i=0;i<list.length;i++)
        if (predicate(list[i]))
            result.push(list[i]);
    return result;
}

var costlyProductPredicate = function(product){
    return product.cost > 50;
}

var costlyProducts = filter(products,costlyProductPredicate);
console.log("All costly products [cost > 50]")
console.table(costlyProducts);

function inversePredicate(predicateFn){
    return function(){
        return !predicateFn.apply(this,[].slice.call(arguments,0));
    }
}

var affordableProductPredicate = inversePredicate(costlyProductPredicate);
var affordableProducts = filter(products,affordableProductPredicate);
console.log("Affordable products [inverse of costly products]");
console.table(affordableProducts);

/*
collection
============
min
max
avg
sum

some
every

map

pluck


function
========
once
after
before

*/


