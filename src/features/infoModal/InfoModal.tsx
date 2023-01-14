import { useAppSelector } from "../../app/hooks/hooks";

import InfoItem from "./InfoItem";
import styles from "./InfoModal.module.scss";

const InfoModal = () => {
  const { emailValue, addressValue, nameValue, phoneValue } = useAppSelector(
    (state) => state.formAuth
  );
  const { orderItems, orderItemsTotalPrice, orderItemsTotalQuantity } =
    useAppSelector((state) => state.cart);
  const { infoModalIsOpen } = useAppSelector((state) => state.infoModal);

  return (
    <div
      className={`${styles.infoModal} ${
        infoModalIsOpen && styles.infoModalActive
      }`}
    >
      <div className={styles.infoContainer}>
        <h4>Your order information</h4>
        <ul>
          <li>Email : {emailValue}</li>
          <li>Name : {nameValue}</li>
          <li>Address : {addressValue}</li>
          <li>Phone : {phoneValue}</li>
          <li>Total Quantity : {orderItemsTotalQuantity}</li>
          <li>Total Price : ${orderItemsTotalPrice}</li>
        </ul>
      </div>
      <div className={styles.infoItemContainer}>
        {orderItems.length > 0 &&
          orderItems.map((item) => (
            <InfoItem
              key={item.productId._id}
              productId={item.productId}
              quantity={item.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default InfoModal;
