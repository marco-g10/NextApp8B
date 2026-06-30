'use client'

import { useDispatch } from "react-redux";
import { Email } from "../components/Email";
import { Header } from "../components/Header";
import { useEffect } from "react";
import { addUser } from "../redux/userSlice";

export default function Page() {

    const dispatch = useDispatch(); //El disparador para llamar a las funciones(reducers) de nuestro redux 

    useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))  //asi se llama a un reducer(funcion) en nuestro redux
      .catch((err) => console.log(err));
    }, []);  //al estar vacio se ejecuta al cargar el componente


    return(
        <div style={{padding: '20px', textAlign: 'center'}}>
            <Header />
            <Email />
        </div>
    );
}