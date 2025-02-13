// Start Translation Operation
let arabic = document.getElementsByClassName("ar")[0];
let english = document.getElementsByClassName("en")[0];
arabic.addEventListener("click", function () {
  localStorage.setItem("language", "arabic");
  ar_language();
});
english.addEventListener("click", function () {
  localStorage.setItem("language", "english");
  en_language();
});
function ar_language() {
  document.querySelector("header nav>a:first-child").innerHTML = "تسجيل الدخول";
  document.querySelector("header nav>a:last-of-type").innerHTML = "إنشاء حساب";
  document.getElementsByTagName("h1")[0].innerHTML =
    "تستطيع هنا رؤية والبحث عن بعض ألعاب الكمبيوتر";
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].children[1].style.direction = "rtl";
    cards[i].children[1].children[0].innerHTML = "اللعبة " + (i + 1);
    cards[i].children[1].children[1].innerHTML = "شرح اللعبة أو وصف عنها";
  }
}
function en_language() {
  document.querySelector("header nav>a:first-child").innerHTML = "SignIn";
  document.querySelector("header nav>a:last-of-type").innerHTML = "SignUp";
  document.getElementsByTagName("h1")[0].innerHTML =
    "Here You Can See Some PC's Games";
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].children[1].style.direction = "ltr";
    cards[i].children[1].children[0].innerHTML = "Game " + (i + 1);
    cards[i].children[1].children[1].innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deleniti, in adipisci officiis aliquam itaque impedit pariatur ratione perferendis excepturi, sequi enim mollitia possimus ut.


    `;
  }
}
onload = function () {
  if (this.localStorage.getItem("language") !== null) {
    if (this.localStorage.getItem("language") === "arabic") {
      ar_language();
    } else if (this.localStorage.getItem("language") === "english") {
      en_language();
    }
  }
};
// End Translation Operation
