'use client'

import Link from "next/link";
// Importamos usePathname para saber en qué página estamos
import { usePathname } from "next/navigation";

export default function Sidebar () {
    const pathname = usePathname();

    // Si estamos en la página del CV, ocultamos por completo la barra de navegación lateral
    if (pathname === "/cvFormulario") {
        return null;
    }

    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                    Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/events">
                        Events
                    </Link>
                </li>
                <li>
                    <Link href="/changecolor">
                        ChangeColor
                    </Link>
                </li>
            </ul>
        </nav>
    );
}