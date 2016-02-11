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
        $("#clear").click(function(){
            $("#display").text("");
        });
    };

    calc.equals = function() {
        $("#equals").click(function(){
            var solution = $("#display").text();
            console.log(parseInt(solution));
        });
    };

    calc.displayNum();
    calc.operation();
    calc.clear();
    calc.equals();
});
