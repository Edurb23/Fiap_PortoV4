// "use client";
// import React from 'react'
// import { useState, useEffect} from 'react'
// import { Router } from 'next/router'
import { redirect } from "next/navigation";
import Link from "next/link";


export default async function Homeadmin() {
    let clientes;
    try{
        const responseget = await fetch(`http://127.0.0.1:5000/clientesearch/?datamin=25/02/1900&datamax=31/12/2050`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"   
            }
        });
        clientes = await responseget.json();
    }catch(error){
        console.log(error);
        redirect("/error");
    }

    const corrigindoData = (dataCompleta) => {
        const data = new Date(dataCompleta);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses são indexados de 0 a 11
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
      };



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
                                <Link href={`/consulta/${cliente.ID_CLIENTE}`}>Consulta</Link>
                                <Link href={`/atualizacao/${cliente.ID_CLIENTE}`}>Editar</Link>
                                <Link href={`/delete/${cliente.ID_CLIENTE}`}>Excluir</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">Total de Laticínios: {clientes.length}</td>
                    </tr>
                </tfoot>
            </table>
    
        </div>
    )
}
