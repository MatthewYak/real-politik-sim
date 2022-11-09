import styles from "./PopUp.module.css";

function PopUp(props) {
  return (
    <div className={styles["modalContainer"]}>
      <div className={styles["modal"]}>
        <h1 className={styles["title"]}>{props.title}</h1>
        {props.children}
        <div className={styles["btnsContainer"]}>
          {props.onCancel && (
            <button className={styles["cancelBtn"]} onClick={props.onCancel}>
              {props.cancelText}
            </button>
          )}
          {props.onConfirm && (
            <button onClick={props.onConfirm} className={styles["confirmBtn"]}>
              {props.confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default PopUp;
