'use client'

import { useState } from "react";

type CVData = {
  nombre: string;
  direccion: string;
  email: string;
  summary: string;
  experiencia: string;
  educacion: string;
  idiomas: string;
  skills: string;
};

const initialData: CVData = {
  nombre: "",
  direccion: "",
  email: "",
  summary: "",
  experiencia: "",
  educacion: "",
  idiomas: "",
  skills: "",
};

export default function Page() {
 
  const [formData, setFormData] = useState<CVData>(initialData);

  const [cvData, setCvData] = useState<CVData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleGenerateCV = (e: React.FormEvent) => {
    e.preventDefault();
    setCvData(formData);
  };


  const handleReset = () => {
    setFormData(initialData);
    setCvData(null);
  };

  const toList = (text: string) =>
    text
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-stone-800">
            Generador de Curriculum Vitae
          </h1>
          <p className="mt-2 text-stone-500">
            Llena el formulario y presiona &quot;Generar CV&quot; para ver el
            resultado.
          </p>
        </header>

        {/* ------------------------- FORMULARIO ------------------------- */}
        <form
          onSubmit={handleGenerateCV}
          className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-stone-200"
        >
          <h2 className="mb-4 text-xl font-semibold text-stone-800">
            Datos personales
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-sm font-medium text-stone-600">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-stone-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="direccion" className="text-sm font-medium text-stone-600">
                Dirección
              </label>
              <input
                id="direccion"
                name="direccion"
                type="text"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle, número, ciudad"
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="summary" className="text-sm font-medium text-stone-600">
                Summary (resumen profesional)
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Breve descripción sobre ti como profesional"
                rows={3}
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="experiencia" className="text-sm font-medium text-stone-600">
                Experiencia
              </label>
              <textarea
                id="experiencia"
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                placeholder="Empresa - Puesto - Periodo (puedes separar varias con saltos de línea)"
                rows={3}
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="educacion" className="text-sm font-medium text-stone-600">
                Educación
              </label>
              <textarea
                id="educacion"
                name="educacion"
                value={formData.educacion}
                onChange={handleChange}
                placeholder="Institución - Título - Año"
                rows={2}
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="idiomas" className="text-sm font-medium text-stone-600">
                Idiomas
              </label>
              <input
                id="idiomas"
                name="idiomas"
                type="text"
                value={formData.idiomas}
                onChange={handleChange}
                placeholder="Español, Inglés, ..."
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
              <span className="text-xs text-stone-400">Sepáralos por comas</span>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="skills" className="text-sm font-medium text-stone-600">
                Skills
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, Trabajo en equipo, ..."
                required
                className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
              />
              <span className="text-xs text-stone-400">Sepáralos por comas</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-stone-800 px-5 py-2 font-medium text-white transition hover:bg-stone-700"
            >
              Generar CV
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-stone-300 px-5 py-2 font-medium text-stone-600 transition hover:bg-stone-100"
            >
              Limpiar
            </button>
          </div>
        </form>

        {/* ---------------------------  GENERADO --------------------------- */}
        {cvData && (
          <section className="mt-8 rounded-2xl bg-white p-8 shadow-md ring-1 ring-stone-200">
            <div className="border-b border-stone-200 pb-4">
              <h2 className="text-2xl font-bold text-stone-800">
                {cvData.nombre}
              </h2>
              <p className="text-stone-500">{cvData.email}</p>
              <p className="text-stone-500">{cvData.direccion}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
                Summary
              </h3>
              <p className="mt-1 whitespace-pre-line text-stone-700">
                {cvData.summary}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
                Experiencia
              </h3>
              <p className="mt-1 whitespace-pre-line text-stone-700">
                {cvData.experiencia}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
                Educación
              </h3>
              <p className="mt-1 whitespace-pre-line text-stone-700">
                {cvData.educacion}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
                  Idiomas
                </h3>
                <ul className="mt-1 list-inside list-disc text-stone-700">
                  {toList(cvData.idiomas).map((idioma, index) => (
                    <li key={index}>{idioma}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
                  Skills
                </h3>
                <ul className="mt-1 list-inside list-disc text-stone-700">
                  {toList(cvData.skills).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}