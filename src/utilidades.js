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

export function acessarPaginaInicial() {
  const btnEntrar = document.getElementById("btn-entrar");

  btnEntrar.addEventListener("click", () => {
    window.location.href = "./paginaInicial.html";
  });
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
