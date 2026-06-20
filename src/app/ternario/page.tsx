'use client'

import { useState } from "react";

export default function Page(){

    const [rol, setRol]  = useState('admin');

    const cambiarRol = ()=> {
        if(rol === 'admin'){
            setRol('user');
        } else {
            setRol('admin');
        }

        //setRol(x => x === 'admin' ? 'user' : 'admin');
        
        console.log(rol);
    };

    return(
        <div>
            <div>
                <button onClick={cambiarRol}>Cambiar rol</button>
            </div>
            {
                rol === 'admin' ? 
                    <p>Bienvenido, administrador</p> 
                    :
                    <>
                    <p>Bienvenido, usuario</p>
                    <p>Que quieres hacer</p>
                    </>
            }
            { rol === 'admin' && (
                <div> 
                    Este div solo aparece para los administradores
                </div>
            )
            }
            
        </div>
    )
}