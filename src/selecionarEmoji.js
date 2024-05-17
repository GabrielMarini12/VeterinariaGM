const feliz = document.getElementById("emoji-feliz");
const triste = document.getElementById("emoji-triste");
const doente = document.getElementById("emoji-doente");
const serio = document.getElementById("emoji-serio");

export function selecionarEmoji() {
  feliz.addEventListener("click", () => {
    feliz.classList.remove("text-[30px]");
    feliz.classList.add("text-[45px]");
    triste.classList.remove("text-[45px]");
    triste.classList.remove("text-[30px]");
    triste.classList.add("text-[30px]");
    doente.classList.remove("text-[45px]");
    doente.classList.remove("text-[30px]");
    doente.classList.add("text-[30px]");
    serio.classList.remove("text-[45px]");
    serio.classList.remove("text-[30px]");
    serio.classList.add("text-[30px]");
  });

  triste.addEventListener("click", () => {
    triste.classList.remove("text-[30px]");
    triste.classList.add("text-[45px]");
    feliz.classList.remove("text-[45px]");
    feliz.classList.remove("text-[30px]");
    feliz.classList.add("text-[30px]");
    doente.classList.remove("text-[45px]");
    doente.classList.remove("text-[30px]");
    doente.classList.add("text-[30px]");
    serio.classList.remove("text-[45px]");
    serio.classList.remove("text-[30px]");
    serio.classList.add("text-[30px]");
  });

  doente.addEventListener("click", () => {
    doente.classList.remove("text-[30px]");
    doente.classList.add("text-[45px]");
    feliz.classList.remove("text-[45px]");
    feliz.classList.remove("text-[30px]");
    feliz.classList.add("text-[30px]");
    triste.classList.remove("text-[45px]");
    triste.classList.remove("text-[30px]");
    triste.classList.add("text-[30px]");
    serio.classList.remove("text-[45px]");
    serio.classList.remove("text-[30px]");
    serio.classList.add("text-[30px]");
  });

  serio.addEventListener("click", () => {
    serio.classList.remove("text-[30px]");
    serio.classList.add("text-[45px]");
    feliz.classList.remove("text-[45px]");
    feliz.classList.remove("text-[30px]");
    feliz.classList.add("text-[30px]");
    triste.classList.remove("text-[45px]");
    triste.classList.remove("text-[30px]");
    triste.classList.add("text-[30px]");
    doente.classList.remove("text-[45px]");
    doente.classList.remove("text-[30px]");
    doente.classList.add("text-[30px]");
  });
}
