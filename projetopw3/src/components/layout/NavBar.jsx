import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <Link to="/">
            <li className={style.item}>
              <img className={style.logo} src="./book.png"></img>
            </li>
          </Link>

          <Link to="/">
            <li className={style.item}>Home</li>
          </Link>

          <Link to="/createBook">
            <li className={style.item}>Cadastrar Livro</li>
          </Link>

          <Link to="/listBook">
            <li className={style.item}>Listar Livro</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
