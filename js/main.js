function openModal() {
   document.getElementById("popupWindow").style.left = "35%";
   document.querySelector(".blackout").style.display = 'block';
}

function closeModal() {
   document.getElementById("popupWindow").style.left = "100%";
   document.querySelector(".blackout").style.display = 'none';
}