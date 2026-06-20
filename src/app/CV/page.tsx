'use client';
import { useState } from 'react';

export default function CVForm() {
  const [data, setData] = useState({
    nombre: '', puesto: '', email: '', perfil: '', empresa: '', universidad: ''
  });
  const [isGenerated, setIsGenerated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (isGenerated) {
    return (
      <main className="min-h-screen bg-gray-50 py-10 px-4">
        {/* Hoja del CV */}
        <div className="max-w-3xl mx-auto bg-white p-16 shadow-2xl border border-gray-100 rounded-sm">
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold tracking-tighter uppercase mb-2">{data.nombre || "Tu Nombre"}</h1>
            <p className="text-xl text-gray-500 font-light tracking-wide uppercase">{data.puesto || "Tu Puesto"}</p>
            <div className="mt-4 text-sm text-gray-400">{data.email || "tu@email.com"}</div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-b pb-2">Perfil Profesional</h2>
              <p className="leading-relaxed text-gray-700">{data.perfil || "Aquí aparecerá tu perfil..."}</p>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-b pb-2">Experiencia</h2>
              <p className="font-semibold text-lg">{data.empresa || "Nombre de empresa"}</p>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-b pb-2">Educación</h2>
              <p className="text-gray-700">{data.universidad || "Nombre de la universidad"}</p>
            </section>
          </div>

          <button 
            onClick={() => setIsGenerated(false)} 
            className="mt-16 text-xs text-gray-400 underline hover:text-black transition"
          >
            ← Regresar al editor
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6">Generador de CV</h1>
        <div className="space-y-4">
          <input name="nombre" placeholder="Nombre completo" onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition" />
          <input name="puesto" placeholder="Puesto" onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition" />
          <textarea name="perfil" placeholder="Perfil profesional..." onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 h-24 transition" />
          <input name="empresa" placeholder="Empresa reciente" onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition" />
          <input name="universidad" placeholder="Universidad" onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition" />
          
          <button 
            onClick={() => setIsGenerated(true)}
            className="w-full bg-black text-white py-4 mt-4 font-bold rounded-lg hover:bg-gray-800 transition transform hover:scale-[1.01]"
          >
            VISTA PREVIA
          </button>
        </div>
      </div>
    </main>
  );
}