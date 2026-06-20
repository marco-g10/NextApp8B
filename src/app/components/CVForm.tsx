'use client' // Esto corre en el cliente

import { useState } from "react"; // Hook para manejar estado

export default function CVForm() { // Componente del formulario y el CV

    // Un hook por cada campo del formulario
    const [name, setName] = useState<string>(''); // Guarda el nombre
    const [address, setAddress] = useState<string>(''); // Guarda la direccion
    const [email, setEmail] = useState<string>(''); // Guarda el email
    const [summary, setSummary] = useState<string>(''); // Guarda el summary
    const [experience, setExperience] = useState<string>(''); // Guarda la experiencia
    const [education, setEducation] = useState<string>(''); // Guarda la educacion
    const [languages, setLanguages] = useState<string>(''); // Guarda los idiomas
    const [skills, setSkills] = useState<string>(''); // Guarda las skills

    // Guarda el CV final que se muestra abajo, empieza vacio
    const [cvData, setCvData] = useState<any>(null);

    // Junta todos los campos y los guarda en cvData
    const handleSubmit = () => { // Se ejecuta al dar click en el boton
        setCvData({ // Guardamos un objeto nuevo con todos los valores
            name,
            address,
            email,
            summary,
            experience,
            education,
            languages,
            skills
        });
    }

    // Si cvData todavia no existe, usamos un objeto vacio
    // para que no truene al leer las propiedades
    const data = cvData ? cvData : {};

    return (
        <div> {/* Contenedor de todo el formulario y el CV */}
            <h2>Datos del CV</h2> {/* Titulo del formulario */}

            {/* --- Datos Personales --- */}
            <label>Nombre</label>
            <br />
            <input
                placeholder="Ej. Juan Perez" // Texto de ejemplo
                value={name} // Valor controlado por el hook name
                onChange={(e) => setName(e.target.value)} // Actualiza name al escribir
            />
            <br /><br />

            <label>Direccion</label>
            <br />
            <input
                placeholder="Ej. Aguascalientes" // Texto de ejemplo
                value={address} // Valor controlado por el hook address
                onChange={(e) => setAddress(e.target.value)}
            />
            <br /><br />

            <label>Email</label>
            <br />
            <input
                placeholder="correo@ejemplo.com" // Texto de ejemplo
                value={email} // Valor controlado por el hook email
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            {/* --- Perfil Profesional --- */}
            <label>Summary</label>
            <br />
            <textarea
                placeholder="Breve resumen"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />
            <br /><br />

            <label>Experiencia</label>
            <br />
            <textarea
                placeholder="Tu experiencia"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
            />
            <br /><br />

            <label>Educacion</label>
            <br />
            <textarea
                placeholder="Tu formacion"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
            />
            <br /><br />

            <label>Idiomas</label>
            <br />
            <textarea
                placeholder="Ej. Espanol"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
            />
            <br /><br />

            <label>Skills</label>
            <br />
            <textarea
                placeholder="Ej. React"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />
            <br /><br />

            <button onClick={handleSubmit}>Generar CV</button> {/* Dispara handleSubmit */}

            <hr /> {/* Linea divisoria entre formulario y CV */}

            <div className="cv-preview"> {/* Tarjeta donde se ve el CV */}

                {/* Si hay nombre lo muestra, si no muestra el texto de relleno */}
                <h1>{data.name ? data.name : "Nombre completo"}</h1>

                <p>
                    {data.address ? data.address : "Direccion"} {/* Direccion o placeholder */}
                    {" | "} {/* Separador visual */}
                    {data.email ? data.email : "correo@ejemplo.com"} {/* Email o placeholder */}
                </p>

                <h2>Summary</h2>
                <p>{data.summary ? data.summary : "Aqui aparecera el resumen profesional..."}</p>

                <h2>Experiencia</h2>
                <p>{data.experience ? data.experience : "Aqui aparecera la experiencia laboral..."}</p>

                <h2>Educacion</h2>
                <p>{data.education ? data.education : "Aqui aparecera la formacion academica..."}</p>

                <h2>Idiomas</h2>
                <p>{data.languages ? data.languages : "Aqui apareceran los idiomas..."}</p>

                <h2>Skills</h2>
                <p>{data.skills ? data.skills : "Aqui apareceran las habilidades..."}</p>
            </div>
        </div>
    );
}