'use client'

import { useState } from "react";



export function Header() {
    return (
        <header>
            <p>Crea tu CV Facilmente</p>
        </header>
    );
}

interface CVData {
  fullName: string;
  address: string;
  email: string;
  summary: string;
  experience: string;
  languages: string;
  skills: string;
}

export default function Page() {

const [formData, setFormData] = useState<CVData>({
    fullName: '',
    address: '',
    email: '',
    summary: '',
    experience: '',
    languages: '',
    skills: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,   // Copia el estado anterior
      [name]: value   // Actualiza dinámicamente la propiedad usando el 'name' del input
    });
  };

const [cvEntries, setCvEntries] = useState<CVData[]>([])
const addCv = () => {
        if (formData.fullName.trim() === '') return;  //valida que minimo tenga el nombre

        setCvEntries([...cvEntries, formData]);
        setFormData({
            fullName: '',
            address: '',
            email: '',
            summary: '',
            experience: '',
            languages: '',
            skills: ''
        });
    };  


    return (
    <>
        
        <Header/>
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>

            <div className="CamposInformacion">
                <div className="campo-nombre">
                  <label>Nombre Completo</label>
                  <input
                    name="fullName"                  
                    placeholder="Nombre completo"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div> 
                <div className="campo">
                  <label>Direccion</label>
                  <input
                    name="address"
                    placeholder="Direccion"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="campo">
                  <label>Email</label>
                  <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="campo">
                  <label>Summary</label>
                  <input
                    name="summary"
                    placeholder="Summary"
                    value={formData.summary}
                    onChange={handleChange}
                  />
                </div>
                <div className="campo">
                  <label>Experiencia</label>
                  <input
                    name="experience"
                    placeholder="Experiencia"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="campo">
                  <label>Idiomas</label>
                  <input
                    name="languages"
                    placeholder="Idiomas"
                     value={formData.languages}
                    onChange={handleChange}
                  />
                </div>
                <div className="campo">
                  <label>Skills</label>
                  <input
                    name="skills"
                    placeholder="Skills"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </div> 
            </div><br />

            
           <button onClick={addCv}>
                Agregar CV
            </button>

                <div >
                    <h3>CV Registrado</h3>
                    {cvEntries.length === 0 ? (
                        <p style={{ color: 'gray' }}>No hay currículums creados todavía.</p>
                    ) : (
                        <ul>
                            {/* 4. Renderizado corregido leyendo las propiedades del objeto */}
                            {cvEntries.map((entry, index) => (
                                <li key={index} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #eee', borderRadius: '8px', listStyle: 'none' }}>
                                    <strong>{entry.fullName}</strong> — {entry.email} <br />
                                    <small style={{ color: '#555' }}>
                                        <strong>Skills:</strong> {entry.skills} | <strong>Idiomas:</strong> {entry.languages}
                                    </small>
                                </li>
                            ))}
                        </ul>
                    )}                                                                     
                </div>
            </div>
    </>
    );
}


// primera carpeta: todas las dependencias del proyecto
// segunda carpeta: componentes reutilizables
// tercera carpeta: paginas o vistas de la aplicacion
//carpeta publica: archivos estaticos como imagenes, fuentes, etc.
//archivo de configuracion: para configurar el proyecto, como variables de entorno, rutas, etc.
//archivo layout: para definir la estructura general de la aplicacion, como el encabezado, pie de pagina, etc.
