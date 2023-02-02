import styles from "./Button.module.scss";

type ButtonProps = {
  btnMessage: string | number;
  className?: string;
  small?: boolean;
  whiteBG?: boolean;
  disable?: boolean;
  smallMarginTop?: boolean;
  clickAciton?: () => void;
};

const Button = ({
  clickAciton,
  btnMessage,
  className,
  small,
  disable,
  whiteBG,
  smallMarginTop,
}: ButtonProps) => {
  return (
    <button
      onClick={() => clickAciton && clickAciton()}
      className={`${styles.button} ${small && styles.small} ${
        className && styles[className]
      } ${whiteBG && styles.whiteBG}`}
      data-smallMarginTop={smallMarginTop}
      disabled={disable}
    >
      {btnMessage}
    </button>
  );
};

export default Button;
