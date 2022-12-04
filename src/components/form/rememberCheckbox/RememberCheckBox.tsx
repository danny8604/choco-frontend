import styles from "./RememberCheckBox.module.scss";

const RememberCheckBox = () => {
  return (
    <div className={styles.rememberCheck}>
      <input type="checkbox" name="remember" id="remember" />
      <label htmlFor="remember">REMEMBER EMAIL</label>
    </div>
  );
};

export default RememberCheckBox;
