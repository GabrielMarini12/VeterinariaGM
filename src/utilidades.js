import { checkInputs, checkInputsLogin } from "./cadastro";

export function acessarLogin() {
  const btnLogar = document.getElementById("btn-logar");

  btnLogar.addEventListener("click", () => {
    window.location.href = "./fazerLogin.html";
  });
}

export function acessarCadastro() {
  const btnCadastrar = document.getElementById("btn-cadastrar");

  btnCadastrar.addEventListener("click", () => {
    window.location.href = "./seCadastrar.html";
  });
}

export function fazerCadastro() {
  const btnEntrar = document.getElementById("btn-entrar");
  btnEntrar.addEventListener("click", () => {
    checkInputs();
  });
}

export function fazerLogin() {
  const btnEntrarLogin = document.getElementById("btn-entrar-login");
  btnEntrarLogin.addEventListener("click", () => {
    checkInputsLogin();
  });
}

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function agendarConsultas() {
  const irParaAgendarConsultas = document.getElementById("agendar-consultas");

  irParaAgendarConsultas.addEventListener("click", () => {
    window.location.href = "./agendarConsultas.html";
  });
}

export function verConsultas() {
  const irParaVerConsultas = document.getElementById("ver-consultas");

  irParaVerConsultas.addEventListener("click", () => {
    window.location.href = "./verConsultas.html";
  });
}
