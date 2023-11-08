import React from 'react'
import Link from 'next/link'
import "./cabecalho.scss"

export default function Cabecalho() {
  return (
    <div>
         <header className="cabecalho">
            <img src="/img/porto-seguro-novo-logo-444639E178-seeklogo.com.png" alt="LOGO PORTO SEGURO" />
            <nav>
                
                <ul>
                    <li>
                        <Link href="/" className='a'>Home</Link>
                    </li>
                    <li>
                        <Link href="/" className='a'>Serviço</Link>
                    </li>
                    <li>
                        <Link href="/" className='a'>Integrantes</Link>
                    </li>
                    <li>
                        <Link href="/login" className='a'>Login</Link>
                    </li>
                </ul>
                
            </nav>
        </header>
    </div>
  )
}
