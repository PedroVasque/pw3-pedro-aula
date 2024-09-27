import React from "react";
import { useState, useEffect } from "react";

import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";
const CreateBooks = () => {

    /* define o state de dados da categorias */ 
    const [categorias, setCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
      setBook({...book, [event.target.name] : event.target.value});
      console.log(book)
    }
    /* RECUPERA OS DADOS DE CATEGORIAS DA APIREST */ 
useEffect(() => {
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
            setCategorias(data.data)
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
  });
    
   /* FUNÇÃO DE SUBMIT */
     function submit(event) {
      event.preventDefault();
      createBook(book);
    }

    
    
  return (
    <section className={style.create_book_container}>
      <h1>Cadastrar Livro</h1>

      <form submit={submit}>

      <Input
        type="text"
        name="nome_livro"
        placeholder="Digite o nome do seu livro"
        text="Título do Livro"
        handlerChangeBook={handlerChangeBook}
      />

      <Input
        type="text"
        name="autor_livro"
        placeholder="Digite o nome do autor do livro"
        text="Nome do autor"
        handlerChangeBook={handlerChangeBook}
      />

      <Input
        type="text"
        name="descricao_livro"
        placeholder="Digite a descrição do livro"
        text="Descrição do livro"
        handlerChangeBook={handlerChangeBook}
      />

      <Select 
        name="categoria"
        text="Escolha uma categoria de livro"  
        options={categorias}  
      />

      <Button 
        rotulo="Cadastrar Livro"
       />

    </form>
    </section>
  );
};

export default CreateBooks;
