
function calculatePercentage() {
    var inputvalue = document.getElementById('result').value;
    var displayValue = inputvalue / 100;
    document.getElementById('result').value = displayValue;
}
function calculateSqrt() {
    var inputvalue = document.getElementById('result').value;
    var displayValue = Math.sqrt(parseInt(inputvalue));
    document.getElementById('result').value = displayValue;
}