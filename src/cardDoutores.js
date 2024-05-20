import { medicosCredenciados } from "./utilidades";

export function criarDoutoresCredenciados() {
  for (const medicoCredenciado of medicosCredenciados) {
    const medico = `
        <div class="flex bg-slate-200 p-[10px] rounded-lg h-[100px] mb-[10px]">
            <img src="./assets/${medicoCredenciado.foto}" alt="Foto de um doutor" class="w-[110px] rounded-lg mr-[10px] opacity-60"/>
           
            <div class="flex flex-col text-cyan-700">
                <p class="font-medium">${medicoCredenciado.nome}</p>
                <p class="text-sm">Ver mais informações...</p>
            </div>         
        </div>
        `;
    document.getElementById("container-medicos-credenciados").innerHTML +=
      medico;
  }
}
