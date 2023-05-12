import styles from "./styles.module.css"

export const halfassedchildren = () => {
  return (
    <div className={styles.donationrow}>
        <div className={styles.bigcircle}>
            <img src="/OBJECTS.svg" alt="Graphic Elements" />
        </div>
        <div className={styles.donationcolumn}>
            <p className={styles.heading}>GIVING THESE HALF ASSED CHILDREN DONATIONS SO THEY CAN STUDY AND FAIL</p>
            <div className={styles.donationrow}>
                <div className={styles.progressbar}>
                    <div className={styles.progress}></div>
                </div>
                <p className={styles.heading}>PKR 50,000/-</p>
            </div>
            <div className={styles.donationrow}>
                <button className={styles.donatebutton}>Donate Now
                    <img src="/heart.png" alt="Graphic Elements" />
                </button>
                <a>Read More &gt;&gt;</a>
            </div>
        </div>

    </div>
  )
}

export default halfassedchildren;
