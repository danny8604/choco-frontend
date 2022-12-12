import styles from "./InfoItemQuantity.module.scss";

type InfoItemQuantityProps = {
  quantity: number;
};

const InfoItemQuantity = ({ quantity }: InfoItemQuantityProps) => {
  return (
    <div className={styles.infoItemQuantity}>
      <p>Quantity : {quantity}</p>
    </div>
  );
};

export default InfoItemQuantity;
