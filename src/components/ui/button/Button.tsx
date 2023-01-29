import styles from "./Button.module.scss";

type ButtonProps = {
  btnMessage: string | number;
  className?: string;
  small?: boolean;
  whiteBG?: boolean;
  clickAciton?: () => void;
};

const Button = ({
  clickAciton,
  btnMessage,
  className,
  small,
  whiteBG,
}: ButtonProps) => {
  return (
    <button
      onClick={() => clickAciton && clickAciton()}
      className={`${styles.button} ${small && styles.small} ${
        className && styles[className]
      } ${whiteBG && styles.whiteBG}`}
    >
      {btnMessage}
    </button>
  );
};

export default Button;
