import React from 'react'
import './colaborador.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Colaborador() {
  return (
    <>
    
    <h1 className="titulo">Integrantes</h1>

<section className="team1">

<div className="colaborador">
    <div className="cabecalho">
    <h4> Eduardo Reis Braga </h4>
    <h5> Aluno na fiap  rm551987  </h5>
    <Link href="https://www.linkedin.com/in/eduardo-reis-braga-681982251/" target="_blank"> 
    
    <Image className='cardimg' src="/images/icons8-linkedin.png"
              width={40}
              height={40} 
               
              />
    </Link>
    </div>
    <div className="rodape">
    
    <h5> olá sou o Eduardo Reis Braga, Sou apaixonado por musica, esporte e tecnologia, tenho certificado da Digital House e agora estou fazendo ADS na fiap </h5>
    </div>

</div>
<div className="colaborador">
    <div className="cabecalho">
    <h4> Raphael Custodio Pabst</h4>
    <h5> Aluno na fiap  rm98525 </h5>
    <Link href="https://www.linkedin.com/in/raphael-pabst/" target="_blank"> 
    
    <Image className='cardimg' src="/images/icons8-linkedin.png"
              width={40}
              height={40} 
               
              />
    </Link>
    </div>
    <div className="rodape">
    
    <h5> Fanático por Esportes Radicais, busco viver de forma intensa. Prazer, sou Raphael Pabst e estou em busca de novos desafios na programação!! </h5>
    </div>

</div>
 <div className="colaborador">
    <div className="cabecalho">
    <h4> silvio Luiz Aranha Junior </h4>
    <h5> Aluno na fiap  rm550821  </h5>
    

    <Link href="https://www.linkedin.com/in/silviojunioor/" target="_blank"> 
    
    <Image className='cardimg' src="/images/icons8-linkedin.png"
              width={40}
              height={40} 
               
              />
    </Link>
  
    </div>
    <div className="rodape">
    
    <h5> olá sou o silvio Luiz, tenho 18 anos sou apaixonado por programação e estou no primeiro semestre da FIAP e quero aprender o maximo possivel </h5>
    </div>

</div>
</section>
<section className="team2">
<div className="colaborador">
    <div className="cabecalho">
    <h4> Leonardo Barral </h4>
    <h5> Aluno na fiap  rm551472   </h5>
    <Link href="https://www.linkedin.com/in/leonardoribeirobarral/" target="_blank"> 
    
    <Image className='cardimg' src="/images/icons8-linkedin.png"
              width={40}
              height={40} 
               
              />
    </Link>
    </div>
    <div className="rodape">
    
    <h5> Sou desenvolvedor software com experiência em analise de dados </h5>
    </div>
    </div>
<div className="colaborador">
    <div className="cabecalho">
    <h4> Pedro Henrique Braga Alves </h4>
    <h5> Aluno na fiap  rm552000   </h5>
    <Link href="https://www.linkedin.com/in/pedro-henrique-1883ba268/" target="_blank"> 
    
    <Image className='cardimg' src="/images/icons8-linkedin.png"
              width={40}
              height={40} 
               
              />
    </Link>
    </div>
     <div className="rodape">
    
    <h5> Olá sou o Pedro Henrique, tenho 18 anos e estou buscando conhecimento na área de programação e curso análise e desenvolvimento de sistemas na FIAP</h5>
    </div>
 </div>

</section>
    </>
  )
}
