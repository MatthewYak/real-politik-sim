import { Navigate } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  if (!localStorage.getItem("country")) {
    return <Navigate to="/select-country" />;
  } else {
    return (
      <div>
        <h1 className={styles["money"]}>$1K</h1>
        <div className={styles["sideBtnsContainer"]}>
          <button className={styles["financesBtn"]}></button>
          <button className={styles["policiesBtn"]}></button>
          <button className={styles["lawOrderBtn"]}></button>
          <button className={styles["cabBtn"]}></button>
          <button className={styles["sitBtn"]}></button>
          <button className={styles["secBtn"]}></button>
        </div>
        <button className={styles["nextQuarterBtn"]}>Next Quarter</button>
        <div className={styles["points"]}>
          <p>x64</p>
        </div>
        <div className={styles['policyContainer']}>
          <div className={styles["foreignPoliciesContainer"]}>
            <h2>Foreign Policies</h2>
          </div>
          <div className={styles["taxPoliciesContainer"]}>
            <h2>Tax Policies</h2>
          </div>
          <div className={styles["lawOrderPoliciesContainer"]}>
            <h2>Law And Order Policies</h2>
          </div>
          <div className={styles["econTransPoliciesContainer"]}>
            <h2>Economic And Transportation Policies</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
