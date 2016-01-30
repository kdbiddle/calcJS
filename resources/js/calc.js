$(document).ready(function(){
    var numberInput = [];
    var operation;
    var buttonIDs = [0, 1, "2", 3, 4, 5, 6, 7, 8, 9, "clear", "+", "-", "*", "/"]

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

    for (id in buttonIDs) {
        document.getElementById(id).addEventListener("click", function(){
            document.getElementById("display").innerHTML += this.getAttribute("value");
        });
    };

    //displayEquation();
});
