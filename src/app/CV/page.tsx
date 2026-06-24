'use client'
import { useState } from "react";

export default function Page() {

    // Primero nuestras variables de entrada que el usuario va a ingresar
    const [nombreInput, setNombreInput] = useState<string>('');
    const [direccionInput, setDireccionInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [summaryInput, setSummaryInput] = useState<string>('');
    const [experienciaInput, setExperienciaInput] = useState<string>('');
    // Guardamos la info académica y técnica extra en estos estados
    const [educacionInput, setEducacionInput] = useState<string>('');
    const [idiomasInput, setIdiomasInput] = useState<string>('');
    const [skillsInput, setSkillsInput] = useState<string>('');

    // variables de salida lo que se dibujara o mostrara en el cv en la parte de abajo una ves demos clic en aceptar 
    const [cvNombre, setCvNombre] = useState<string>('');
    const [cvDireccion, setCvDireccion] = useState<string>('');
    const [cvEmail, setCvEmail] = useState<string>('');
    const [cvSummary, setCvSummary] = useState<string>('');
    const [cvExperiencia, setCvExperiencia] = useState<string>('');
    // Los estados que van a mostrar el CV final, empiezan vacíos
    const [cvEducacion, setCvEducacion] = useState<string>('');
    const [cvIdiomas, setCvIdiomas] = useState<string>('');
    const [cvSkills, setCvSkills] = useState<string>('');

    // Básicamente pasamos los valores del borrador a la versión final cuando le dan al botón
    const generarCV = () => {
        setCvNombre(nombreInput);
        setCvDireccion(direccionInput);
        setCvEmail(emailInput);
        setCvSummary(summaryInput);
        setCvExperiencia(experienciaInput);
        setCvEducacion(educacionInput);
        setCvIdiomas(idiomasInput);
        setCvSkills(skillsInput);
    }

    return (
        <div>
            {/* Lugar donde el formulario se va a llenar */}
            <h2>Formulario</h2>
            
            {/* Aquí aplicamos el estilo '1fr 1fr' con este estilo creamos 2 columnas del mismo tamaño.
              gap: '20px' le da una separación bonita entre los cuadros para que no esten apilados o encimados.
            */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '600px' }}>
                
                {/* Agrupamos cada campo en su propio div para su separacion*/}
                <div>
                    <label>Nombre</label><br/>
                    <input
                        /*en cada placeholder especificamos la sugerencia de lo que se debe ingresar para el usuario*/
                        placeholder="Escribe tu nombre"
                        /*el value es nuestra variable de entrada que se va a ir actualizando dependiendo de lo que escriba el usuario*/
                        value={nombreInput}
                        /*aqui tenemos el evento que cada vez que el usuario escribe algo lo detecta. */
                        onChange={(e) => setNombreInput(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Dirección</label><br/>
                    <input
                        /*hacemos exactamente lo mismo con cada campo que tenemos de informacion para nuesto cv */
                        placeholder="Escribe tu dirección"
                        value={direccionInput}
                        onChange={(e) => setDireccionInput(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email</label><br/>
                    <input
                        // Un input normalito para el correo de contacto
                        placeholder="Escribe tu correo"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                </div>

                <div>
                    <label>Summary</label><br/>
                    <input
                        // Espacio para que el usuario se eche flores el solito
                        placeholder="Resumen sobre ti"
                        value={summaryInput}
                        onChange={(e) => setSummaryInput(e.target.value)}
                    />
                </div>

                <div>
                    <label>Experiencia</label><br/>
                    <input
                        // Dónde ha trabajado antes
                        placeholder="Escribe tu experiencia"
                        value={experienciaInput}
                        onChange={(e) => setExperienciaInput(e.target.value)}
                    />
                </div>

                <div>
                    <label>Educación</label><br/>
                    <input
                        // En qué escuela anda o qué estudió
                        placeholder="Tu nivel de estudios"
                        value={educacionInput}
                        onChange={(e) => setEducacionInput(e.target.value)}
                    />
                </div>

                <div>
                    <label>Idiomas</label><br/>
                    <input
                        // Español, inglés, etc
                        placeholder="Idiomas que dominas"
                        value={idiomasInput}
                        onChange={(e) => setIdiomasInput(e.target.value)}
                    />
                </div>

                <div>
                    <label>Skills</label><br/>
                    <input
                        // Las habilidades que lo hacen destacar
                        placeholder="Tus habilidades"
                        value={skillsInput}
                        onChange={(e) => setSkillsInput(e.target.value)}
                    />
                </div>

            </div> {/* Aqui terminan los datos input que agrega el usuario osea la cuadrícula y empieza el 
            cv despues tenemos nuestro boton de Aceptar para generar el CV con la informacion agregada*/}
            <br/>
            <button onClick={generarCV}>Aceptar</button>
            <br/>
            <hr/>

            {/* esta es la parte en la que se genera el CV */}
            <h2>CV</h2>
            {/* Simplemente imprimimos las variables que ya traen la info definitiva para que se vea abajo */}
            <label>Nombre: {cvNombre}</label><br/>
            <label>Dirección: {cvDireccion}</label><br/>
            <label>Email: {cvEmail}</label><br/>
            <label>Summary: {cvSummary}</label><br/>
            <label>Experiencia: {cvExperiencia}</label><br/>
            <label>Educación: {cvEducacion}</label><br/>
            <label>Idiomas: {cvIdiomas}</label><br/>
            <label>Skills: {cvSkills}</label>

        </div>
    )
}