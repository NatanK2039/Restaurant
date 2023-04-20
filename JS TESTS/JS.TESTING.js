function hellofunction() {alert('Hello Napier');}

function changeText(){
    const h1 = document.querySelector("#h1exampl");
    h1.innerText = "byooo";

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#changehtml").onclick = function() {changeText();}
});