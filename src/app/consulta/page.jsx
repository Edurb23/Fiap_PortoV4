"use client";
import React from 'react'
import { useState, useEffect} from 'react'

export default function Consulta({params}) {

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
                clienteAtual = await responseget.json();
                console.log(clienteAtual);
                setCliente(clienteAtual);
            }catch(error){
                console.log(error);
                redirect("/error");
            }
        };
        obterClienteAtual();
    }, [params.id]);

return (
    <div className="lat-prod-all">

        <h1>Consulta Cliente</h1>

        <table>
            <thead>
                <tr>    
                    <th>`Nome: ${cliente.NM_CLIENTE}`</th>
                </tr>
            </thead>
            <tbody>
                <tr key={cliente.id}><td>{cliente.NM_CLIENTE}</td></tr>
                <tr key={cliente.id}><td>{cliente.DT_DATA_NASCIMENTO}</td></tr>
                <tr key={cliente.id}><td>{cliente.NR_CNH}</td></tr>
                <tr key={cliente.id}><td>{cliente.NR_CPF}</td></tr>
                <tr key={cliente.id}><td>{cliente.NR_RG}</td></tr>
            </tbody>
            <tfoot>
                <tr>
                </tr>
            </tfoot>
        </table>

    </div>
    )
}
