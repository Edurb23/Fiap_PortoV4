"use client";
import React from 'react'
import { useState, useEffect} from 'react'
import { useRouter } from "next/navigation";
import { format } from 'date-fns';
import './homeadmin.scss'

// import { redirect } from "next/navigation";
import Link from "next/link";


export default function Homeadmin() {

    const router = useRouter();
    // const [msgstatus, setMsgStatus] = useState("");
    const [clientes, setClientes] = useState([])
    const [dateInterval, setDateInterval] = useState({
        "datamin":"2004-05-10",
        "datamax": format(new Date(), 'yyyy-MM-dd')
    })

    const getClientes = async () => {
        try{
            const responseget = await fetch(`http://127.0.0.1:5000/clientesearch/?datamin=${dateInterval.datamin}&datamax=${dateInterval.datamax}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"   
                }
            });
            let clientes = await responseget.json();
            setClientes(clientes);
        }catch(error){
            console.log(error);
            redirect("/error");
        }
    };

    useEffect(() => {
        getClientes();
    }, [dateInterval]);


    
    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setDateInterval({...dateInterval,[name]:value})
    }
    const handleLimpar = (e)=>{
        e.preventDefault();
        setDateInterval(
            {
                datamin:"2004-05-10",
                datamax:format(new Date(), 'yyyy-MM-dd')
            },
        );
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
        <div className="clientes">
    
            <h1>Clientes</h1>
            <div className="filtro">
                <form>
                    <div>
                        <label htmlFor="idDataMin">Data min</label>
                        <input type="date" name='datamin'id='idDataMin' value={dateInterval.datamin} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idDataMax">Data max</label>
                        <input type="date" name='datamax'id='idDataMax' value={dateInterval.datamax} onChange={handleChange}/>
                    </div>
                </form>
                <button onClick={handleLimpar}>Limpar</button>
            </div>
            <table>
                <thead>
                    <tr>    
                        <th className='id'>Codigo</th>
                        <th className='demais'>Nome</th>
                        <th className='demais'>Data do Cadastro</th>
                        <th className='opcoes'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.ID_CLIENTE} >
                            <td className='id'>{cliente.ID_CLIENTE}</td>
                            <td className='demais'>{cliente.NM_CLIENTE}</td>
                            <td className='demais'>{cliente.DT_CADASTRO}</td>
                            <td className='opcoes'>
                                <button className='primeiro' onClick={()=>handleConsulta(cliente.ID_CLIENTE)}>Consultra</button>
                                <button onClick={()=>handleAtualizacao(cliente.ID_CLIENTE)}>Editar</button>
                                <button onClick={()=>handleDelete(cliente.ID_CLIENTE)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total de Clientes: {clientes.length}</td>
                        <td className='link'>
                            <div>
                                <Link href="/cadastro">Novo</Link>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
    
        </div>
    )
}
