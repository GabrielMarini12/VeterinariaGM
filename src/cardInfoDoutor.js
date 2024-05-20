import { lerLocalStorage, medicosCredenciados } from "./utilidades";

export function nomeAndFotoDoutor() {
  for (const medicoCredenciado of medicosCredenciados) {
    if (lerLocalStorage("idDoutor") === medicoCredenciado.id) {
      const nomeAndFotoDoutor = `
            <span class="text-[20px] font-bold absolute top-[10px]"
            >${medicoCredenciado.nome}</span
            >
            <img
            src="./assets/${medicoCredenciado.foto}"
            alt="Foto do doutor"
            class="w-[110px] h-[105px] rounded-[50%] border-[3px] absolute border-cyan-700"
            />
        `;

      document.getElementById("section-info-doutor").innerHTML =
        nomeAndFotoDoutor;
    }
  }
}

export function cardInfoDoutor() {
  for (const medicoCredenciado of medicosCredenciados) {
    if (lerLocalStorage("idDoutor") === medicoCredenciado.id) {
      const cardInfo = `
        <p class="text-cyan-700 uppercase mb-[10px]">${medicoCredenciado.estrelas}</p>

        <div
          class="flex flex-col items-center justify-center bg-cyan-700 rounded-sm h-[25px] px-[4px] mb-[5px]"
        >
          <p class="text-slate-200">Informações</p>
        </div>

        <div class="flex justify-start pt-[8px] pl-[25px]">
          <p class="mr-[15px] text-cyan-700">Nome:</p>
          <p>${medicoCredenciado.nome}</p>
        </div>

        <div class="flex justify-start pt-[8px] pl-[65px]">
          <p class="mr-[15px] text-cyan-700">Especialidade:</p>
          <p>${medicoCredenciado.especialidade}</p>
        </div>

        <div class="flex justify-start pt-[8px] pl-[125px]">
          <p class="mr-[15px] text-cyan-700 mb-[15px]">E-mail:</p>
          <p>${medicoCredenciado.email}</p>
        </div>

        <div
          class="flex flex-col items-center justify-center bg-cyan-700 rounded-sm h-[25px] px-[4px] mb-[5px]"
        >
          <p class="text-slate-200">Especialidades</p>
        </div>

        <div class="p-[8px] rounded-md flex justify-around mb-[10px]">
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${medicoCredenciado.espec1}
          </div>
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${medicoCredenciado.espec2}
          </div>
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${medicoCredenciado.espec3}
          </div>
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${medicoCredenciado.espec4}
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center bg-cyan-700 rounded-sm h-[25px] px-[4px] mb-[5px]"
        >
          <p class="text-slate-200">Localização</p>
        </div>

        <div class="flex justify-center">
            ${medicoCredenciado.localização}
          
        </div>

        <div class="flex justify-around mb-[15px]">
          <a href="./agendarConsultas.html" class="w-[100%]">
            <button
              class="mr-[3px] w-[100%] py-[8px] border-none bg-red-600 rounded-md text-slate-200"
            >
              <i class="fa-solid fa-arrow-left"></i> Voltar
            </button>
          </a>
          <a href="./agendarCalendario.html" class="w-[100%]">
            <button
              class="ml-[3px] w-[100%] py-[8px] border-none bg-green-600 rounded-md text-slate-200"
            >
              <i class="fa-solid fa-calendar-plus"></i> Agendar
            </button>
          </a>
        </div>
        `;

      document.getElementById("card-info-doutor").innerHTML = cardInfo;
    }
  }
}
