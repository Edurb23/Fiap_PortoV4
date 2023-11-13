"use client";
import React from 'react'
import { useState, useEffect} from 'react'
// import { Router } from 'next/router'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import './atualizacao.scss'

export default function Atualiza({params}) {

    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("");

    const [cliente, setCliente] = useState({
        "NM_CLIENTE":"",
        "DT_DATA_NASCIMENTO":"",
        "NR_CNH":"",
        "NR_CPF":"",
        "NR_RG":"",
        "ID_CLIENTE": params.id
    })


    useEffect(()=>{
        if (msgstatus)
            alert(msgstatus)
    }, [msgstatus])

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


    const handleChange = (e)=>{
        const {name, value} = e.target;
        setCliente({...cliente,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/cliente_update",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                
                body: JSON.stringify(cliente)
            });

            if(response.ok){
                const clients = await response.json();

                if(clients){
                    setMsgStatus("Atualizado com Sucesso!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        router.push("/homeadmin");
                    },5000);
                }else{
                    setMsgStatus("Ocorreu um erro!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setCliente({
                            "NM_CLIENTE":"",
                            "DT_DATA_NASCIMENTO":"",
                            "NR_CNH":"",
                            "NR_CPF":"",
                            "NR_RG":"",
                            "ID_CLIENTE": params.id
                        });
                    },5000);
                }
            }
        }catch (error) {
        }
    } 




  return (
    <div className='dadosclientes'>
        <h1>Atualizar dados do Cliente</h1>
        
        <form onSubmit={handleSubmit} className='table'>
            <div className='div'>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name='NM_CLIENTE'id='idNome' placeholder='Digite seu Nome Completo:' value={cliente.NM_CLIENTE} onChange={handleChange}/>
            </div>
            <div className='div'>
                <label htmlFor="idDataNascimento">Data de Nascimento</label>
                <input type="date" name='DT_DATA_NASCIMENTO'id='idDataNascimento' placeholder='Digite sua data de nascimento:' value={cliente.DT_DATA_NASCIMENTO} onChange={handleChange}/>
            </div>
            <div className='div'>
                <label htmlFor="idCPF">CPF</label>
                <input type="text" name='NR_CPF'id='idCPF' placeholder='Digite seu CPF:' value={cliente.NR_CPF} onChange={handleChange}/>
            </div>
            <div className='div'>
                <label htmlFor="idCNH">CNH</label>
                <input type="text" name='NR_CNH'id='idCNH' placeholder='Digite sua CNH:' value={cliente.NR_CNH} onChange={handleChange}/>
            </div>
            <div className='div'>
                <label htmlFor="idRG">RG</label>
                <input type="text" name='NR_RG'id='idRG' placeholder='Digite seu Rg:' value={cliente.NR_RG} onChange={handleChange}/>
            </div>
            <div className='link'>
                <Link href="/homeadmin">Voltar</Link>
                <button>Atualizar</button>
            </div>
        </form>
        
    </div>
  )
}
