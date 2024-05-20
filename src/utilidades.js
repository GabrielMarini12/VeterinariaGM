import { checkInputs, checkInputsLogin } from "./cadastro";

export const medicosCredenciados = [
  {
    id: "1",
    nome: "Gabriel Marini",
    foto: "doutor1.jpg",
    email: "gabriel@gmail.com",
    especialidade: "Médico Cirurgião",
    celular: "51993629999",
    estrelas: " ⭐⭐⭐⭐⭐",
    localização:
      '<iframe class="mt-[5px] rounded-md h-[115px] w-[95%] mb-[12px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.327392343936!2d-51.14475932514064!3d-29.768173418518895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196852301dac53%3A0x43966178c91276ba!2sR.%20Lindolfo%20Collor%2C%20168%20-%20Centro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093010-080!5e0!3m2!1spt-BR!2sbr!4v1715978286204!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    espec1: '<i class="fa-solid fa-dog"></i>',
    espec2: '<i class="fa-solid fa-cat"></i>',
    espec3: '<i class="fa-solid fa-kiwi-bird"></i>',
    espec4: '<i class="fa-solid fa-horse"></i>',
  },
  {
    id: "2",
    nome: "Sheila Marini",
    foto: "doutora1.jpg",
    email: "sheila@gmail.com",
    especialidade: "Médica Cardiovascular",
    celular: "51911112222",
    estrelas: " ⭐⭐⭐⭐",
    localização:
      '<iframe class="mt-[5px] rounded-md h-[115px] w-[95%] mb-[12px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.9481308182485!2d-51.11256092514017!3d-29.779141319023267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519696ec91a413f%3A0xb92fb23d4399072c!2sRua%20Arnaldo%20Zimmermann%2C%20250%20-%20Campestre%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093044-330!5e0!3m2!1spt-BR!2sbr!4v1715979197785!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    espec1: '<i class="fa-solid fa-worm"></i>',
    espec2: '<i class="fa-solid fa-hippo"></i>',
    espec3: '<i class="fa-solid fa-fish"></i>',
    espec4: '<i class="fa-solid fa-frog"></i>',
  },
  {
    id: "3",
    nome: "Rodrigo Grespan",
    foto: "doutor2.jpg",
    email: "rodrigo@gmail.com",
    especialidade: "Médico Dentista",
    celular: "51999650020",
    estrelas: " ⭐⭐⭐⭐",
    localização:
      '<iframe class="mt-[5px] rounded-md h-[115px] w-[95%] mb-[12px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.601046125399!2d-51.11277382514097!3d-29.760257318155045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519699c74ca1397%3A0x7317b323832d6b7d!2sAv.%20Feitoria%2C%202898%20-%20S%C3%A3o%20Jos%C3%A9%2C%20S%C3%A3o%20Leopoldo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1715979707326!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    espec1: '<i class="fa-solid fa-shrimp"></i>',
    espec2: '<i class="fa-solid fa-mosquito"></i>',
    espec3: '<i class="fa-solid fa-bugs"></i>',
    espec4: '<i class="fa-solid fa-crow"></i>',
  },
  {
    id: "4",
    nome: "Luiza Marini",
    foto: "doutora2.jpg",
    email: "luiza@gmail.com",
    especialidade: "Médica Geral",
    celular: "51955556666",
    estrelas: " ⭐⭐⭐⭐⭐",
    localização:
      '<iframe class="mt-[5px] rounded-md h-[115px] w-[95%] mb-[12px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.291068901766!2d-51.14441502514067!3d-29.76922401856721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196853c61ccb0d%3A0x65bbf5a240be9a53!2sR.%20S%C3%A3o%20Caetano%2C%2018%20-%20Centro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093010-090!5e0!3m2!1spt-BR!2sbr!4v1715979849860!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    espec1: '<i class="fa-solid fa-fish"></i>',
    espec2: '<i class="fa-solid fa-mosquito"></i>',
    espec3: '<i class="fa-solid fa-dog"></i>',
    espec4: '<i class="fa-solid fa-hippo"></i>',
  },
];

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

export function verInfoDoutor() {
  for (const medicoCredenciado of medicosCredenciados) {
    const btnVerInfoDoutor = document.getElementById(
      `btn-mais-informacoes-doutores-${medicoCredenciado.id}`
    );
    btnVerInfoDoutor.addEventListener("click", () => {
      salvarLocalStorage("idDoutor", `${medicoCredenciado.id}`);
      window.location.href = "./infoDoutor.html";
    });
  }
}

export function pegarNomeUsuarioPaginaInicial() {
  const nomeUsuario = lerLocalStorage("nome");
  const textoBoasVindas = `
        <p>Olá <span class="text-[22px] font-bold">${
          nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1)
        }</span></p>
        <p>Como você está se sentindo hoje?</p>
  `;
  document.getElementById("section-boas-vindas").innerHTML = textoBoasVindas;
}

export function pegarNomeUsuarioAgendarConsultas() {
  const nomeUsuario = lerLocalStorage("nome");
  const textoCabecalho = `
        <span class="text-[22px] font-bold">${
          nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1)
        }</span>
        <p>Selecione o Dr pelo qual deseja ser atendido...</p>
  `;
  document.getElementById("section-agendar-consultas-texto").innerHTML =
    textoCabecalho;
}

export function pegarNomeUsuarioVerConsultas() {
  const nomeUsuario = lerLocalStorage("nome");
  const textoCabecalho = `
        <span class="text-[22px] font-bold">${
          nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1)
        }</span>
        <p>Veja suas consultas agendadas...</p>
  `;
  document.getElementById("section-ver-consultas-texto").innerHTML =
    textoCabecalho;
}

export function pegarNomeUsuarioCalendario() {
  const nomeUsuario = lerLocalStorage("nome");
  for (const medicoCredenciado of medicosCredenciados) {
    if (lerLocalStorage("idDoutor") === medicoCredenciado.id) {
      const textoBoasVindasCalendario = `
      <p>Prossiga <span class="text-[22px] font-bold">${
        nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1)
      }</span></p>
      <p>Agende sua consulta com o(a) Dr <span class="font-semibold">${
        medicoCredenciado.nome
      }</span></p>
      `;
      document.getElementById("section-boas-vindas-calendario").innerHTML =
        textoBoasVindasCalendario;
    }
  }
}
