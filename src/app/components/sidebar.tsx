'use client'

import Link from "next/link"

export default function sidebar () {


    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                    Inicio
                    </Link>
                </li>
                <li>
                    <Link href="todolist">
                        todolist
                    </Link>                   
                </li>
                <li>
                    <Link href="/CV">
                        CV
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

