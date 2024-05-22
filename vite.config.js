import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "/VeterinariaGM",
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        seCadastrar: resolve(__dirname, "./seCadastrar.html"),
        fazerLogin: resolve(__dirname, "./fazerLogin.html"),
        paginaInicial: resolve(__dirname, "./paginaInicial.html"),
        agendarConsultas: resolve(__dirname, "./agendarConsultas.html"),
        verConsultas: resolve(__dirname, "./verConsultas.html"),
        infoDoutor: resolve(__dirname, "./infoDoutor.html"),
        agendarCalendario: resolve(__dirname, "./agendarCalendario.html"),
      },
    },
  },
});
