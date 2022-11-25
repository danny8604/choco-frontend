import styles from "./Arrow.module.scss";

export const ArrowLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Chevron Back</title>
      <path
        className={styles.leftArrow}
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M328 112L184 256l144 144"
      />
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Chevron Forward</title>
      <path
        className={styles.rightArrow}
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M184 112l144 144-144 144"
      />
    </svg>
  );
};
