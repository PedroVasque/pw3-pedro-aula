import React from "react";
import { useState, useEffect } from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () => {
  const [categorias, setCategorias] = useState([]);

  const [book, setBook] = useState({});

  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  }

  function handleChangeCategory(event) {
    setBook({...book, cod_categoria: event.target.value});
    console.log(book);
}

  function createBook(book) {
        
    console.log(JSON.stringify(book))

    fetch('http://localhost:5000/inserirLivro', {
            method:'POST',
            mode:'cors',
            headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*'
            },
            body: JSON.stringify(book)
    })
    .then(
            (resp)=>resp.json()
    )
    .then(
            (data)=>{
            console.log(data);
            // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
            }
    )
    .catch(
            (err)=>{ console.log(err) }
    )
}

  useEffect(() => {
    fetch("http://localhost:5000/listagemCateorias", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) =>
        // console.log("RESPOSTA: " + resp);
        resp.json()
      )
      .then((data) => setCategorias(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function submit(event) {
    event.preventDefault();
    createBook(book);
  }

  return (
    <section className={style.create_book_container}>
      <h1>CREATE BOOKS</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="nome_livro"
          placeholder="Digite o nome do seu livro aqui"
          text="Título do livro"
          handlerChangeBook={handlerChangeBook}
        />

        <Input
          type="text"
          name="autor_livro"
          placeholder="Digite o nome do autor"
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
          handlerChangeCategory={handleChangeCategory}
        />

        <Button rotulo="Cadastrar Livro" />
      </form>
    </section>
  );
};

export default CreateBooks;
