import React from 'react'
import Image from 'next/image'

export default function Rodape() {
  return (
    <>
     <section className="footer">
            <div className="conteudo-1">
            <ul>
            <Image className='imgLogo' src= "/images/logo.png" 
                width={100}
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
                    <a href="https://br.linkedin.com/" target="_blank">
                       
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"> 
                        
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank"> 
                        
                    </a>
                </li>
            </ul>
            </div>
    
        </section>

    </>
  )
}
