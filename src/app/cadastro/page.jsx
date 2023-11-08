import React from 'react'

export default function Cadastro() {
  return (
    <>
    <h1>Cadastro</h1>

    <div>
        <form action="">
            <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name='nome'id='idNome' placeholder='Digite seu Nome Completo:'/>
                </div>
           
            <div>
            <label htmlFor="idDataNascimento">Data de Nascimento</label>
                <input type="date" name='dataNascimento'id='idDataNascimento' placeholder='Digite sua data de nascimento:'/>
                
            </div>
            <div>
                <label htmlFor="idCPF">CPF/CNPJ</label>
                <input type="text" name='cpf'id='idCPF' placeholder='Digite seu CPF/CNPJ:'/>
                

            </div>
            <div>
                <label htmlFor="idCPF">CNH</label>
                <input type="text" name='cNH'id='idCNH' placeholder='Digite sua CNH:'/>
                

            </div>
            <div>
                <label htmlFor="idRG">RG</label>
                <input type="text" name='RG'id='idRG' placeholder='Digite seu Rg:'/>
                

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
