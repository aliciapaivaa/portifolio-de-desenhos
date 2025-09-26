"use client";

import Link from "next/link";
import Galeria from "./components/galeria";
import { imagens } from "./data/imagens";
import { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <main className="min-h-dvh p-6 md:p-10">
    <main className="min-h-dvh bg-white">

    
     {/* <header className="bg-[#FF6B6B] relative mb-10 text-center">
        <img
            src="/brand/img.png"
            alt="Estrela"
            className="w-40 h-40 object-cover rounded-lg mt-6"
          />        
        <p className="text-sm text-white-600 mt-1">
          Clique para ampliar
        </p>
      </header>  */}
      
      <header className="bg-[#FF6B6B] relative flex flex-col items-center justify-center ">
        {/* Menu sanduíche no canto superior direito */}
        <button
          className="absolute top-6 right-8 flex flex-col justify-center items-center w-10 h-10"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-7 h-1 bg-white rounded mb-1"></span>
          <span className="block w-7 h-1 bg-white rounded mb-1"></span>
          <span className="block w-7 h-1 bg-white rounded"></span>
        </button>
        
        {/* Menu lateral */}
        {menuOpen && (
          <nav className="absolute top-0 right-0 bg-white hover:bg-[#F2F2F2] shadow-lg rounded-bl-lg p-6 z-10 flex flex-col gap-4">
            <Link href="/tecnicas/digital" onClick={() => setMenuOpen(false)} className="text-[#FF6B6B] font-bold hover:underline">Digital</Link>
            <Link href="/tecnicas/aquarela" onClick={() => setMenuOpen(false)} className="text-[#FF6B6B] font-bold hover:underline">Aquarela</Link>
            <Link href="/tecnicas/grafite" onClick={() => setMenuOpen(false)} className="text-[#FF6B6B] font-bold hover:underline">Grafite</Link>
            <Link href="/tecnicas/tinta-a-oleo" onClick={() => setMenuOpen(false)} className="text-[#FF6B6B] font-bold hover:underline">Tinta a oleo</Link>
            {/* Adicione mais técnicas conforme desejar */}
          </nav>
          )}

        {/* Imagem centralizada  */}
        <img
          src="/img-header/img.png"
          alt="Estrela"
          className="w-20 h-20 object-cover "
        />
      </header>

      {/* Conteúdo do body */}
          <section className="mt-10 flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 ">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Oi, eu sou Alicia Paiva e<br/>gosto de desenhar
              </h1>
              <p className="text-base md:text-lg text-gray-900 mb-4">
                Sou formada em Ciência da Computação pela Universidade Estadual do Ceará (UECE). Neste espaço, compartilho alguns dos meus trabalhos artísticos, como eu vejo o mundo, um pouco do que me inspira, me permite ser eu.<br /><br />
                Se você quiser conhecer também minha atuação profissional na área de computação, fique à vontade para acessar meu currículo!
              </p>
              <a href="/curriculo/agosto2025.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-[#FF6B6B] font-bold px-8 py-2 rounded-full shadow hover:bg-[#ffeaea] transition">
                Currículo
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:ml-20 mr-15 flex justify-center">
              <img
                src="/foto-apresentação/perfil.png"
                alt="Foto de Alicia Paiva"
                className="w-70 h-70 object-cover "
              />
            </div>
          </section>


     
      <Galeria itens={imagens} />


      <footer className="mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} — Alicia
      </footer>
    </main>
  );
}
