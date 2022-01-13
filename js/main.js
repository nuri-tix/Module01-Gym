// Модальные окна - форма и бургер-меню

function openModal(name) {
   document.body.className = 'js-modal-' + name;  
}

function closeModal() {
   document.body.className = '';
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





// Модальное окно - кнопка

// function openModal(form) {
//    document.getElementById("popupWindow").style.left = "28%";
//    document.querySelector(".blackout").style.display = 'block';
// }

// function closeModal() {
//    document.getElementById("popupWindow").style.left = "100%";
//    document.querySelector(".blackout").style.display = 'none';
// }