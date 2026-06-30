"use client";

import { useState } from "react";

interface CVData {
    nombre: string;
    direccion: string;
    email: string;
    summary: string;
    experiencia: string;
    educacion: string;
    idiomas: string;
    skills: string;
}

interface CVGenerado {
    visible: boolean;
    datos: CVData;
}

const valorInicial: CVData = {
    nombre: "",
    direccion: "",
    email: "",
    summary: "",
    experiencia: "",
    educacion: "",
    idiomas: "",
    skills: "",
};


export default function CVForm() {
    // Hook principal del formulario
    const [formData, setFormData] = useState<CVData>(valorInicial);

    // Hook para controlar si el CV generado está visible
    const [cvGenerado, setCvGenerado] = useState<CVGenerado>({
        visible: false,
        datos: valorInicial,
    });

    // Actualiza un campo del formulario por su nombre
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Genera el CV: guarda una copia de los datos actuales y lo hace visible
    const generarCV = () => {
        // Validación mínima: nombre y email son requeridos
        if (!formData.nombre.trim() || !formData.email.trim()) {
            alert("El nombre y el email son obligatorios para generar el CV.");
            return;
        }

        setCvGenerado({
            visible: true,
            datos: { ...formData },
        });
    };

    // Limpia el formulario y oculta el CV generado
    const limpiarFormulario = () => {
        setFormData(valorInicial);
        setCvGenerado({ visible: false, datos: valorInicial });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            {/* ── Encabezado ── */}
            <div className="border-b-4 border-green-800 pb-2 mb-6">
                <h1 className="text-2xl font-bold text-green-900">CV</h1>
            </div>

            {/* ── Formulario ── */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Informacion</h2>

                {/* Grid de 2 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

                    {/* Columna izquierda */}
                    <div className="flex flex-col gap-4">
                        {/* Nombre */}
                        <div className="flex flex-col">
                            <label htmlFor="nombre" className="text-sm font-semibold underline mb-1">
                                Nombre
                            </label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Escribe tu nombre"
                                className="border border-gray-400 px-2 py-1 text-sm w-full"
                            />
                        </div>

                        {/* Dirección */}
                        <div className="flex flex-col">
                            <label htmlFor="direccion" className="text-sm font-semibold underline mb-1">
                                Dirección
                            </label>
                            <input
                                id="direccion"
                                name="direccion"
                                type="text"
                                value={formData.direccion}
                                onChange={handleChange}
                                placeholder="Escribe tu direccion"
                                className="border border-gray-400 px-2 py-1 text-sm w-full"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-semibold underline mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ej. correo@gmail.com"
                                className="border border-gray-400 px-2 py-1 text-sm w-full"
                            />
                        </div>

                        {/* Idiomas */}
                        <div className="flex flex-col">
                            <label htmlFor="idiomas" className="text-sm font-semibold underline mb-1">
                                Idiomas
                            </label>
                            <input
                                id="idiomas"
                                name="idiomas"
                                type="text"
                                value={formData.idiomas}
                                onChange={handleChange}
                                placeholder="Escribe los idiomas que dominas"
                                className="border border-gray-400 px-2 py-1 text-sm w-full"
                            />
                        </div>

                        {/* Skills */}
                        <div className="flex flex-col">
                            <label htmlFor="skills" className="text-sm font-semibold underline mb-1">
                                Skills
                            </label>
                            <input
                                id="skills"
                                name="skills"
                                type="text"
                                value={formData.skills}
                                onChange={handleChange}
                                placeholder="Escribe tus skills"
                                className="border border-gray-400 px-2 py-1 text-sm w-full"
                            />
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col gap-4">
                        {/* Summary */}
                        <div className="flex flex-col">
                            <label htmlFor="summary" className="text-sm font-semibold underline mb-1">
                                Summary
                            </label>
                            <textarea
                                id="summary"
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Breve descripción profesional..."
                                className="border border-gray-400 px-2 py-1 text-sm w-full resize-none"
                            />
                        </div>

                        {/* Experiencia */}
                        <div className="flex flex-col">
                            <label htmlFor="experiencia" className="text-sm font-semibold underline mb-1">
                                Experiencia
                            </label>
                            <textarea
                                id="experiencia"
                                name="experiencia"
                                value={formData.experiencia}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Describe tu experiencia laboral..."
                                className="border border-gray-400 px-2 py-1 text-sm w-full resize-none"
                            />
                        </div>

                        {/* Educación */}
                        <div className="flex flex-col">
                            <label htmlFor="educacion" className="text-sm font-semibold underline mb-1">
                                Educación
                            </label>
                            <textarea
                                id="educacion"
                                name="educacion"
                                value={formData.educacion}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Describe tu formación académica..."
                                className="border border-gray-400 px-2 py-1 text-sm w-full resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={generarCV}
                        className="border border-gray-500 bg-gray-400 px-4 py-1 text-gray-500 hover:bg-gray-50 cursor-pointer"
                    >
                        Generar CV
                    </button>
                    <button
                        onClick={limpiarFormulario}
                        className="border border-gray-400 px-4 py-1 text-sm text-gray-500 hover:bg-gray-50 cursor-pointer"
                    >
                        Limpiar
                    </button>
                </div>
            </section>

            {/* ── CV Generado ── */}
            {cvGenerado.visible && <CVPreview datos={cvGenerado.datos} />}
        </div>
    );
}

function CVPreview({ datos }: { datos: CVData }) {
    return (
        <section className="border-t-2 border-gray-300 pt-6">
            {/* Nombre */}
            <h2 className="text-3xl font-bold text-gray-900 mb-1">{datos.nombre}</h2>

            {/* Contacto */}
            <p className="text-sm text-gray-600 mb-6">
                {datos.email}
                {datos.direccion && ` | ${datos.direccion}`}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {/* Columna izquierda del CV */}
                <div className="flex flex-col gap-4">
                    {datos.summary && (
                        <CVSeccion titulo="Summary" contenido={datos.summary} />
                    )}
                    {datos.experiencia && (
                        <CVSeccion titulo="Experiencia" contenido={datos.experiencia} />
                    )}
                    {datos.educacion && (
                        <CVSeccion titulo="Educación" contenido={datos.educacion} />
                    )}
                </div>

                {/* Columna derecha del CV */}
                <div className="flex flex-col gap-4">
                    {datos.idiomas && (
                        <CVSeccion titulo="Idiomas" contenido={datos.idiomas} />
                    )}
                    {datos.skills && (
                        <CVSeccion titulo="Skills" contenido={datos.skills} />
                    )}
                </div>
            </div>
        </section>
    );
}


function CVSeccion({ titulo, contenido }: { titulo: string; contenido: string }) {
    return (
        <div>
            <h3 className="text-base font-bold border-b border-gray-400 pb-1 mb-1">
                {titulo}
            </h3>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{contenido}</p>
        </div>
    );
}