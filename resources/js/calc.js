$(document).ready(function(){
    var numberInput = [];
    var operation;

    function addNumbers(a,b) {
        return a+b;
    }

    function subtractNumbers(a,b) {
        return a-b;
    }

    function multiplyNumbers(a,b){
        return a*b;
    };

    function divideNumbers(a,b) {
        return a/b;
    };

    function displayEquation () {
        $(".btn").click(function(){
            $("#display").append($(this).text());
        });
    };

    displayEquation();
});
