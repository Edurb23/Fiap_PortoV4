"use client";
import React from 'react'
import { useState, useEffect} from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import './cadastro.scss'

export default function Cadastro() {

    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("");

    const [cliente, setCliente] = useState({
        "nm_cliente":"",
        "dt_data_nascimento":"",
        "nr_cnh":"",
        "nr_cpf":"",
        "nr_rg":""
    })
    
    
    useEffect(()=>{
        if (msgstatus)
            alert(msgstatus)
    }, [msgstatus])

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setCliente({...cliente,[name]:value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await fetch("http://localhost:8080/api/cliente",{
            const response = await fetch("http://127.0.0.1:5000/cliente_add",{
                method:"POST",
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
                    console.error("Erro ao analisar resposta JSON:", error);
                    setMsgStatus("Ocorreu um erro!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setCliente({
                            "nm_cliente":"",
                            "dt_data_nascimento":"",
                            "nr_cnh":"",
                            "nr_cpf":"",
                            "nr_rg":""
                        });
                    },5000);
                }
            }
        }catch (error) {
            console.error("Erro ao analisar resposta JSON:", error);
        }
    } 
    return (
        <div className='dadosclientes'>
        <h1>Cadastro</h1>
        <form  onSubmit={handleSubmit} className='table'>
            <div className='div'>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name='nm_cliente'id='idNome' placeholder='Digite seu Nome Completo:' value={cliente.nm_cliente} onChange={handleChange}/>
            </div>
        
            <div className='div'>
                <label htmlFor="idDataNascimento">Data de Nascimento</label>
                <input type="date" name='dt_data_nascimento'id='idDataNascimento' placeholder='Digite sua data de nascimento:' value={cliente.dt_data_nascimento} onChange={handleChange}/>
                
            </div>
            <div className='div'>
                <label htmlFor="idCPF">CPF</label>
                <input type="text" name='nr_cpf'id='idCPF' placeholder='Digite seu CPF:' value={cliente.nr_cpf} onChange={handleChange}/>
            </div>
            <div className='div'>
                <label htmlFor="idCNH">CNH</label>
                <input type="text" name='nr_cnh'id='idCNH' placeholder='Digite sua CNH:' value={cliente.nr_cnh} onChange={handleChange}/>
            </div>
            <div className='div'>
                <label htmlFor="idRG">RG</label>
                <input type="text" name='nr_rg'id='idRG' placeholder='Digite seu Rg:' value={cliente.nr_rg} onChange={handleChange}/>
            </div>
            <div className='link'>
                <Link href="/homeadmin" className='link'>Voltar</Link>
                <button className='link'>Cadastrar</button>
            </div>
        </form>
    </div>  
  )
}
