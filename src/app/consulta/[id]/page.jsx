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
        <h1>Dados do Cliente</h1>
        <div>
            
                <div>
                    <label htmlFor="idNome">Nome</label>
                    <span>{cliente.NM_CLIENTE}</span>
                </div>
                <div>
                    <label htmlFor="idDataNascimento">Data de Nascimento</label>
                    <span>{cliente.DT_DATA_NASCIMENTO}</span>
                    
                </div>
                <div>
                    <label htmlFor="idCPF">CPF</label>
                    <span>{cliente.NR_CPF}</span>
                </div>
                <div>
                    <label htmlFor="idCNH">CNH</label>
                    <span>{cliente.NR_CNH}</span>
                </div>
                <div>
                    <label htmlFor="idRG">RG</label>
                    <span>{cliente.NR_RG}</span>
                </div>
                <div>
                    <Link href="/homeadmin">Voltar</Link>
                </div>
        </div>  
    </>
  )
}
