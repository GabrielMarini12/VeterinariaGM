import{m as c,l as e,h as o,i as r,s as i}from"./utilidades-BZvkuuvY.js";function l(){const n=document.getElementById("section-agendamentos-marcados");for(const a of c)if(e("Ano")!=""&&a.id===e("idDoutor")){const t=`
                <div id="card-agendamento-horario" class="flex relative bg-slate-200 p-[10px] rounded-lg h-[120px] mb-[10px]">
                    <img
                        src="./assets/${a.foto}"
                        alt="${a.nome}"
                        class="w-[110px] rounded-lg mr-[10px] opacity-60"
                    />

                    <div class="flex flex-col text-cyan-700">
                        <p class="font-medium">${a.nome}</p>
                        <p class="text-sm">Data: ${e("Dia")}/${e("Mes")}/${e("Ano")}</p>
                        <p class="text-lg text-green-500 font-bold">Agendado</p>
                        <p id='cancelar-agendamento' class="absolute text-sm bottom-2 right-2 bg-red-600 px-2 py-1 text-slate-200 rounded-xl">Cancelar</p>
                    </div>
                </div>
                `;n.innerHTML+=t;const d=document.getElementById("cancelar-agendamento"),s=document.getElementById("card-agendamento-horario");d.addEventListener("click",()=>{s.innerHTML="",o("Ano",""),o("Mes",""),o("Dia",""),o("idDoutor","")})}}r();l();i();
