//Priscila Noemí Araiza de Anda
// nos sirve para usar use effecy y usestate, y es un client component
'use client'

//se importa useeffect y usestate
import { useEffect } from 'react'
import { useState } from 'react'

// interfaz
export default function Page() {
  //se declara un arreglo tasks, setTask nos sirve para modificar el arreglo
  const [tasks, setTasks] = useState<any[]>([])
  //se declara formData que es una interface que es un contrato que define que propiedades debe tener
  //esto nos sirve para evitar declarar muchos estados para los diferentes campos
  const [formData, setFormData] = useState({
    //se ponen todas los atributos que debe tener nuestro cv
      nombre: '',
      direccion: '',
      email: '',
      summary: '',
      experiencia: '',
      educacion: '',
      idiomas: '',
      skills: ''
    })

  // esta función nos sirve para gestionar los inputs de los campos es muy importante
                        //recibe como parametro e que es un evento, y este se dispara cada vez que el usuario borra o hace un cambio en el input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //toammos el nombre y el valor del evento e
    const { name, value } = e.target;

    //se actualiza el estado del formulario
    setFormData({...formData, [name]:value})
    console.log()
  }

  //creamos la función de addInfo que se ejecuta con el boton que creamos e
  const addInfo = () => {
    //lo que esta funcipon hace es manda los datos del formulario a la tasks
    setTasks([...tasks, formData])

    //reiniciamos los campos
    setFormData({
      nombre: '',
      direccion: '',
      email: '',
      summary: '',
      experiencia: '',
      educacion: '',
      idiomas: '',
      skills: ''
    })
  }

  
  useEffect(() => {
    console.log(tasks)

  }, [tasks])


  //empezamos a definir el html
  return (
    //creamos el contenedor principal de la pagina, aquí se le agregan estilos
    <div className="max-w-xl mx-auto p-6 bg-zinc-900 my-8 rounded-xl border border-zinc-800 shadow-lg">
      {/* Es el titulo principal */}
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Cv digital</h1>
      <br></br>
      {/* en este aparatdo se definen los campos y les damos atribitos como el nombre que nos es util a la hora de 
      hacer la funcionaalidad*/}
      <input
        name = 'nombre'
        placeholder='Nombre'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.nombre}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'direccion'
        placeholder='Dirrección'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.direccion}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'email'
        placeholder='Email'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.email}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'summary'
        placeholder='Summary'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.summary}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'experiencia'
        placeholder='Experiencia'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.experiencia}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'educacion'
        placeholder='Educación'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.educacion}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'idiomas'
        placeholder='Idiomas'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.idiomas}
        onChange={handleChange}
      />
      <br></br>
      <br></br>

      <input
        name = 'skills'
        placeholder='Skills'
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
        value={formData.skills}
        onChange={handleChange}
      />
      <br></br>
      
      {/*Aquí se crea el boton que nos ejecuta la logica, el onClick asocia el boton con la funcionalidad 
       */}
      <button onClick={addInfo} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors cursor-pointer">
        Agregar Info
      </button>
      
      {/* Creamos una lista desordenada para agrupar los elemementos que se crean en base a la información del formulario */}
      <ul className="mt-6 space-y-4">
        {/* Usamos el metodo .mao para recorrer la lista tasks, y el index es la posicion en la lista */}
        {tasks.map((task, index) => (
          // el key={index} es pbligatorio en react y nos sirve para darle un id unico a cada valor de la lista
          <li key={index} className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-200">
            {/* Se despliegan todos los valores */}
            <strong>Nombre:</strong> {task.nombre}
            <br></br>
            <strong>Dirección:</strong> {task.direccion}
            <br></br>
            <strong>Email:</strong> {task.email}
            <br></br>
            <strong>Summary:</strong> {task.summary}
            <br></br>
            <strong>Experiencia:</strong> {task.experiencia}
            <br></br>
            <strong>Educación:</strong> {task.educacion}
            <br></br>
            <strong>Idiomas:</strong> {task.idiomas}
            <br></br>
            <strong>Skills:</strong> {task.skills}
          </li>
        ))}
      </ul>

    </div>
  )
}