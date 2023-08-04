"use strict";

const dataContainer = document.getElementById("data-container");

// universal variables
const registeredUsers = [];

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

///////////////////////////////////////////
// query selectors
// selector para todos
const container = document.querySelectorAll(".container");
const welcomeLabel = document.getElementById("welcome");

// login page
const mailBox = document.getElementById("mail-box");
const passwordBox = document.getElementById("password-box");
const inputMail = document.getElementById("form-control-mail");
const inputPassword = document.getElementById("form-control-password");
const insideMailError = document.getElementById("error-mail-message-inside");
const outsideMailError = document.getElementById("error-mail-message");
const insidePassError = document.getElementById("error-pass-message-inside");
const outsidePassError = document.getElementById("error-pass-message");

const checkBox = document.querySelector(".checkbox-log");
const btnLogin = document.getElementById("btn-log");

const logContainer = document.getElementById("logContainer");
const goToRegbtn = document.getElementById("goToReg");

// nav bar
const navLogin = document.getElementById("btnLogin-nav");
const navReg = document.getElementById("btnReg-nav");
const nav = document.getElementById("nav");

const header = document.getElementById("header");

// register page
const inputUserReg = document.getElementById("form-control-user-reg");
const inputPhoneReg = document.getElementById("form-control-phone-reg");
const mailBoxReg = document.getElementById("mail-box-reg");
const inputMailReg = document.getElementById("form-control-mail-reg");
const insideMailErrorReg = document.getElementById(
  "error-mail-message-inside-reg"
);
const outsideMailErrorReg = document.getElementById("error-mail-message-reg");
const passwordBoxReg = document.getElementById("password-box-reg");
const inputPasswordReg = document.getElementById("form-control-password-reg");
const insidePassErrorReg = document.getElementById(
  "error-pass-message-inside-reg"
);
const outsidePassErrorReg = document.getElementById("error-pass-message-reg");

const checkBoxReg = document.getElementById("checkbox-log-reg");
const btnReg = document.getElementById("btn-register");

const regContainer = document.getElementById("regContainer");
const goToLoginbtn = document.getElementById("goToLogin");

////////////////////////////////////////////////////////
// functions
const clearAll = function () {
  mailBoxReg.classList.remove("error");
  passwordBoxReg.classList.remove("error");

  mailBox.classList.remove("error");
  passwordBox.classList.remove("error");

  insideMailError.innerHTML = ``;
  outsideMailError.innerHTML = ``;
  insidePassError.innerHTML = ``;
  outsidePassError.innerHTML = ``;

  insideMailErrorReg.innerHTML = ``;
  outsideMailErrorReg.innerHTML = ``;
  insidePassErrorReg.innerHTML = ``;
  outsidePassErrorReg.innerHTML = ``;
};

const setEmpty = function () {
  inputMail.value = "";
  inputPassword.value = "";
  inputUserReg.value = "";
  inputPhoneReg.value = "";
  inputMailReg.value = "";
  inputPasswordReg.value = "";
};

const isValidEmail = function (email) {
  return regex.test(email) || (email == "" && email == null && true);
};

const isValidPassword = function (pw) {
  if (pw == "" || pw.length < 8 || pw.length > 15) {
    return false;
  } else {
    return true;
  }
};

const displayDataInDiv = (data) => {
  data.forEach((item) => {
    const html = `
      <sector class="col text-center">
        <img class="img-fluid img-thumbnail w-100"
            src="${item.image}"
            alt="${item.name}"
        />

        <div class="w-25 p-3 w-100">Título: ${item.name}</div>
        <div class="w-25 p-3 w-100">Artista: ${item.artist}</div>
        <div class="w-25 p-3 w-100">Quantidade: ${
          String(item.quantity).length == 1
            ? `0${item.quantity}`
            : `${item.quantity}`
        }</div>
        <div class="w-25 p-3 w-100">Preço: ${item.price} R$</div>
      </sector>
      `;
    dataContainer.insertAdjacentHTML("beforeend", html);
  });
};

// confere se tem as credenciais no banco de dados e, se houver, faz login
const checkInput = function (e) {
  e.preventDefault();

  const userIndex = registeredUsers.findIndex(
    (u) => u.email == inputMail.value
  );
  const indexES = registeredUsers.filter((u) => u.email == inputMail.value);

  console.log(registeredUsers, registeredUsers.length);
  console.log(userIndex, indexES);

  if (
    userIndex === -1 ||
    registeredUsers[userIndex].password !== inputPassword.value
  ) {
    // achei importante marcar os 2 como erro por questoes de segurança
    mailBox.classList.add("error");
    passwordBox.classList.add("error");

    insideMailError.innerHTML = `Insert a valid email.`;
    outsideMailError.innerHTML = `Insert a valid email.`;
    insidePassError.innerHTML = `Insert a valid password.`;
    outsidePassError.innerHTML = `Insert a valid password.`;
  } else {
    clearAll();

    logContainer.classList.add("hidden");
    dataContainer.previousElementSibling.classList.remove("hidden");
    dataContainer.previousElementSibling.classList.add("container");

    // trabalhar essa parte (formatação)
    welcomeLabel.innerHTML = `Welcome ${
      registeredUsers[userIndex].user.split(" ")[0]
    }`;

    // create add to favorite btn
    const addToFav = document.createElement("button");
    const heart = document.createElement("img");

    heart.setAttribute("src", "https://icons8.com/icon/581/favorite");
    heart.setAttribute("alt", "favorite");
    heart.setAttribute("class", "addFavorite");

    addToFav.appendChild(heart);

    // create buy now btn
    const buyNow = document.createElement("button");
    const buy = document.createElement("img");

    buy.setAttribute(
      "src",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shareicon.   net%2Fcircumference-rounded-commerce-buy-button-740215&psig=AOvVaw0LP0XrAUcSquKqJLAZZZxn&ust=1690421728552000&  source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCIkeWdq4ADFQAAAAAdAAAAABAJ"
    );
    buy.setAttribute("alt", "buy now");
    buy.setAttribute("class", "buyNow");

    buyNow.appendChild(buy);

    // add as obras já cadastradas
    fetch("http://localhost:8080/arts/")
      .then((response) => response.json())
      .then((data) => {
        displayDataInDiv(data.data.arts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // when we click in an art, it opens up a bigger picture and a full description and a button to buy it and when we click outside, it goes back to the previous state
    window.addEventListener("click", (e) => {
      const childCards = dataContainer.children;
      const clickedCard = e.target.closest("sector");

      if (clickedCard) {
        Array.from(childCards).forEach((el) => el.classList.add("hidden"));

        clickedCard.classList.toggle("hidden");
        clickedCard.classList.toggle("openPic");

        clickedCard.appendChild(addToFav);
        clickedCard.appendChild(buyNow);
      }

      if (!clickedCard) {
        Array.from(childCards).forEach((el) => {
          el.classList.remove("hidden", "openPic");

          if (el.contains(addToFav)) {
            el.removeChild(addToFav), el.removeChild(buyNow);
          }
        });
      }
    });

    // add event listeners to add work art to the data base in the category of FAVORITES
    addToFav.addEventListener("click", () => {});

    // add event listeners to add work art to the data base in the CART
    buyNow.addEventListener("click", () => {});

    ////
    // apagar botões de login e cadastro E adicionar botões de FAVORITOS e CARRINHO
    nav.classList.add("hidden");

    const newhtml = `
    <nav id="nav" class="nav navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="landingPage.html">About</a>

      <button
        class="container__text text-center"
      >
        Favoritos
      </button>

      <button
        class="container__text text-center"
      >
        Carrinho
      </button>
    </nav>
    `;
    header.insertAdjacentHTML("beforeend", newhtml);
  }

  setEmpty();
};

const sendRegister = function (e) {
  e.preventDefault();

  let userObject = {};

  // validation
  if (!isValidEmail(inputMailReg.value)) {
    mailBoxReg.classList.add("error");

    insideMailErrorReg.innerHTML = `Insert a valid email.`;
    outsideMailErrorReg.innerHTML = `Insert a valid email.`;
  } else {
    userObject.email = inputMailReg.value;

    mailBoxReg.classList.remove("error");
    insideMailErrorReg.innerHTML = ``;
    outsideMailErrorReg.innerHTML = ``;
  }

  // se campo de senha tá vazio ou nulo ou o formato é falso, colocar uma classe de erro na div do senha e chamar uma mensagem de atenção
  if (!isValidPassword(inputPasswordReg.value)) {
    passwordBoxReg.classList.add("error");

    insidePassErrorReg.innerHTML = `Insert a valid password.`;
    outsidePassErrorReg.innerHTML = `Insert a valid password.`;
  } else {
    userObject.password = inputPasswordReg.value;

    passwordBoxReg.classList.remove("error");
    insidePassErrorReg.innerHTML = ``;
    outsidePassErrorReg.innerHTML = ``;
  }

  if (
    isValidPassword(inputPasswordReg.value) &&
    isValidEmail(inputMailReg.value) &&
    // não pode ter 2 contas com emails iguais
    !registeredUsers.some((u) => u.email == inputMail.value)
  ) {
    userObject.user = inputUserReg.value;
    userObject.phone = inputPhoneReg.value;

    regContainer.classList.add("hidden");
    logContainer.classList.remove("hidden");
    mailBox.classList.remove("error");
    passwordBox.classList.remove("error");

    insidePassError.innerHTML = ``;
    outsidePassError.innerHTML = ``;
    insideMailError.innerHTML = ``;
    outsideMailError.innerHTML = ``;

    registeredUsers.push(userObject);
  }

  setEmpty();
};

// EVENT LISTENERS

// escondendo inicialmente as sections de login e register para deixar apenas a página inicial
container.forEach((el) => el.classList.add("hidden"));

nav.addEventListener("click", function (e) {
  const clicked = e.target;

  // Guard clause
  if (!clicked) return;

  // quando clicar em login (na pagina inicial), aparece a section do login, checando se tem outra section antes. se tiver, nao mostra.
  if (clicked === navLogin) {
    if (regContainer.classList.contains("hidden")) {
      logContainer.classList.remove("hidden");
    } else {
      regContainer.classList.add("hidden");
      logContainer.classList.remove("hidden");
    }

    // quando clicar em register (na pagina inicial), aparece a section do register, checando se tem outra section antes. se tiver, nao mostra.
  } else if (clicked === navReg) {
    if (logContainer.classList.contains("hidden")) {
      regContainer.classList.remove("hidden");
    } else {
      logContainer.classList.add("hidden");
      regContainer.classList.remove("hidden");
    }
  } else {
    return;
  }

  clearAll();
});

// send register
btnReg.addEventListener("click", sendRegister);

// send login
//btnLogin.addEventListener("click", sendLogin);
btnLogin.addEventListener("click", checkInput);

// go to login and go to register in both pages  --- SMAFE BEHAVIOR AS CHANGING ON NAV BAR
goToRegbtn.addEventListener("click", function (e) {
  logContainer.classList.add("hidden");
  regContainer.classList.remove("hidden");

  clearAll();
});

goToLoginbtn.addEventListener("click", function (e) {
  logContainer.classList.remove("hidden");
  regContainer.classList.add("hidden");

  clearAll();
});

// após cadastrar ou logar, aparecer o nome bem vindo e a mesma coisa que aparece na página inicial (obras), e aparecer um campo 'fazer upload de obras'
