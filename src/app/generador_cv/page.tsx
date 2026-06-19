'use client'

//importamos las cosas de react para controlar la pagina
//el usestate guarda lo que escribe la gente y elusefect cambia el titulo
import { useState, useEffect } from "react"

//aqui creamos el tipo de dato para agrupar todo el cv
//sirve para que el programa sepa que textos lleva la hoja
type CV = {
    name: string
    address: string
    email: string
    summary: string
    experience: string
    education: string
    languages: string
    skills: string
}

export default function Page() {

    //creamos un espacio en memoria para cada cajita del formulario
    //sirven para atrapar lo que teclea la gente en la pantalla
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [summary, setSummary] = useState<string>('')
    const [experience, setExperience] = useState<string>('')
    const [education, setEducation] = useState<string>('')
    const [languages, setLanguages] = useState<string>('')
    const [skills, setSkills] = useState<string>('')

    //aqui guardamos el objeto completo del cv con todos sus datos
    //al prinsipio esta vacio por eso le ponemos null
    const [cv, setCv] = useState<CV | null>(null)

    //esto sirve para cambiar el nombre que sale arriba en la pestaña
    //solo corre cuando la variable cv cambia y ya tiene datos reales
    useEffect(() => {
        if (cv) {
            document.title = 'CV de ' + cv.name
        }
    }, [cv])

    //esta funcion junta todas las variables sueltas en una sola cosa
    //se ejecuta cuando la persona presiona el boto de generar
    const generateCV = () => {
        //metemos todo el bonche de textos adentro del estado cv
        setCv({ name, address, email, summary, experience, education, languages, skills })
    }

    return (
        <div>
            <h1>Generador de CV</h1>

            {/*acomodamos el diseño en dos columnas usando flexbox*/}
            {/*el gap de veinte es para que no queden pegados los lados*/}
            <div style={{ display: 'flex', gap: '20px' }}>
                {/*este div es el formulario con todas las cajas de texto*/}
                {/*el flex direction las va apilando una abajo de la otra*/}
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>

                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Direction</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} />

                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Summary</label>
                    <input value={summary} onChange={(e) => setSummary(e.target.value)} />

                    <label>Experience</label>
                    <input value={experience} onChange={(e) => setExperience(e.target.value)} />

                    <label>Education</label>
                    <input value={education} onChange={(e) => setEducation(e.target.value)} />

                    {/*aqui meten los idiomas separados por una coma obligatoria*/}
                    <label>Languages</label>
                    <input value={languages} onChange={(e) => setLanguages(e.target.value)} />

                    {/*las avilidades tambien van separadas por comas en la caja*/}
                    <label>Skills</label>
                    <input value={skills} onChange={(e) => setSkills(e.target.value)} />

                    {/*este es el boton que manda a llamar la funcion de arriba*/}
                    {/*sirve para armar la hoja del cv al darle click*/}
                    <button onClick={generateCV} style={{ marginTop: '10px' }}>Generar CV</button>
                </div>

                {/*este cuadro de la derecha es para ver como quedo el cv*/}
                {/*tiene una linea gris alrededor para que paresca una hoja*/}
                <div style={{ width: '50%', border: '1px solid #ccc', padding: '10px' }}>

                    {/*si el cv esta vacio enseña este texto de espera por mientras*/}
                    {!cv && <p>Tu CV aparecera aqui</p>}

                    {/*si ya le dieron click al boton dibuja todo el cv real*/}
                    {cv && (
                        <div>
                            <h2>{cv.name}</h2>
                            {/*une la direccion y el correo con una linea intermedia*/}
                            <p>{cv.address} {cv.email && '- ' + cv.email}</p>

                            <h3>Summary</h3>
                            <p>{cv.summary}</p>

                            <h3>Experience</h3>
                            <p>{cv.experience}</p>

                            <h3>Education</h3>
                            <p>{cv.education}</p>

                            <h3>Languages</h3>
                            <ul>
                                {/*agarra el texto y lo parte en pedazos donde vea comas*/}
                                {/*el trim quita los espacios feos para armar los puntitos*/}
                                {cv.languages.split(',').map((item, i) => (
                                    <li key={i}>{item.trim()}</li>
                                ))}
                            </ul>

                            <h3>Skills</h3>
                            <ul>
                                {/*ase el mismo proceso de romper el texto por las comas*/}
                                {/*va creando un renglon por cada habilidad encontrada*/}
                                {cv.skills.split(',').map((item, i) => (
                                    <li key={i}>{item.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
