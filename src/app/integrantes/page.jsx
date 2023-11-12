import React from 'react'
import Colaboradores from '@/components/Colaboradores/colaborador'
import Link from 'next/link'
import './integrantes.scss'

export default function Integrantes () {
  return (
    <>
    
    <Colaboradores/>

    <Link className="repositorio" href="https://github.com/Edurb23/Fiap_PortoV4" target="_blank"> Nosso Repositorio</Link>

    </>
  )
}
