import style from './NavBar.module.css'

const NavBar = ()=>{

    return(
        <nav className={style.navbar}>

            <ul className={style.list}>
                <li className={style.item}>Home</li>
                <li className={style.item}>Cadastrar Livro</li>
                <li className={style.item}>Listar Livro</li>
            
            </ul>

        </nav>
    )
}

export default NavBar