"use client"

import { useAppSelector } from "../redux/hooks";  //Para manejar informacion de redx

export function Header() {
    const user = useAppSelector((state) => state.user); //obtenemos la informacion de nuestro redux (recuerdas que lo nombramos user?)

    return(
        <header>
            <ul>
                <li>Name: {user.name}</li>
                <li>UserName: {user.username}</li>
                <li>Email: {user.email}</li>
            </ul>
        </header>
    );
}
