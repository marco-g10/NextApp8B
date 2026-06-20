'use client'

import Link from "next/link";

export default function Sidebar () {


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