<h1 align="center">🚀 Teste de back-end para a Target Sistemas 🚀</h1>

# 📃 Descrição do Código

Este repositório contém uma série de exercícios de programação resolvidos em JavaScript, abordando conceitos fundamentais e lógicos

## ✏️ Primeiros passos

Primeiramente clone o projeto, logo em seguida entre na pasta do projeto e por final rode para ver os resultados no terminal, basta utilizar os seguintes comandos:

```bash
  git clone https://github.com/Jose-Murilo/challange-back-end-target-sistemas.git
  # after
  cd challange-back-end-target-sistemas
  # after
  npm start
  
```

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node..js
- JavaScript

# 🛢️ Banco de dados
1. Cliente
  - id_cliente (PK) * Identificador único do cliente.
  - razao_social * Nome ou razão social do cliente.
  - estado (FK) * Referência ao estado onde o cliente se encontra.

2. Telefone
  - id_telefone (PK) * Identificador único do telefone.
  - numero * Número de telefone.
  - tipo (FK) * Tipo do telefone (comercial, residencial, celular, etc.).
  - id_cliente (FK) * Referência ao cliente que possui o telefone.

3. TipoTelefone
  - id_tipo (PK) * Identificador único do tipo de telefone.
  - descricao * Descrição do tipo de telefone (ex: comercial, residencial).

4. Estado
  - sigla (PK) * Sigla do estado (ex: SP).
  - nome * Nome completo do estado.

# Relacionamentos na tabela
`Cliente e Telefone`: Um cliente pode ter muitos telefones, então há um relacionamento de um-para-muitos entre Cliente e Telefone. (id_cliente em Telefone é FK referenciando id_cliente em Cliente)

`Telefone e TipoTelefone`: Cada telefone tem um tipo, então há um relacionamento de muitos-para-um entre Telefone e TipoTelefone. (tipo em Telefone é FK referenciando id_tipo em TipoTelefone)

`Cliente e Estado`: Cada cliente está localizado em um estado, então há um relacionamento de muitos-para-um entre Cliente e Estado. (estado em Cliente é FK referenciando sigla em Estado)
