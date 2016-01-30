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

    document.getElementById("7").addEventListener("click", function(){
        document.getElementById("display").innerHTML = this.getAttribute("value");
    });

    //displayEquation();
});
