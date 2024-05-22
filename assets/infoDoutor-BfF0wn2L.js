import{m as a,l as d,s as o}from"./utilidades-BZvkuuvY.js";function t(){for(const s of a)if(d("idDoutor")===s.id){const e=`
            <span class="text-[20px] font-bold absolute top-[10px]"
            >${s.nome}</span
            >
            <img
            src="./assets/${s.foto}"
            alt="Foto do doutor"
            class="w-[110px] h-[105px] rounded-[50%] border-[3px] absolute border-cyan-700"
            />
        `;document.getElementById("section-info-doutor").innerHTML=e}}function p(){for(const s of a)if(d("idDoutor")===s.id){const e=`
        <p class="text-cyan-700 uppercase mb-[10px]">${s.estrelas}</p>

        <div
          class="flex flex-col items-center justify-center bg-cyan-700 rounded-sm h-[25px] px-[4px] mb-[5px]"
        >
          <p class="text-slate-200">Informações</p>
        </div>

        <div class="flex justify-start pt-[8px] pl-[25px]">
          <p class="mr-[15px] text-cyan-700">Nome:</p>
          <p>${s.nome}</p>
        </div>

        <div class="flex justify-start pt-[8px] pl-[65px]">
          <p class="mr-[15px] text-cyan-700">Especialidade:</p>
          <p>${s.especialidade}</p>
        </div>

        <div class="flex justify-start pt-[8px] pl-[125px]">
          <p class="mr-[15px] text-cyan-700 mb-[15px]">E-mail:</p>
          <p>${s.email}</p>
        </div>

        <div
          class="flex flex-col items-center justify-center bg-cyan-700 rounded-sm h-[25px] px-[4px] mb-[5px]"
        >
          <p class="text-slate-200">Especialidades</p>
        </div>

        <div class="p-[8px] rounded-md flex justify-around mb-[10px]">
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${s.espec1}
          </div>
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${s.espec2}
          </div>
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${s.espec3}
          </div>
          <div class="rounded-md p-[8px] shadow shadow-cyan-800">
            ${s.espec4}
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center bg-cyan-700 rounded-sm h-[25px] px-[4px] mb-[5px]"
        >
          <p class="text-slate-200">Localização</p>
        </div>

        <div class="flex justify-center">
            ${s.localização}
          
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
        `;document.getElementById("card-info-doutor").innerHTML=e}}t();p();o();
