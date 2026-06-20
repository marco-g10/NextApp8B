"use client";
import React, { useState } from 'react';

const CVGeneratorPage: React.FC = () => {
  // Estado para cada campo del CV, inicializado con cadenas vacías
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [puesto, setPuesto] = useState('');
  const [email, setEmail] = useState('');
  const [perfilProfesional, setPerfilProfesional] = useState('');
  const [empresaReciente, setEmpresaReciente] = useState('');
  const [universidad, setUniversidad] = useState('');


  const handlePreview = () => {
   
    console.log("Generando vista previa con datos:", {
      nombreCompleto, puesto, email, perfilProfesional, empresaReciente, universidad
    });
    alert("¡Función de vista previa en desarrollo! Revisa la consola para ver los datos.");
  };

  return (
    <div className="flex flex-col h-screen font-sans text-gray-800 bg-white">
      {/* Barra de navegación superior (simulada como en la imagen) */}
      <nav className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Events</a>
          <a href="#" className="hover:text-black">Change Color</a>
        </div>
        <div className="text-xl font-bold tracking-tight">Generador de CV</div>
      </nav>

      {/* Contenido principal con el formulario */}
      <main className="flex-grow p-6 md:p-10 space-y-8">
        
        {/* Contenedor principal de los inputs en fila (como en la imagen) */}
        <div className="flex flex-wrap items-start gap-3 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
          
          {/* Input: Nombre completo */}
          <input
            type="text"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            placeholder="Nombre completo"
            className="flex-1 min-w-[200px] px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />

          {/* Input: Puesto */}
          <input
            type="text"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
            placeholder="Puesto"
            className="flex-1 min-w-[200px] px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />

          {/* Input: Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="flex-1 min-w-[200px] px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
          
          {/* TextArea: Perfil profesional */}
          <textarea
            value={perfilProfesional}
            onChange={(e) => setPerfilProfesional(e.target.value)}
            placeholder="Perfil profesional..."
            className="w-full md:w-[280px] h-[120px] px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition resize-none"
          />

          {/* Input: Empresa reciente */}
          <input
            type="text"
            value={empresaReciente}
            onChange={(e) => setEmpresaReciente(e.target.value)}
            placeholder="Empresa reciente"
            className="flex-1 min-w-[200px] px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />

          {/* Input: Universidad */}
          <input
            type="text"
            value={universidad}
            onChange={(e) => setUniversidad(e.target.value)}
            placeholder="Universidad"
            className="flex-1 min-w-[200px] px-3 py-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />

          {/* Botón: Vista Previa */}
          <button
            onClick={handlePreview}
            className="flex-initial px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-800 transition shadow"
          >
            VISTA PREVIA
          </button>
        </div>

        {/* Sección inferior vacía para el lienzo del CV (como en la imagen) */}
        <div className="flex-grow p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500 italic">Los datos del formulario se reflejarán aquí al editar.</p>
        </div>

      </main>

      {/* Pie de página (simulado para el diseño) */}
      <footer className="p-4 bg-gray-100 border-t border-gray-200 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Generador de CV Interactivo
      </footer>
    </div>
  );
};

export default CVGeneratorPage;