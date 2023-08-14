
document.addEventListener("DOMContentLoaded", () => {
  let currentLine = 0;
  const lines = document.querySelectorAll('.line');
  
  function showNextLine() {
    if (currentLine < lines.length) {
      lines[currentLine].style.display = "block";
      currentLine++;
      setTimeout(showNextLine, 2000);
    }
  }
  showNextLine();
});




// document.getElementById("fade-in1").addEventListener("DOMContentLoaded", )


