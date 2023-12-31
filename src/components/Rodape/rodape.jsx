import React from 'react'
import Image from 'next/image'
import './rodape.scss'
import Link from 'next/link'


export default function Rodape() {
  return (
    <>
     <section className="footer">
            <div className="conteudo-1">
            <ul>
            <Image className='imgLogo' src= "/images/logo.png" 
                width={300}
                height={100}
                alt ="Imagem de um guincho"/>
                <li>
                    <a>
                        Sobre nos
                    </a>
                </li>
                <li>
                    <a>
                        Serviços
                    </a>
                </li>
                <li>
                    <a>
                       Fale conosco:
                    </a>
                </li>
                <li>
                    <a>
                        Email: autocarsevicos@fiap.com.br
                    </a>
                </li>
                <li>
                    <a>
                        Address: AV. paulista 5003
                    </a>
                </li>
            </ul>

            </div>

            <div  className="conteudo-2">

            <ul>
                <li>
                    <Link href="https://br.linkedin.com/" target="_blank">
                    
                        <Image src="/images/icons8-linkedin.png"
                        width={60}
                        height={60}/>

                    </Link>
                       
                    
                </li>
                <li>
                    
                    <Link href="https://www.facebook.com/?locale=pt_BR" target="_blank">
                    
                    <Image src="/images/facebook.png"
                        width={60}
                        height={60}/>

                    </Link>
                   
                </li>
                <li>
                    <Link href="https://twitter.com/" target="_blank">
                    
                    <Image src="/images/twitter.png"
                        width={60}
                        height={60}/>
                    
                    </Link>
                    
                    
                </li>
            </ul>
            </div>
    
        </section>

    </>
  )
}
