"use strict";

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

// register page
const btnGoogle = document.getElementById("btn-google");

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

// const sendLogin = function (e) {
//   e.preventDefault();

//   let email = "";
//   let password = "";

//   // validation
//   // checar se o email bate com o email registrado - CONSTRUIR
//   let outBoxMessage = [];

//   if (isValidEmail(inputMail.value) == false) {
//     mailBox.classList.add("error");

//     insideMailError.innerHTML = `Insert a valid email.`;
//     outsideMailError.innerHTML = `Insert a valid email.`;

//     outBoxMessage.push("Insert a valid email ");
//   } else {
//     email = inputMail.value;

//     mailBox.classList.remove("error");
//     insideMailError.innerHTML = ``;
//     outsideMailError.innerHTML = ``;
//   }

//   // checar se a senha bate com a senha registrada - CONSTRUIR
//   if (isValidPassword(inputPassword.value) == false) {
//     passwordBox.classList.add("error");

//     insidePassError.innerHTML = `Insert a valid password.`;
//     outsidePassError.innerHTML = `Insert a valid password.`;

//     // checando a existencia de mensagem. se tiver mensagem, imprime uma mensagem mais completa. se nao tiver mensagem <ou seja, o email está certo>, adiciona só o da senha
//     if (outBoxMessage.length === 0) {
//       outBoxMessage.push("Insert a valid password.");
//     } else {
//       outBoxMessage.push(" ");
//     }
//   } else {
//     password = inputPassword.value;
//     passwordBox.classList.remove("error");
//     insidePassError.innerHTML = ``;
//     outsidePassError.innerHTML = ``;
//   }

//   setEmpty();

//   // checando a mensagem final, se necessária
//   if (outBoxMessage.length === 2) {
//     checkBox.after((outBoxMessage = "reload the page and try again"));
//     btnLogin.removeEventListener("click", sendLogin);
//     btnLogin.style.backgroundColor = "red";
//   } else if (outBoxMessage.length === 1) {
//     return;
//   } else {
//     console.log(`Password is: ${password}. Email: ${email}.`);
//   }
// };

// checar se os inputs de login coincidem com o data-base

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

    // trabalhar essa parte (formatação)
    welcomeLabel.innerHTML = `Welcome ${
      registeredUsers[userIndex].user.split(" ")[0]
    }`;
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
//document.addEventListener("click", (e) => console.log(e.target));

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

// sem ideia do que fazer com o botao do google no momento
// btnGoogle.addEventListener("click", function (e) {});

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
