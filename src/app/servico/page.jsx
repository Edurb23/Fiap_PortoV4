import React from 'react'
import Image from 'next/image'
import './servico.scss'

export default function Servicos() {
    return (
        <>
            <section className="conteudo">

                <h1>Serviços</h1>
                <div className="texto-descritivo">
                    <p >
                        Nosso serviço consiste em criar um ChatBot inteligente e de fácil entendimento, esse Chatbot ajudará na coleta de informações que serão fornecidas pelo cliente. Com essas informações será possível localizar o veículo do cliente e solicitar o melhor modal para a solução do problema.
                    </p>

                </div>

                <Image src="/images/chatbot1.png"
                    width={800}
                    height={900}
                    className="imagemchat1"
                />

                <Image src="/images/chatbot2.png"
                    width={800}
                    height={900}
                    className="imagemchat1"

                />


            </section>
        </>
    )
}
