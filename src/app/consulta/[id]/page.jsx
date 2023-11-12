"use client";
import React from 'react'
import { useState, useEffect} from 'react'
// import { Router } from 'next/router'
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Consulta({params}) {
    console.log(params.id);
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

    useEffect(() => {
        const obterClienteAtual = async () => {
            try{
                const responseget = await fetch(`http://127.0.0.1:5000/cliente/${params.id}`,{
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






    // try{
    //     const responseget = await fetch(`http://127.0.0.1:5000/cliente/${params.id}`,{
    //         method:"GET",
    //         headers:{
    //             "Content-Type":"application/json"   
    //         }
    //     });
    //     clienteAtual = await responseget.json();

    //     setCliente(clienteAtual);
    // }catch(error){
    //     console.log(error);
    //     redirect("/error");
    // }
    
    // useEffect(()=>{
    //     if (msgstatus == "Cadastro Realizado com Sucesso!")
    // }, [msgstatus])

    const handleBack = (e)=>{
        router.push("/homeadmin")
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setCliente({...cliente,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/cliente_update",{
                method:"Put",
                headers:{
                    "Content-Type":"application/json"
                },
                
                body: JSON.stringify(cliente)
            });

            if(response.ok){
                const clients = await response.json();

                if(clients){
                    setMsgStatus("Cadastro Realizado com Sucesso!");
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
    <>
        <h1>Cadastro</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="idNome">Nome</label>
                    <input type="text" name='NM_CLIENTE'id='idNome' placeholder='Digite seu Nome Completo:' value={cliente.NM_CLIENTE} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idDataNascimento">Data de Nascimento</label>
                    <input type="date" name='DT_DATA_NASCIMENTO'id='idDataNascimento' placeholder='Digite sua data de nascimento:' value={cliente.DT_DATA_NASCIMENTO} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idCPF">CPF</label>
                    <input type="text" name='NR_CPF'id='idCPF' placeholder='Digite seu CPF:' value={cliente.NR_CPF} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idCNH">CNH</label>
                    <input type="text" name='NR_CNH'id='idCNH' placeholder='Digite sua CNH:' value={cliente.NR_CNH} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idRG">RG</label>
                    <input type="text" name='NR_RG'id='idRG' placeholder='Digite seu Rg:' value={cliente.NR_RG} onChange={handleChange}/>
                </div>
                <div>
                    <button>Cadastrar</button>
                    {/* <button onClick={handleBack}>Voltar</button> */}
                    <Link href="/homeadmin">Voltar</Link>
                </div>
            </form>
        </div>  
    </>
  )
}
