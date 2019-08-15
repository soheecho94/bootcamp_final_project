var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener("change",
  function(){
    if (checkbox.checked) {
      document.getElementById('defaultCanvas0').style.visibility = "hidden";
      document.getElementById('portrait').classList.add('new-animation');
    } else {
      document.getElementById('defaultCanvas0').style.visibility = "visible";
      document.getElementById('portrait').classList.remove('new-animation');
    }
  }
);
