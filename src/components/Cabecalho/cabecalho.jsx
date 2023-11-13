import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./cabecalho.scss"
import "../../app/css/main.scss"

export default function Cabecalho() {
  return (
    <div>
         <header className="cabecalho">
            <Image src= "/images/logo.png" 
            width={450}
            height={250}
            alt ="Imagem da logo da porto seguro"
            className='logo'
            />
            <nav>
                
                <ul>
                    <li>
                        <Link href="/" className='a'>Home</Link>
                    </li>
                    <li>
                        <Link href="/servico" className='a'>Serviço</Link>
                    </li>
                    <li>
                        <Link href="/integrantes" className='a'>Integrantes</Link>
                    </li>
                   
                    <li>
                        <Link href="/homeadmin" className='a'>Clientes</Link>
                    </li>
                </ul>
                
            </nav>
        </header>
    </div>
  )
}
