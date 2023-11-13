"use client";
import React from 'react'
import { useState, useEffect} from 'react'
// import { Router } from 'next/router'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import './delete.scss'

export default function Delete({params}) {

    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("");

    const [cliente, setCliente] = useState({
        "nm_cliente":"",
        "dt_data_nascimento":"",
        "nr_cnh":"",
        "nr_cpf":"",
        "nr_rg":"",
        "id_clientE": params.id
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

    useEffect(()=>{
        if (msgstatus)
            alert(msgstatus)
    }, [msgstatus])

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:5000/cliente_delete/${params.id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                
                body: JSON.stringify(cliente)
            });
            


            if(response.status == 204){
                setMsgStatus("Excluído com Sucesso!");
                setTimeout(()=>{
                    setMsgStatus("");
                    router.push("/homeadmin");
                },5000);

            }else{
                setMsgStatus("Ocorreu um erro!");
                setTimeout(()=>{
                    setMsgStatus("");
                },5000);
            }
        }catch (error) {
        }
    } 




  return (
    <div className='dadosclientes'>
        <h1>Deletando Cliente</h1>
        <div className='table'>
            
                <div className='div'>
                    <label htmlFor="idNome">Nome</label>
                    <div>
                        <span>{cliente.NM_CLIENTE}</span>
                    </div> 
                </div>
                <div className='div'>
                    <label htmlFor="idDataNascimento">Data de Nascimento</label>
                    <div>
                        <span>{cliente.DT_DATA_NASCIMENTO}</span>
                    </div> 
                    
                </div>
                <div className='div'>
                    <label htmlFor="idCPF">CPF</label>
                    <div>
                        <span>{cliente.NR_CPF}</span>
                    </div> 
                </div>
                <div className='div'>
                    <label htmlFor="idCNH">CNH</label>
                    <div>
                        <span>{cliente.NR_CNH}</span>
                    </div> 
                </div>
                <div className='div'>
                    <label htmlFor="idRG">RG</label>
                    <div>
                        <span>{cliente.NR_RG}</span>
                    </div> 
                </div>
                <div className='link'>
                    <Link href="/homeadmin">Voltar</Link>
                    <button onClick={handleClick}>Deletar</button>
                </div>
        </div>  
    </div>
  )
}

