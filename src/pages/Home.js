import { Navigate } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  if (!localStorage.getItem("country")) {
    return <Navigate to="/select-country" />;
  } else {
    return (
      <div>
        <h1 className={styles['money']}>$1K</h1>
        <div className={styles["sideBtnsContainer"]}>
          <button className={styles["financesBtn"]}>$</button>
          <button className={styles["policiesBtn"]}>All Policies</button>
          <button className={styles["lawOrderBtn"]}>Law And Order</button>
          <button className={styles["cabBtn"]}>Cabnet</button>
          <button className={styles["sitBtn"]}>Situations</button>
          <button className={styles["secBtn"]}>Security</button>
          <button className={styles["conBtn"]}>Congress</button>
        </div>
        <p className={styles["points"]}>x64</p>
        <div className={styles["foreignPoliciesContainer"]}></div>
        <div className={styles["taxPoliciesContainer"]}></div>
        <div className={styles["lawOrderPoliciesContainer"]}></div>
        <div className={styles["econTransPoliciesContainer"]}></div>
      </div>
    );
  }
}

export default Home;
