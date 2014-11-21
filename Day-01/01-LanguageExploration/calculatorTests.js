var expect = chai.expect;

describe("A Calculator", function(){
    describe("Should be able to Add", function(){
        it("two numbers", function(){
            //Arrange
            var number1 = 10,
                number2 = 20,
                expectedResult = 30;
            
            //Act
            var result = add(number1, number2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("two numbers in string format", function(){
            //Arrange
            var number1 = "10",
                number2 = "20",
                expectedResult = 30;
            
            //Act
            var result = add(number1, number2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("ignoring non numeric strings", function(){
            //Arrange
            var number1 = "10",
                number2 = "abc",
                expectedResult = 10;
            
            //Act
            var result = add(number1, number2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("two functions returning numbers", function(){
            //Arrange
            var f1 = function(){ return  10;},
                f2 = function(){ return  20;},
                expectedResult = 30;
            
            //Act
            var result = add(f1,f2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("two functions returning numbers in string format", function(){
            //Arrange
            var f1 = function(){ return  "10";},
                f2 = function(){ return  "20";},
                expectedResult = 30;
            
            //Act
            var result = add(f1,f2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("two functions returning functions returing numbers in string format", function(){
            //Arrange
            var f1 = function(){ return function(){ return  "10";}},
                f2 = function(){ return function(){ return  "20";}},
                expectedResult = 30;
            
            //Act
            var result = add(f1,f2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("only one number", function(){
            //Arrange
            var n1 = 10,
                expectedResult = 10;
            
            //Act
            var result = add(n1);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("returns 0 when no arguments passed", function(){
            //Arrange
            var   expectedResult = 0;
            
            //Act
            var result = add();
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("more than two numbers", function(){
            //Arrange
            var   expectedResult = 100;
            
            //Act
            var result = add(10,20,30,40);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
         it("arrays of numbers", function(){
            //Arrange
            var numbers1 = [10,30],
                numbers2 = [20,40],
                expectedResult = 100;
            
            //Act
            var result = add(numbers1, numbers2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("nested arrays of numbers", function(){
            //Arrange
            var numbers1 = [10,[20,[30,[40]]]],
                expectedResult = 100;
            
            //Act
            var result = add(numbers1);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("two functions returning array of numbers in string format", function(){
            //Arrange
            var f1 = function(){ return  ["10","30"];},
                f2 = function(){ return  ["20","40"];},
                expectedResult = 100;
            
            //Act
            var result = add(f1,f2);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        it("arrayt of two functions returning array of numbers in string format", function(){
            //Arrange
            var f1 = function(){ return  ["10","30"];},
                f2 = function(){ return  ["20","40"];},
                expectedResult = 100;
            
            //Act
            var result = add([f1,f2]);
            
            //Assert
            expect(result).to.equal(expectedResult);
        });
        
    });
});