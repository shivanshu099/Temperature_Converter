let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
console.log(celsius,fahrenheit);
function celTofar(){
    let output = (parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
function farTocel(){
    let output = (parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value = parseFloat(output.toFixed(2));
}