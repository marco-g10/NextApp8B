'use client'
//importamos las cosas de react para controlar la pagina
//el usestate guarda lo que escribe la gente y elusefect cambia el titulo
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

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
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Generador de CV</Typography>
            {/*acomodamos el diseño en dos columnas usando flexbox*/}
            {/*el gap de veinte es para que no queden pegados los lados*/}
            <Box sx={{ display: 'flex', gap: '20px' }}>
                {/*este div es el formulario con todas las cajas de texto*/}
                {/*el flex direction las va apilando una abajo de la otra*/}
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        '& .MuiTextField-root': { m: 1 },
                    }}
                >
                    <TextField
                        required
                        label="Nombre"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Dirección"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Resumen"
                        variant="outlined"
                        multiline
                        rows={3}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    <TextField
                        label="Experiencia"
                        variant="outlined"
                        multiline
                        rows={3}
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    <TextField
                        label="Educación"
                        variant="outlined"
                        multiline
                        rows={2}
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    />
                    {/*aqui meten los idiomas separados por una coma obligatoria*/}
                    <TextField
                        label="Idiomas (separados por comas)"
                        variant="outlined"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        helperText="Ej: Español, Inglés, Francés"
                    />
                    {/*las avilidades tambien van separadas por comas en la caja*/}
                    <TextField
                        label="Habilidades (separadas por comas)"
                        variant="outlined"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        helperText="Ej: React, Node.js, SQL"
                    />
                    {/*este es el boton que manda a llamar la funcion de arriba*/}
                    {/*sirve para armar la hoja del cv al darle click*/}
                    <Button
                        variant="contained"
                        onClick={generateCV}
                        sx={{ m: 1, mt: 2 }}
                    >
                        Generar CV
                    </Button>
                </Box>
                {/*este cuadro de la derecha es para ver como quedo el cv*/}
                {/*tiene una linea gris alrededor para que paresca una hoja*/}
                <Paper elevation={2} sx={{ width: '50%', p: 3 }}>
                    {/*si el cv esta vacio enseña este texto de espera por mientras*/}
                    {!cv && (
                        <Typography color="text.secondary">
                            Tu CV aparecerá aquí
                        </Typography>
                    )}
                    {/*si ya le dieron click al boton dibuja todo el cv real*/}
                    {cv && (
                        <Box>
                            <Typography variant="h5">{cv.name}</Typography>
                            {/*une la direccion y el correo con una linea intermedia*/}
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                {cv.address}{cv.email && ` - ${cv.email}`}
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>Resumen</Typography>
                            <Typography variant="body1">{cv.summary}</Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>Experiencia</Typography>
                            <Typography variant="body1">{cv.experience}</Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>Educación</Typography>
                            <Typography variant="body1">{cv.education}</Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>Idiomas</Typography>
                            <ul>
                                {/*agarra el texto y lo parte en pedazos donde vea comas*/}
                                {/*el trim quita los espacios feos para armar los puntitos*/}
                                {cv.languages.split(',').map((item, i) => (
                                    <li key={i}><Typography variant="body1">{item.trim()}</Typography></li>
                                ))}
                            </ul>
                            <Typography variant="h6" sx={{ mt: 2 }}>Habilidades</Typography>
                            <ul>
                                {/*ase el mismo proceso de romper el texto por las comas*/}
                                {/*va creando un renglon por cada habilidad encontrada*/}
                                {cv.skills.split(',').map((item, i) => (
                                    <li key={i}><Typography variant="body1">{item.trim()}</Typography></li>
                                ))}
                            </ul>
                        </Box>
                    )}
                </Paper>
            </Box>
        </Box>
    )
}
