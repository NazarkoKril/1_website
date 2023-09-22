const swiper = new Swiper(".image-slider", {
  

  loop: true,

 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  slidesPerView: 1,
  spaceBetween: 30,

  speed: 1500,

});

document.getElementById("myForm").addEventListener("submit", function(event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    var namePattern = /^[A-Za-zА-Яа-яЁёІіЇїЄє]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^\d{10}$/;
    
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        alert("Proszę wpisać poprawne imię i nazwisko.");
        event.preventDefault();
    }
    
    if (!emailPattern.test(email)) {
        alert("Proszę wpisać aktualny adres e-mail.");
        event.preventDefault();
    }
    
    if (!phonePattern.test(phone)) {
        alert("Proszę wprowadzić prawidłowy numer telefonu.");
        event.preventDefault();
    }
});