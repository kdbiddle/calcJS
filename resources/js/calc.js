$(document).ready(function(){
var calc = {};
    var numberInput = [];
    var operation;

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
        $(".num").click(function(){
            $("#display").append($(this).val());
        });
    };

    calc.operation = function() {
        $(".operator").click(function(){
            $("#display").append($(this).val());
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
