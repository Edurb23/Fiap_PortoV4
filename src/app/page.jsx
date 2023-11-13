import React from 'react'
import "./css/home.scss"
import Image from 'next/image'
import Link from 'next/link'
import Colaboradores from '@/components/Colaboradores/colaborador'

export default function page() {
  return (
    <>

      <div>

        <section className="inicio">
          <h1>Somos a empresa jarvis e estamos aqui para ajudar com seu problema !
            <p>A Porto é uma holding brasileira fundada em 1945. A atuação da empresa se baseia em três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank.</p>
            <Link href="https://www.portoseguro.com.br/" target="_blank"><button>Site Porto</button></Link>
             </h1>

          <Image className='imgLogo' src="/images/Guincho.png"
            width={700}
            height={800}
            alt="Imagem de um guincho"
            
          />

        </section>

        <section className="servicos">
          <a>serviços</a>
          <p>Nosso serviço é recolher dados do cliente para a otimização dos serviços da porto, nosso chatbot é de rápido e facil entendimento para todas as faixas etárias.  </p>
        </section>

        <section className="cards-servicos">
          <div className="chatbot">
            <h3>chatbot otimizado</h3>
            <Image className='cardimg' src="/images/chatia.png"
              width={400}
              height={250} />
          </div>
          <div className="comofuciona">
            <h3>como funciona nosso tabalho?</h3>
            <Image className='cardimg' src="/images/Guincho.png"
              width={400}
              height={250} />
          </div>
          <div className="statusmodal">
            <h3>status modal de envio</h3>
            <Image className='cardimg' src="/images/looding.png"
              width={400}
              height={250} />

          </div>

        </section>
      </div>
      <section className="OWP">
        <a>Our Working Process</a>
        <p>nosso passso a passo de negócio </p>
      </section>

      <section className="cards">
        <div>
          <h1>

            01 Consulta

          </h1>
        </div>
        <div >
          <h1> 02 Pesquisa e desenvolvimento de estratégia</h1>
        </div>
        <div >
          <h1> 03 implementação</h1>
        </div >
        <div >
          <h1> 04 monitoramento e otimização</h1>
        </div >
        <div >
          <h1> 05 Relatório e comunicação</h1>
        </div>
        <div >
          <h1> 06 Melhoria contínua</h1>
        </div>
      </section>

      <Colaboradores/>

    </>
  )
}
