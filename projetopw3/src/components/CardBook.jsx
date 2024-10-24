import style from "./CardBook.module.css"
import Button from "./Button"

const CardBooks = ({titulo, autor, imagem, cod_livro})=>{
    
    return(
        <div className = {style.bookCard}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt={titulo} title={{titulo}}/>
            <div>
                <Button label= 'Detalhes' router='/DetailBook/' cod_livro={cod_livro}/>
            </div>

        </div>
    )

}

export default CardBooks 
