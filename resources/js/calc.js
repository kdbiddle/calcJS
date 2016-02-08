$(document).ready(function(){
var calc = {};
    var numberInput = [];
    var operation;
    var buttonIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function addNumbers(a,b) {
        return a+b;
    };

    function subtractNumbers(a,b) {
        return a-b;
    };

    function multiplyNumbers(a,b){
        return a*b;
    };

    function divideNumbers(a,b) {
        return a/b;
    };

    calc.displayNum = function() {
        $(".btn").click(function(){
            if ($(this).hasClass("num")) {
                $("#display").append($(this).val());
            };
        });
    };

    calc.operation = function() {
        $(".btn").click(function(){
            if ($(this).hasClass("operator")) {
                $("#display").append($(this).val());
            };
        });
    };

    calc.clear = function() {
        $(".btn").click(function(){
            if ($(this).val() === "clear") {
                $("#display").text("");
            };
        });
    };

    calc.equals = function() {

    };

    calc.displayNum();
    calc.operation();
    calc.clear();
});
