import { salvarLocalStorage } from "./utilidades";

const dataAtual = document.getElementById("data-atual");
const dias = document.getElementById("dias");
const iconePassarEVoltarMes = document.querySelectorAll(".icons span");

let date = new Date(),
  anoAtual = date.getFullYear(),
  mesAtual = date.getMonth();

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function renderizarCalendario() {
  let primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay(),
    ultimaDataDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate(),
    ultimoDiaDoMes = new Date(anoAtual, mesAtual, ultimaDataDoMes).getDay(),
    ultimaDataDoUltimoMes = new Date(anoAtual, mesAtual, 0).getDate();

  let liTag = "";

  for (let i = primeiroDiaDoMes; i > 0; i--) {
    liTag += `<li class="w-[14%] mt-[10px] text-slate-300">${
      ultimaDataDoUltimoMes - i + 1
    }</li>`;
  }

  for (let i = 1; i <= ultimaDataDoMes; i++) {
    let eHoje =
      i === date.getDate() &&
      mesAtual === new Date().getMonth() &&
      anoAtual === new Date().getFullYear()
        ? "bg-cyan-900 text-slate-200 rounded-[50%] p-2 opacity-60"
        : "";
    liTag += `<li class="w-[14%] mt-[10px] ${eHoje}">${i}</li>`;
  }

  for (let i = ultimoDiaDoMes; i < 6; i++) {
    liTag += `<li class="w-[14%] mt-[10px] text-slate-300">${
      i - ultimoDiaDoMes + 1
    }</li>`;
  }

  dataAtual.innerText = `${meses[mesAtual]} ${anoAtual}`;
  dias.innerHTML = liTag;
}

export function iconesPassarEVoltarMes() {
  iconePassarEVoltarMes.forEach((icon) => {
    icon.addEventListener("click", () => {
      mesAtual = icon.id === "voltar" ? mesAtual - 1 : mesAtual + 1;

      if (mesAtual < 0 || mesAtual > 11) {
        date = new Date(anoAtual, mesAtual);
        anoAtual = date.getFullYear();
        mesAtual = date.getMonth();
      } else {
        date = new Date();
      }

      renderizarCalendario();
    });
  });
}
