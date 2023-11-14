# Gerenciamento de Clientes


Em nossa aplicação possuímos uma série de recursos de gerenciamento, um deles é a área de
gerenciamento de clientes onde na página principal "homeadmin", podemos visualizar uma
lista dos clientes existentes. A partir dessa página, é possível acessar a página de "cadastro"
para adicionar novos clientes, a página de "consulta" para visualizar dados específicos de um
cliente, assim como as páginas de "exclusão" e "edição" para remover ou modificar
informações de clientes existentes.
---
Essas páginas são alimentadas por APIs, sendo uma delas desenvolvida em Python e a outra
em Java. As APIs fornecem funcionalidades específicas para cada operação, GET, UPDATE, POST,
DELETE . As APIs oferecem uma integração das páginas web com o banco de dados Oracle.
Detalhes das Páginas:
Página homeadmin:
Api (Python) METODOS GET + WHERE
Página cadastro:
Api (Python) METODOS INSERT
Página consulta:
Api (Java) METODOS GET
Página atualizacao:
Api (Java + Python) METODOS GET + UPPDATE
Página delete:
Api (Java + Python) METODOS GET + DELETE
---


























This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
