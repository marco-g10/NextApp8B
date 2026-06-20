'use client'; //usamos componente cliente porque vamos a trabajar con datos que el cliente nos proporciona

import { useState } from 'react'; //importamos la funcion para usar estados de react

//en este apartado declaro las variable que se usaran para dar estilo con tailwindcss son de las que mas uso
const inputStyle = 'bg-[#fefcf3] border rounded-xs px-2'
const inputC = 'flex flex-col w-full'
const labelStyle = 'font-semibold'

export default function FormCVPage() {
    const [open, setOpen] = useState(false);    //este estado va a mostrar el apartado inferior con los datos al estar activo (true)
    const [formData, setFormData] = useState({  //este es un estado del objeto fromData donde se guardara todo el registro del cv
        name: '',
        address: '',
        email: '',
        summary: '',
        existence: '',
        education: '',
        languages: '',
        skills: ''
    })

    const handleAgregar =()=>{                //esta es una funcion para "generar el cv"
        console.log('FormData: ', formData);  // imprimimos los datos que ingreso el usuario 
        //consicionamos para que se llene completamente el formulario
        if(!formData.name 
            || !formData.email 
            || !formData.address 
            || !formData.education 
            || !formData.existence 
            || !formData.languages 
            || !formData.skills 
            || !formData.summary){
            alert('Complete el formulario porfavor') //alert para el cliente si no llena todos los campos
        }else{
            setOpen(true) //modificamos estado open en true para mostrar la parte inferior de la pagina donde esta todo el cv  en caso de que todo el formulario este lleno
        }                         
    }

    return (    //definimos todo el html a mostrar para el usuario 
        <main className='w-full h-full'>  {/*este es el main general */}
            
            <section className='w-full flex justify-center'>  {/*esta es la primera seccion la parte del forms */}  
                <div className='w-90 flex flex-col p-7 rounded-xl border'> {/* esto solo es para estilo*/}
                    <div className='bg-[#ffdbd9] rounded-xl p-5'> {/* esto solo es para estilo*/}
                        <div className={inputC}>                                       {/*aqui definimos un div para el input del nombre */}
                            <label htmlFor="" className={labelStyle}>Nombre</label>    {/*aqui definimos el titulo del input luego le asignamos el estilo que definimos al principio por tailwindcss  */}
                            <input type="text"                                         
                                className={inputStyle}                                
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                            />  {/*por ultimo mandamos cambiar el estado del formData para usuar el nombre que le dio el usuario */}
                        </div>
                        <div className={inputC}>  {/*basicamente hacemos lo mismo que en el ultimo div para generar otro input para la direccion */}              
                            <label className={labelStyle}>Dirección</label>
                            <input type="text"
                                className={inputStyle}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />  {/*mandamos modificar el estado en address para la direccion */}
                        </div>
                        <div className={inputC}>  {/*volvemos a hacer lo mismo que en el ultimo div para generar otro input para la direccion */}
                            <label className={labelStyle}>Correo</label>
                            <input type="text"
                                className={inputStyle}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            /> {/*mandamos modificar el estado formData para el correo */}
                        </div>
                        <div className={inputC}>   {/*volvemos a hacer lo mismo que en el ultimo div para generar otro input*/}
                            <label htmlFor="" className={labelStyle}>Summary</label>
                            <input type="text"
                                className={inputStyle} 
                                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                            />   {/*mandamos modificar el estado en address para el resumen */}
                        </div>
                        <div className={inputC}> {/*volvemos a hacer lo mismo que en el ultimo div para generar otro input para la experiencia */}
                            <label htmlFor="" className={labelStyle}>Experiencia</label>
                            <input type="text"
                                className={inputStyle} 
                                onChange={(e) => setFormData({ ...formData, existence: e.target.value })}
                            />   {/*mandamos modificar el estado en address para la existencia */}
                        </div>
                        <div className={inputC}>   {/*volvemos a hacer lo mismo que en el ultimo div para generar otro input para la educacion */}
                            <label htmlFor="" className={labelStyle}>Educación</label>
                            <input type="text"
                                className={inputStyle} 
                                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                            />     {/*mandamos modificar el estado en address para la educacion*/}
                        </div>
                        <div className={inputC}> {/*volvemos a hacer lo mismo que en el ultimo div para generar otro input para los idiomas */}
                            <label htmlFor="" className={labelStyle}>Idiomas</label>
                            <input type="text"
                                className={inputStyle} 
                                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                            /> {/*mandamos modificar el estado en address para los idiomas */}
                        </div>
                        <div className={inputC}>   {/*volvemos a hacer lo mismo que en el ultimo div para generar otro input para las habilidades*/}
                            <label htmlFor="" className={labelStyle}>Skills</label>
                            <input type="text"
                                className={inputStyle} 
                                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                            />    {/*mandamos modificar el estado en address para las habilidades */}
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>
                        <button
                        onClick={()=> handleAgregar()}
                        className='rounded-full px-4 bg-[#644c65] hover:cursor-pointer hover:bg-[#3e394c] py-2 mt-5 w-60 text-[#ffffff]'>
                            Generate CV
                        </button>  {/*este boton funciona para activar el open y generar la vista inferior para mostrar los datos ingresados */}
                    </div>

                </div>
            </section>
            {/*aqui estoy usando un ternario para condicionar la visibilidad de la parte inferior (cv) que no se vea nada cuando el estado de open este en false pero que se muetre al cambiar a true */}
            {open == true ? 
            (<div>
                <section className='w-full flex justify-center mt-10'> {/*esta es la seccion inferior donde se muestra el cv generado */}

                    <div className='w-11/12 p-7 border rounded-xl'> {/* en esta primera seccion se motrararn los datos principales tales como nombre, direccion, resumen y correo*/}
                        <h1 className={labelStyle}>Datos principales</h1> 
                        <div className='p-2 px-10 bg-[#ffdbd9] rounded-xl'>
                            <ul>
                                <li>
                                    <h2 className={labelStyle}>Nombre:</h2> {/*este es el titulo que se mostrara para que posteriormente se imprima la variable correspondiente del estado que antes guardamos con los inputs del cliente */}
                                    <p>{formData.name}</p>
                                </li>
                                <li>
                                    <h2 className={labelStyle}>Dirección:</h2> {/*aqui y en toda la siguiente parte realizamos lo mismo solo que con los demas datos */}
                                    <p>{formData.address}</p>
                                </li>
                                <li>
                                    <h2 className={labelStyle}>Correo:</h2>
                                    <p>{formData.email}</p>
                                </li>
                                <li>
                                    <h2 className={labelStyle}>Summary:</h2>
                                    <p>{formData.summary}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>

                <section className='w-full flex justify-center mt-5'>  {/*esta otra seccion imprimimos la experiencia separada */}

                    <div className='w-11/12 p-7 border rounded-xl'>
                        <h1 className={labelStyle}>Experiencia</h1>
                        <div className='p-2 px-10 bg-[#ffdbd9] rounded-xl'>
                            <p>{formData.existence}</p>
                        </div>
                    </div>

                </section>

                <section className='w-full flex justify-center mt-5'> {/*aqui imprimimos la educacion */}

                    <div className='w-11/12 p-7 border rounded-xl'>
                        <h1 className={labelStyle}>Educación</h1>
                        <div className='p-2 px-10 bg-[#ffdbd9] rounded-xl'>
                            <p>{formData.education}</p>
                        </div>
                    </div>

                </section>

                <section className='w-full flex justify-center mt-5'> {/*aqui imprimimos los idiomas ingresados */}

                    <div className='w-11/12 p-7 border rounded-xl'>
                        <h1 className={labelStyle}>Idiomas</h1>
                        <div className='p-2 px-10 bg-[#ffdbd9] rounded-xl'>
                            <p>{formData.languages}</p>
                        </div>
                    </div>

                </section>

                <section className='w-full flex justify-center mt-5 mb-5'> {/*aqui imprimimos las habilidades que el cliente ingreso en el respectivo input */}

                    <div className='w-11/12 p-7 border rounded-xl'>
                        <h1 className={labelStyle}>Skills</h1>
                        <div className='p-2 px-10 bg-[#ffdbd9] rounded-xl'>
                            <p>{formData.skills}</p>
                        </div>
                    </div>
                </section>

            </div>
            ) : null} {/*por ultimo aqui esta el final de la consicion que muestra que si no se cumple sera null lo que no mostrara nada */}

        </main>
    )
}