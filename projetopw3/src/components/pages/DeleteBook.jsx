import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteBook() {

    const {cod_livro} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/excluirLivro/${cod_livro}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/ListBooks',{state:'LIVRO EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <div>
        </div>
    )
}

    export default DeleteBook