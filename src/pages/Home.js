import { useState } from "react";
import { Navigate } from "react-router-dom";

import PopUp from "../components/UI/PopUp";

import styles from "./Home.module.css";

function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const country = localStorage.getItem("country");

  if (!country) {
    return <Navigate to="/select-country" />;
  }

  function showPopUpHandler() {
    setShowPopUp(true);
  }

  function nextQuarterHandler() {
    showPopUpHandler();
  }

  function hidePopUpHandler() {
    setShowPopUp(false);
  }

  function confirmPopupHandler() {
    setShowPopUp(false);
  }

  function cancelPopUpHandler() {
    setShowPopUp(false);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["contents"]}>
        <h1 className={styles["money"]}>$1K</h1>
        <div className={styles["sideBtnsContainer"]}>
          <button className={styles["financesBtn"]}></button>
          <button className={styles["policiesBtn"]}></button>
          <button className={styles["lawOrderBtn"]}></button>
          <button className={styles["cabBtn"]}></button>
          <button className={styles["sitBtn"]}></button>
          <button className={styles["secBtn"]}></button>
        </div>
        <button className={styles["nextQuarterBtn"]} onClick={nextQuarterHandler}>Next Quarter</button>
        <div className={styles["points"]}>
          <p>x64</p>
        </div>
      </div>

      {showPopUp && (
        <PopUp
          title="Are you sure?"
          confirmText="Yes"
          onConfirm={confirmPopupHandler}
          cancelText="No"
          onCancel={cancelPopUpHandler}
        >
          <p>Are you sure you want to end the quarter?</p>
        </PopUp>
      )}

      <div className={styles["policyContainer"]}>
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

export default Home;
