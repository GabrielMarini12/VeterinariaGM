import {
  lerLocalStorage,
  medicosCredenciados,
  salvarLocalStorage,
} from "./utilidades";

export function cardAgendamentoMarcado() {
  const sectionAgendamentoMarcado = document.getElementById(
    "section-agendamentos-marcados"
  );
  for (const medicoCredenciado of medicosCredenciados) {
    if (lerLocalStorage("Ano") != "") {
      if (medicoCredenciado.id === lerLocalStorage("idDoutor")) {
        const cardAgendamento = `
                <div id="card-agendamento-horario" class="flex relative bg-slate-200 p-[10px] rounded-lg h-[120px] mb-[10px]">
                    <img
                        src="./assets/${medicoCredenciado.foto}"
                        alt="${medicoCredenciado.nome}"
                        class="w-[110px] rounded-lg mr-[10px] opacity-60"
                    />

                    <div class="flex flex-col text-cyan-700">
                        <p class="font-medium">${medicoCredenciado.nome}</p>
                        <p class="text-sm">Data: ${lerLocalStorage(
                          "Dia"
                        )}/${lerLocalStorage("Mes")}/${lerLocalStorage(
          "Ano"
        )}</p>
                        <p class="text-lg text-green-500 font-bold">Agendado</p>
                        <p id='cancelar-agendamento' class="absolute text-sm bottom-2 right-2 bg-red-600 px-2 py-1 text-slate-200 rounded-xl">Cancelar</p>
                    </div>
                </div>
                `;
        sectionAgendamentoMarcado.innerHTML += cardAgendamento;

        const cancelarAgendamento = document.getElementById(
          "cancelar-agendamento"
        );
        const cardAgendamentoHorario = document.getElementById(
          "card-agendamento-horario"
        );
        cancelarAgendamento.addEventListener("click", () => {
          cardAgendamentoHorario.innerHTML = "";
          salvarLocalStorage("Ano", "");
          salvarLocalStorage("Mes", "");
          salvarLocalStorage("Dia", "");
          salvarLocalStorage("idDoutor", "");
        });
      }
    }
  }
}
