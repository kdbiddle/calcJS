$(document).ready(function(){
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

    function displayEquation () {
        $(".btn").click(function(){
            if ($(this).hasClass("num") || $(this).hasClass("operator")) {
                $("#display").append($(this).val());
            } else if ($(this).val() === "clear") {
                $("#display").text("");
            };
        });
    };

    //console.log(document.getElementById("clear").value());

    /*for (id in buttonIDs) {
        var buttonPushed = document.getElementById(id);
        buttonPushed.addEventListener("click", function(){
            console.log(buttonPushed);
            if (buttonPushed.getAttribute("value") < 9) {
            document.getElementById("display").innerHTML += this.getAttribute("value");
        }
        });
    };*/


    displayEquation();
});
