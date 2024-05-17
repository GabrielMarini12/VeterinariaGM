import { lerLocalStorage, salvarLocalStorage } from "./utilidades";

const name = document.getElementById("name");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const errorName = document.getElementById("error-name");
const errorPassword = document.getElementById("error-password");
const errorRepeatPassword = document.getElementById("error-repeat-password");

export function checkInputs() {
  const nameValue = name.value;
  const passwordValue = password.value;
  const repeatPasswordValue = repeatPassword.value;

  if (nameValue.length < 2) {
    errorName.classList.remove("hidden");
  } else if (nameValue.value === "") {
    errorName.classList.remove("hidden");
  } else {
    errorName.classList.add("hidden");
  }

  if (passwordValue.length < 4) {
    errorPassword.classList.remove("hidden");
  } else if (passwordValue.value === "") {
    errorPassword.classList.remove("hidden");
  } else {
    errorPassword.classList.add("hidden");
  }

  if (repeatPasswordValue != passwordValue) {
    errorRepeatPassword.classList.remove("hidden");
  } else {
    errorRepeatPassword.classList.add("hidden");
  }

  if (
    errorName.className === "text-red-600 hidden" &&
    errorPassword.className === "text-red-600 hidden" &&
    errorRepeatPassword.className === "text-red-600 hidden"
  ) {
    salvarLocalStorage("nome", nameValue);
    salvarLocalStorage("senha", passwordValue);
    window.location.href = "./fazerLogin.html";
  }
}

const nameLogin = document.getElementById("name-login");
const passwordLogin = document.getElementById("password-login");
const errorNameLogin = document.getElementById("error-name-login");
const errorPasswordLogin = document.getElementById("error-password-login");

export function checkInputsLogin() {
  const nameValueLogin = nameLogin.value;
  const passwordValueLogin = passwordLogin.value;

  if (nameValueLogin === lerLocalStorage("nome")) {
    errorNameLogin.classList.add("hidden");
  } else {
    errorNameLogin.classList.remove("hidden");
  }

  if (passwordValueLogin === lerLocalStorage("senha")) {
    errorPasswordLogin.classList.add("hidden");
  } else {
    errorPasswordLogin.classList.remove("hidden");
  }

  if (
    errorNameLogin.className === "text-red-600 hidden" &&
    errorPasswordLogin.className === "text-red-600 hidden"
  ) {
    window.location.href = "./paginaInicial.html";
  }
}
