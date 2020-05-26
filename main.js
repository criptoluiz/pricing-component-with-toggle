const toggle = document.getElementById("toggleSwitch");
const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const masterPrice = document.getElementById("master-price");

toggle.addEventListener("click", function(){
  if (toggle.className == "monthly"){
    console.log("monthly -> annually");
    toggle.className = "annually";
    basicPrice.innerHTML = "<span>&dollar;</span>199.99";
    proPrice.innerHTML = "<span>&dollar;</span>249.99";
    masterPrice.innerHTML = "<span>&dollar;</span>399.99";

  } else if (toggle.className == "annually"){
    console.log("annually -> monthly");
    toggle.className = "monthly";
    basicPrice.innerHTML = "<span>&dollar;</span>19.99";
    proPrice.innerHTML = "<span>&dollar;</span>24.99";
    masterPrice.innerHTML = "<span>&dollar;</span>39.99";
  }
});
