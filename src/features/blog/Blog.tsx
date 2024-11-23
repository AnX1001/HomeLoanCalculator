import Illustration from "../home/loanInfo/Illustration";
import styles from "./blog.module.scss";
import Budget from "../../assets/images/Budget.svg";

function Blog() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h1>Blog tittel ipsum, dolor sit amet</h1>
        <Illustration src={Budget} alt="Bilde av spare person"></Illustration>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit error facere ratione, animi odio delectus.
        </h2>
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

export default Blog;
