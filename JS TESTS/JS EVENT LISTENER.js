function changeText() {
    const h1 = document.querySelector("#h1example");
    h1.innerText = "byooo";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#changehtml").onclick = function() {
      changeText();
    }
  });