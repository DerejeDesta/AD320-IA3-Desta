        
document.getElementById('box1').addEventListener('click', OnClickchangeColor);
document.getElementById('box2').addEventListener('mouseover', OnMouseoverAlert);
document.getElementById('box3').addEventListener('mouseout', onMouseOutThankyou);
document.getElementById('box4').addEventListener('mouseenter', OnMouseenterColor);
document.getElementById('box5').addEventListener('submit', onsubmitAlert);

function OnClickchangeColor() {
    this.style.backgroundColor = "red"; 
}
function OnMouseoverAlert(){
    alert("Thankyou");
}
function onMouseOutThankyou(){
      this.innerHTML = "Thankyou";
}
 function OnMouseenterColor(){
      this.style.backgroundColor = "blue";
}
 function onsubmitAlert(){
       alert("Thankyou for submitting the form");
}
 