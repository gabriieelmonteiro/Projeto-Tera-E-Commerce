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
