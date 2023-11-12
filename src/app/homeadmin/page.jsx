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
    const [interval, setInterval] = useState({
        "datamin":"1900-01-01",
        "datamax": "2050-12-31"
    })

    


    useEffect(() => {
        const getClientes = async () => {
            try{
                const responseget = await fetch(`http://127.0.0.1:5000/clientesearch/?datamin=${interval.datamin}&datamax=${interval.datamax}`,{
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
    
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInterval({...interval,[name]:value})
    }

    const handleSubmit = (e)=>{
        getClientes();
    }


    const handleConsulta = (id)=>{
        router.push(`/consulta/${id}`)
    }
    const handleAtualizacao = (id)=>{
        router.push(`/atualizacao/${id}`)
    }
    const handleDelete = (id)=>{
        router.push(`/delete/${id}`)
    }

    return (
        <div className="lat-prod-all">
    
            <h1>Clientes</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="idDataMin">Data min</label>
                        <input type="date" name='datamin'id='idDataMin' value={interval.datamin} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idDataMax">Data max</label>
                        <input type="date" name='datamax'id='idDataMax' value={interval.datamin} onChange={handleChange}/>
                    </div>
                    <button>Buscar</button>
                </form>
            </div>
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
