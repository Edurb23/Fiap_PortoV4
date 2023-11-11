"use client";
import React from 'react'
import { useState} from 'react'
// import { Router } from 'next/router'
import { useRouter } from "next/navigation";

export default function Cadastro({params}) {

    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("");

    const [cliente, setCliente] = useState({
        "NM_CLIENTE":"",
        "DT_DATA_NASCIMENTO":"",
        "NR_CNH":"",
        "NR_CPF":"",
        "NR_RG":""
    })
    
    
    // useEffect(()=>{
    //     if (msgstatus == "Cadastro Realizado com Sucesso!")
    // }, [msgstatus])

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setCliente({...cliente,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/cliente_add",{
                method:"Post",
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
                        router.push("/");
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
                            "NR_RG":""
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
                <label htmlFor="idEmail">Email</label>
                <input type="email" name='email'id='idEmail' placeholder='Digite seu email:'/>
            </div>
            <div>
                <label htmlFor="id">Senha</label>
                <input type="password" name='senha'id='idSenha' placeholder='Digite sua Senha:'/>
            </div>
            <div>
                <button>Cadastrar</button>
            </div>
        </form>
    </div>  
    </>
  )
}
