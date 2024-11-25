import { useState } from "react";
import { Link } from "react-router-dom";
import LoginFormModal from "./LoginModalForm";
import style from "./header.module.scss";


function Header() {
  const [open, setOpen] = useState(false);

  

  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Hjem</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blogg</Link>
          </li>
          <li>
            <Link to={"/minside"}>Min side</Link>
          </li>
          <li>
            <button className={style.loginButton} onClick={() => setOpen((prevState) => !prevState)}>
              🔒 Logg på
            </button>
            <LoginFormModal setOpen={setOpen} open={open} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
