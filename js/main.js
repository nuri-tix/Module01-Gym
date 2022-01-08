// Модальное окно - бургер-меню

function openModal() {
   document.getElementById("modal").style.left = "28%";
   
}

function closeModal() {
   document.getElementById("modal").style.left = "100%";
  
}

// Модальное окно - кнопка

function openModal() {
   document.getElementById("popupWindow").style.left = "28%";
   document.querySelector(".blackout").style.display = 'block';
}

function closeModal() {
   document.getElementById("popupWindow").style.left = "100%";
   document.querySelector(".blackout").style.display = 'none';
}

// Button Up

window.onscroll = function () {
   scrollFunction()
};

const upbuttons = document.querySelectorAll(".button-up");

for (const upbutton of upbuttons) {
   upbutton.addEventListener("click", clickHandler);
}

function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");

   document.querySelector(href).scrollIntoView({
      behavior: "smooth"
   });
}

function scrollFunction() {
   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById('btnUp').className = 'button-up visible';
   } else {
      document.getElementById('btnUp').className = 'button-up hidden';
   }
}