let date_input = document.getElementById("date");
let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let btn = document.getElementById("btn");
let overlay = document.querySelector(".overlay");
let name_span = document.querySelector(".overlay .name");
let horoscope_span = document.querySelector(".overlay .horoscope");
let email_span = document.querySelector(".overlay .email");

// console.log(date_input, btn);
btn.onclick = (event) => {
  event.preventDefault();
  //
  let name = name_input.value;
  let email = email_input.value;
  let date = new Date(date_input.value);
  //
  let horoscope = "";
  let day = date.getDate();
  let month = date.getMonth() + 1;
  //
  switch (month) {
    case 1:
      day <= 19 ? (horoscope = "capricorn") : (horoscope = "aquarius");
      break;
    case 2:
      day <= 18 ? (horoscope = "aquarius") : (horoscope = "pisces");
      break;
    case 3:
      day <= 20 ? (horoscope = "pisces") : (horoscope = "Aries");
      break;
    case 4:
      day <= 19 ? (horoscope = "Aries") : (horoscope = "taurus");
      break;
    case 5:
      day <= 20 ? (horoscope = "taurus") : (horoscope = "gemini");
      break;
    case 6:
      day <= 20 ? (horoscope = "gemini") : (horoscope = "cancer");
      break;
    case 7:
      day <= 22 ? (horoscope = "cancer") : (horoscope = "leo");
      break;
    case 8:
      day <= 22 ? (horoscope = "leo") : (horoscope = "vigro");
      break;
    case 9:
      day <= 22 ? (horoscope = "vigro") : (horoscope = "libra");
      break;
    case 10:
      day <= 23 ? (horoscope = "libra") : (horoscope = "scarpio");
      break;
    case 11:
      day <= 21 ? (horoscope = "scarpio") : (horoscope = "sagittarius");
      break;
    case 12:
      day <= 21 ? (horoscope = "sagittarius") : (horoscope = "capricorn");
      break;
  }
  //
  if (name != "" && horoscope != "" && email != "") {
    name_span.textContent = name;
    horoscope_span.textContent = horoscope;
    email_span.textContent = email;
    overlay.classList.remove("hidden");
    overlay.onclick = () => {
      overlay.classList.add("hidden");
    };
  }
};
