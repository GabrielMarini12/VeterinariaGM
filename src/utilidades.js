export function acessarLogin() {
  const btnEntrar = document.getElementById("btn-logar");

  btnEntrar.addEventListener("click", () => {
    window.location.href = "./fazerLogin.html";
  });
}

export function acessarCadastro() {
  const btnCadastrar = document.getElementById("btn-cadastrar");

  btnCadastrar.addEventListener("click", () => {
    window.location.href = "./seCadastrar.html";
  });
}
