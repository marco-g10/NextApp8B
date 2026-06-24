'use client'

import { useState } from "react"

// tipo de datos que maneja el formulario y el cv
// son 8 datos tipo string que están en CVData
type CVData = {
    nombre: string;
    direccion: string;
    email: string;
    summary: string;
    experiencia: string;
    educacion: string;
    idiomas: string;
    skills: string;
}

// objeto vacio para iniciar el formulario y para resetearlo despues
const formVacio: CVData = {
    nombre: '',
    direccion: '',
    email: '',
    summary: '',
    experiencia: '',
    educacion: '',
    idiomas: '',
    skills: '',
}

export default function Page(){

    // aqui guardo lo que el usuario va escribiendo en el formulario
    const [formData, setFormData] = useState<CVData>(formVacio)

    // aqui guardo lo que ya se mando a mostrar en el cv
    // la separo del formData para que el cv no cambie mientras escribo, solo cuando le doy click al boton de generar
    const [cvData, setCvData] = useState<CVData>(formVacio)

    // para saber si ya se genero el cv una vez
    // sirve para mostrar un mensaje antes de la primera generacion
    const [cvGenerado, setCvGenerado] = useState(false)

    // funcion que recibe el cambio de cualquier input
    // uso el name del campo para saber que actualizar del formData
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // cuando le dan click a generar cv
    // paso lo que esta en formData hacia cvData
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault() // para que no recargue la pagina al enviar el formulario

        setCvData(formData)
        setCvGenerado(true)
    }

    // regresa todo a como estaba al principio
    function handleReset(){
        setFormData(formVacio)
        setCvData(formVacio)
        setCvGenerado(false)
    }

    // esta funcion toma un texto donde cada renglon es un dato distinto
    // y lo regresa como arreglo para poder hacer una lista
    // ejemplo: "React\nJavaScript" -> ["React", "JavaScript"]
    function textoALineas(texto: string): string[] {
        return texto
            .split('\n')
            .map((linea) => linea.trim())
            .filter((linea) => linea.length > 0)
    }

    return(
        <div style={{ padding: '20px' }}>
            <h1>Formulario y CV</h1>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>

                {/* formulario */}
                <div style={{ flex: 1, minWidth: '300px', border: '1px solid gray', padding: '15px' }}>
                    <h2>Datos</h2>

                    <form onSubmit={handleSubmit}>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Nombre</label><br/>
                            <input
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Nombre completo"
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Direccion</label><br/>
                            <input
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                                placeholder="Ciudad, estado"
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Email</label><br/>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="correo@correo.com"
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Summary</label><br/>
                            <textarea
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                placeholder="Resumen corto"
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Experiencia (un puesto por renglon)</label><br/>
                            <textarea
                                name="experiencia"
                                value={formData.experiencia}
                                onChange={handleChange}
                                placeholder={"Desarrollador - Empresa X (2023-2024)"}
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Educacion (un grado por renglon)</label><br/>
                            <textarea
                                name="educacion"
                                value={formData.educacion}
                                onChange={handleChange}
                                placeholder={"Ing. Sistemas - Universidad (2021-2025)"}
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Idiomas (uno por renglon)</label><br/>
                            <textarea
                                name="idiomas"
                                value={formData.idiomas}
                                onChange={handleChange}
                                placeholder={"Espanol - Nativo"}
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Skills (uno por renglon)</label><br/>
                            <textarea
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                placeholder={"JavaScript"}
                            />
                        </div>

                        <button type="submit">Generar CV</button>
                        <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
                            Limpiar todo
                        </button>

                    </form>
                </div>

                {/* vista previa del cv */}
                <div style={{ flex: 1, minWidth: '300px', border: '1px solid gray', padding: '15px' }}>
                    <h2>CV</h2>

                    {!cvGenerado ? (
                        <p>Todavia no se genera el cv, llena el formulario y da click en Generar CV.</p>
                    ) : (
                        <div>
                            <h3>{cvData.nombre || 'Nombre del candidato'}</h3>
                            <p>
                                {cvData.direccion} {cvData.direccion && cvData.email ? '-' : ''} {cvData.email}
                            </p>

                            {cvData.summary && (
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Summary</strong>
                                    <p>{cvData.summary}</p>
                                </div>
                            )}

                            {cvData.experiencia && (
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Experiencia</strong>
                                    <ul>
                                        {textoALineas(cvData.experiencia).map((linea, i) => (
                                            <li key={`exp-${i}`}>{linea}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {cvData.educacion && (
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Educacion</strong>
                                    <ul>
                                        {textoALineas(cvData.educacion).map((linea, i) => (
                                            <li key={`edu-${i}`}>{linea}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {cvData.idiomas && (
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Idiomas</strong>
                                    <ul>
                                        {textoALineas(cvData.idiomas).map((linea, i) => (
                                            <li key={`idi-${i}`}>{linea}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {cvData.skills && (
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Skills</strong>
                                    <ul>
                                        {textoALineas(cvData.skills).map((linea, i) => (
                                            <li key={`ski-${i}`}>{linea}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}