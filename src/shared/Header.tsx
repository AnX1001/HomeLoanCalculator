import { Link } from "react-router-dom";
import style from "./header.module.scss";

function Header() {
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
