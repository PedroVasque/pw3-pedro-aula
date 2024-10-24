import React from "react";
import style from "./ListBook.module.css";
import { useState, useEffect } from "react";
import BookCard from "../CardBooks";
import Container from "../layout/Container";
import ContainerBook from "../layout/ContainerBook"
import cavernas from "../../assets/livros/cavernas_aco.jpg"

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/listagemLivros", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("LIVROS: " + data.data);
        setBooks(data.data);
        console.log("STATE: " + books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <section className={style.list_book_container}>
        <h1>LIST BOOKS</h1>

        <ContainerBook>
          {books.map((book) => (
            // console.log(book.nome_livro)
            <BookCard
              cod_livro={book.cod_livro}
              titulo={book.nome_livro}
              autor={book.autor_livro}
              imagem={cavernas}
              key={book.cod_livro}
            />
          ))}
        </ContainerBook>
      </section>
    </Container>
  );
};

export default ListBooks;
