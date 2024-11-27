
import styles from "./advisors.module.scss";

function Advisors() {
    return (
        <>
            <details name="radgivere">
        <summary  className={styles.summary} >Dine personlige rådgivere</summary>
        <ul  className={styles.advisorsList}  >
          <li>Donald Duck</li>
          <li>Tlf: 555-0555</li>
        </ul>
      </details>
      
    
      
        
        </>
    
    )
}

export default Advisors;