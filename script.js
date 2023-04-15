"use strict";

registeredUsers = [];
cartList = [];

function returnUser() {
  console.log(registeredUsers);
}

function saveUser() {
  let name = document.getElementById("exampleInputName").value;
  let email = document.getElementById("exampleInputEmail").value;
  let password = document.getElementById("exampleInputPassword").value;

  let formValue = {
    name,
    email,
    password,
  };

  registeredUsers.push(formValue);
  returnUser();
}

function checkUser() {
  email = document.getElementById("exampleInputEmail1").value;
  senha = document.getElementById("exampleInputPassword1").value;
  if (registeredUsers.find(email) && registeredUsers.find(senha)) {
    alert(
      `Usuário Cadastrado. Seja bem vindo ${registeredUsers.findIndexOf(
        email
      )}.`
    );
  }
}

function addItem() {
  let price = document.getElementById("product-form-price").value;
  let qtd = document.getElementById("input-qty").value;
  let color = document.querySelector(".prod-options").value;

  let formValue = {
    total: qtd * 150,
    qtd,
    color,
  };

  cartList.push(formValue);
  console.log(cartList);
}

let registerBtn = document.getElementById("register");
registerBtn.addEventListener("click", saveUser);

let loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", checkUser);

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addItem);

/*
2 - Com base no tópico anterior crie uma função que acesse o array criado e com o email e senha passado no formulário de login retorne o nome do usuário cadastrado.

4 - Realize um Pull Requests para que eu possa analisar.
*/

///////////////// botão saiba mais
// criar botão "saiba mais" na header. esse botão vai levar a página para o próximo ponto de informação
const saibaMaisBotao = `<button class="btn--text btn--scroll-to">Saiba mais ↓</button>`;
document
  .querySelector(".header")
  .insertAdjacentHTML("beforeend", saibaMaisBotao);

// selecionar o botão SAIBA MAIS e fazer com que ele leve para "destinoSaibaMais"
const btnScrollTo = document.querySelector(".btn--scroll-to");
const destinoSaibaMais = document.querySelector; //(DEFINIR);
btnScrollTo.addEventListener("click", function (e) {
  destinoSaibaMais.scrollIntoView({ behavior: "smooth" });
});

/////////////////// cookies
// colocando uma mensagem de cookies
const cookiesMessage = document.createElement("div");
cookiesMessage.classList.add("cookie-message");
// message.textContent =
cookiesMessage.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

// deletando/fechando a mensagem de cookies
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

/////////////// links para partes de baixo da página
// cada botao que vai levar a uma parte da página, na nav bar, vai ter a classe "nav__link"
// cada um desses botões acima vai ter um atributo href = "#section--1", ou href = "#section--2", que ao clicados, vão levar, respectivamente, aos objetos (section ou divs) que tem id='section--1' ou id='section--2'
const navBarDiv = document.createElement("nav");
navBarDiv.classList.add("nav__links");
navBarDiv.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////// MENU fade animation
// essa função vai fazer com que os botões não ativos fiquem mais cinzentos, acho que voces vao entender melhor vendo
const handleOver = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
navBarDiv.addEventListener("mouseover", handleOver.bind(0.5));
navBarDiv.addEventListener("mouseout", handleOver.bind(1));

///////////////// fazer a nav ficar fixa na pagina depois de certo ponto
// esse elemento header abaixo tem que estar envolvendo o elemento navBarDiv
const header = document.querySelector(".header");
const navHeight = navBarDiv.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navHeight.classList.add("sticky");
  else navHeight.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

////////////////////////// slider de imagens (se tivermos)
// criar todos os 5 elementos abaixo:uma div com class slider, outras divs DENTRO da SLIDER com classes slide & slide--1, slide & slide--2..., criar um botão para ir para a direita e outro para a esquerda (ambos fixos no local), e por fim uma div com classe "dots"
const totalSl = function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  slider.style.overflow = "visible";
  let curSlide = 0;

  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  // functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  const nextSlide = function () {
    if (curSlide === slides.length - 1) return;
    curSlide++;
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  const previousSlide = function () {
    if (curSlide === 0) return;
    curSlide--;
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  // starter
  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();

  // event listeners
  // slide to the right
  btnRight.addEventListener("click", nextSlide);
  // slide to the left
  btnLeft.addEventListener("click", previousSlide);

  document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "arrowLeft") previousSlide();
    // both up and down are equivalent
    e.key === "arrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      curSlide = slide;
      activeDot(curSlide);
    }
  });
};
totalSl();

//// falta trazer as configurações do CSS
