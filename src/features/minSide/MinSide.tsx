import Illustration from "../home/loanInfo/Illustration";
import styles from "./minSide.module.scss";
import Support from "../../assets/images/support.svg";
import Advisors from "./Advisors";
import { getAuth } from "firebase/auth";

function MinSide() {
  const auth = getAuth();

  console.log(auth?.currentUser);
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h1>Hei!</h1>
        <h2 style={{ width: "fit-content" }}>
          Du er nå innlogget som: {auth.currentUser?.email}
        </h2>
        <Illustration src={Support} alt="Bilde av spare person"></Illustration>
        <h2>
          Som kunde hos oss, får du tildelt din egen rådgiver som bistår deg med
          råd og hjelp 24 timer i døgnet. For mer informasjon, se under.
        </h2>
        <Advisors />
        <h3>Lorem Ipsum dolor sit</h3>

      
        <p>
          Paragrahp Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum nemo molestias rem culpa excepturi asperiores pariatur ab illum
          adipisci facilis molestiae distinctio ad in officia, tenetur
          reprehenderit, dolores non aut.e
        </p>

        <p>
          Paragrahp Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum nemo molestias rem culpa excepturi asperiores pariatur ab illum
          adipisci facilis molestiae distinctio ad in officia, tenetur
          reprehenderit, dolores non aut.e
        </p>
      </div>
    </div>
  );
}

export default MinSide;
