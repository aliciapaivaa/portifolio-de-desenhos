"use client";

import Image from "next/image";
import { useState } from "react";

type Item = {
  src: string;
  titulo?: string;
};

interface GaleriaProps {
  itens: Item[];
}

export default function Galeria({ itens }: GaleriaProps) {
  const [aberta, setAberta] = useState<Item | null>(null);

  return (
    <>
      {/* Grid responsivo */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6 md:p-10">
        {itens.map((img, i) => (
          <button
            key={img.src + i}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
            onClick={() => setAberta(img)}
            aria-label={`Abrir ${img.titulo ?? "imagem"}`}
          >
            <Image
              src={img.src}
              alt={img.titulo ?? "Desenho"}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition"
              priority={i < 6}
            />
            {img.titulo && (
              <span className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs sm:text-sm p-1.5">
                {img.titulo}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {aberta && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setAberta(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-lg"
              onClick={() => setAberta(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aberta.src}
                alt={aberta.titulo ?? "Desenho em destaque"}
                fill
                sizes="100vw"
                className="object-contain bg-black"
                priority
              />
            </div>
            {aberta.titulo && (
              <p className="mt-3 text-center text-white/90">{aberta.titulo}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}