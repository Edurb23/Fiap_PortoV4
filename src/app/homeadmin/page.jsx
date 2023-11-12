"use client";
import React from 'react'
import { useState, useEffect} from 'react'
import { useRouter } from "next/navigation";

// import { redirect } from "next/navigation";
import Link from "next/link";


export default function Homeadmin() {

    const router = useRouter();
    // const [msgstatus, setMsgStatus] = useState("");
    const [clientes, setClientes] = useState([])
    const [datamin, setDatamin] = useState("1900-01-01")
    const [datamax, setDatamax] = useState("2050-12-31")


    useEffect(() => {
        const getClientes = async () => {
            try{
                const responseget = await fetch(`http://127.0.0.1:5000/clientesearch/?datamin=${datamin}&datamax=${datamax}`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"   
                    }
                });
                let clientes = await responseget.json();
                console.log(clientes)
                setClientes(clientes);
            }catch(error){
                console.log(error);
                redirect("/error");
            }
        };
        getClientes();
      }, []);



    const handleConsulta = (id)=>{
        router.push(`/consulta/${id}`)
    }
    const handleAtualizacao = (id)=>{
        router.push(`/atualizacao/${id}`)
    }
    const handleDelete = (id)=>{
        router.push(`/delete/${id}`)
    }


    // let clientes;
    // try{
    //     const responseget = await fetch(`http://127.0.0.1:5000/clientesearch/?datamin=25/02/1900&datamax=31/12/2050`,{
    //         method:"GET",
    //         headers:{
    //             "Content-Type":"application/json"   
    //         }
    //     });
    //     clientes = await responseget.json();
    // }catch(error){
    //     console.log(error);
    //     redirect("/error");
    // }

    // const corrigindoData = (dataCompleta) => {
    //     const data = new Date(dataCompleta);
    //     const dia = String(data.getDate()).padStart(2, '0');
    //     const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses são indexados de 0 a 11
    //     const ano = data.getFullYear();
      
    //     return `${dia}/${mes}/${ano}`;
    //   };



    return (
        <div className="lat-prod-all">
    
            <h1>Clientes</h1>
    
            <table>
                <thead>
                    <tr>    
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Data do Cadastro</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.ID_CLIENTE}>
                            <td>{cliente.ID_CLIENTE}</td>
                            <td>{cliente.NM_CLIENTE}</td>
                            <td>{cliente.DT_CADASTRO}</td>
                            <td>
                                <button onClick={()=>handleConsulta(cliente.ID_CLIENTE)}>Consultra</button>
                                <button onClick={()=>handleAtualizacao(cliente.ID_CLIENTE)}>Editar</button>
                                <button onClick={()=>handleDelete(cliente.ID_CLIENTE)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total de Clientes: {clientes.length}</td>
                    </tr>
                    <tr>
                        <Link href="/cadastro">Novo</Link>
                    </tr>
                </tfoot>
            </table>
    
        </div>
    )
}
