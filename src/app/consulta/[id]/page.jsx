"use client";
import React from 'react'
import { useState, useEffect} from 'react'
// import { Router } from 'next/router'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import './consulta.scss'

export default function Consulta({params}) {

    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("");

    const [cliente, setCliente] = useState({
        "nm_cliente":"",
        "dt_data_nascimento":"",
        "nr_cnh":"",
        "nr_cpf":"",
        "nr_rg":"",
        "id_cliente": params.id
    })

    useEffect(() => {
        const obterClienteAtual = async () => {
            try{
                const responseget = await fetch(`http://localhost:8080/api/cliente/${params.id}`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"   
                    }
                });
                let clienteAtual = await responseget.json();
                
                setCliente(clienteAtual);
            }catch(error){
                console.log(error);
                redirect("/error");
            }
        };
        obterClienteAtual();
      }, [params.id]);


  return (
    <div className='dadosclientes'>
        <h1>Dados do Cliente</h1>
        <div className='table'>
                <div className='div'>
                    <label htmlFor="idNome">Nome</label>
                    <div>
                        <span>{cliente.nm_cliente}</span>
                    </div>
                </div>
                <div className='div'>
                    <label htmlFor="idDataNascimento">Data de Nascimento</label>
                    <div>
                        <span>{cliente.dt_data_nascimento}</span>
                    </div>
                    
                </div>
                <div className='div'>
                    <label htmlFor="idCPF">CPF</label>
                    <div>
                        <span>{cliente.nr_cpf}</span>
                    </div>
                </div>
                <div className='div'>
                    <label htmlFor="idCNH">CNH</label>
                    <div>
                        <span>{cliente.nr_cnh}</span>
                    </div>
                </div>
                <div className='div'>
                    <label htmlFor="idRG">RG</label>
                    <div>
                        <span>{cliente.nr_rg}</span>
                    </div>
                </div>
        </div>  
        <div className='link'>
            <Link href="/homeadmin">Voltar</Link>
        </div>
    </div>
  )
}
