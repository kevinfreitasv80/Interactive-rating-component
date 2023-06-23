var part1 = document.getElementById("part1");
var num = document.getElementById("num");

var part2 = document.getElementById("part2");
part2.style.display = "none";

var spanTop = document.getElementById("spanTop");
var spanNum = document.getElementById("num");

var valueClicked = 0;
function showValue(val) {
    valueClicked = val;
}

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
    if(valueClicked < 1 || valueClicked > 5){
        spanTop.style.visibility = "visible";
    }else{
        spanTop.style.visibility = "hidden";
        part1.style.display = "none";
        part2.style.display = "block";
        spanNum.textContent = valueClicked;
    }
});