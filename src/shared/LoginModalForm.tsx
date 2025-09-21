import { useState } from "react";
import useEscapeKey from "./useScapeKey";
import style from "./LoginModalForm.module.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseInitialized } from "../firebase/firebase";

interface LoginModalFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function LoginModalForm({ open, setOpen }: LoginModalFormProps) {
  const [emailError, setEmailError] = useState(false);
  useEscapeKey(() => setOpen(false), open);

  if (!firebaseInitialized) {
    console.warn(
      "Firebase environment variables are not set. Skipping Firebase initialization.",
    );
    return;
  }
  const auth = getAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email.includes("@")) {
      setEmailError(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        console.error("Login error:", error.code, error.message);
      });

    setOpen(false);
  };

  return (
    <dialog className={style.dialog} open={open}>
      <button onClick={() => setOpen(false)} className={style.closeIconButton}>
        &#x2716;
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-post</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          onChange={() => setEmailError(false)}
        />
        <p style={{ color: "red", fontSize: "small", marginTop: "-15px" }}>
          {emailError && "Vennligst oppgi gyldig email"}
        </p>
        <label htmlFor="password">Passord</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="current-passord"
        />
        <button
          onClick={() => handleSubmit}
          className={style.loginButton}
          type="submit"
        >
          Logg inn
        </button>
      </form>
    </dialog>
  );
}

export default LoginModalForm;
