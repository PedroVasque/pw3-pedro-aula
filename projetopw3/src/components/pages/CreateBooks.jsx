import React from "react";
import { useState, useEffect } from "react";

import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";
const CreateBooks = () => {

    /* RECUPERA OS DADOS DE CATEGORIAS DA APIREST */
    
useState(() => {
    fetch("http://localhost:5000/listagemCateorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    }).then(
       (resp) => 
        // console.log('RESPOSTA:' + resp)
            resp.json() 
    ).then(
        (data)=>{
            console.log('DATA:' + data.data[0].nome_categoria)
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
  });
    
    
    
  return (
    <section className={style.create_book_container}>
      <h1>Cadastrar Livro</h1>
      <Input
        type="text"
        name="txt_livro"
        placeholder="Digite o nome do seu livro"
        text="Título do Livro"
      />

      <Input
        type="text"
        name="txt_autor"
        placeholder="Digite o nome do autor do livro"
        text="Nome do autor"
      />

      <Input
        type="text"
        name="txt_desc_livro"
        placeholder="Digite a descrição do livro"
        text="Descrição do livro"
      />

      <Select name="categoria" text="Escolha uma categoria de livro" />
      <Button rotulo="Cadastrar Livro" />
    </section>
  );
};

export default CreateBooks;
