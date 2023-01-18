import styles from "./Button.module.scss";

type ButtonProps = {
  btnMessage: string | number;
  className?: string;
  clickAciton: () => void;
};

const Button = ({ clickAciton, btnMessage, className }: ButtonProps) => {
  return (
    <button
      onClick={() => clickAciton()}
      className={`${styles.button} ${className && styles[className]}`}
    >
      {btnMessage}
    </button>
  );
};

export default Button;
