import styles from "./Button.module.scss";

type ButtonProps = {
  btnMessage: string | number;
  className?: string;
  small?: boolean;
  whiteBG?: boolean;
  clickAciton: () => void;
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
      onClick={() => clickAciton()}
      className={`${styles.button} ${small && styles.small} ${
        whiteBG && styles.whiteBG
      }`}
    >
      {btnMessage}
    </button>
  );
};

export default Button;
