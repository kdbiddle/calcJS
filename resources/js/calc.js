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
    }


    $(".btn").click(function() {
        $("#display").text($(this).val());
    });
});
