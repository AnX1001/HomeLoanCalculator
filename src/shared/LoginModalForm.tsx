import style from "./LoginModalForm.module.scss";

interface LoginModalFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function LoginModalForm({ open, setOpen }: LoginModalFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <dialog className={style.dialog} open={open}>
      <button onClick={() => setOpen(false)} className={style.closeIconButton}>
        &#x2716;
      </button>
      <form>
        <label htmlFor="epost">E-post</label>
        <input type="text" id="epost" name="epost" required />
        <label htmlFor="password">Passord</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="current-passord"
        />
        <button
          onClick={handleSubmit}
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
