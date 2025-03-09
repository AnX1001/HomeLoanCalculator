import { useState } from "react";
import { Link } from "react-router-dom";
import LoginFormModal from "./LoginModalForm";
import style from "./header.module.scss";
import { useAuth } from "../firebase/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();



  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
      });
  };


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
            <Link to={"/finansdata"}>Finansdata</Link>
          </li>
          <li>
            <Link to={"/minside"}>Min side</Link>
          </li>
          <li>
            <button className={style.loginButton} onClick={!user ? () => setOpen((prevState) => !prevState) : handleSignOut}>
              {user ? "🔓 Logg ut" : "🔒 Logg på"}
            </button>
          <LoginFormModal setOpen={setOpen} open={open} />  
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
