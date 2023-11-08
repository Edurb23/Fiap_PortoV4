import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    <>
    <h1>Login</h1>

    <div>
        <form action="">
            <div>
                <label htmlFor="idEmail">Email</label>
                <input type="email" name='email'id='idEmail' placeholder='Digite seu email' />
            </div>
            <div>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA:" />
            </div>
            <div>
                <Link href="/">esqueci minha senha</Link>
            </div>
            <div>
                <Link href="/cadastro"><button>Criar Conta</button></Link>
                
                <button>Login</button>
            </div>
        </form>
    </div>
    </>
  )
}
