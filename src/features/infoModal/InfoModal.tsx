import { useAppSelector } from "../../app/hooks/hooks";
import usDollar from "../../components/util/usDollar";
import InfoItem from "./InfoItem";
import styles from "./InfoModal.module.scss";

const InfoModal = () => {
  const {
    orderItems,
    orderItemsTotalPrice,
    orderItemsTotalQuantity,
    orderNumber,
    orderName,
    orderAddress,
    orderPhone,
    orderDate,
  } = useAppSelector((state) => state.cart);
  const { infoModalIsOpen } = useAppSelector((state) => state.infoModal);
  const totalPrice = usDollar(orderItemsTotalPrice);
  const date = orderDate && new Date(orderDate).toLocaleDateString();

  return (
    <div
      className={`${styles.infoModal} ${
        infoModalIsOpen && styles.infoModalActive
      }`}
    >
      <div className={styles.infoContainer}>
        <h4>Your order information</h4>
        <ul>
          <li>Name : {orderName}</li>
          <li>Address : {orderAddress}</li>
          <li>Phone : {orderPhone}</li>
          <li>Total Quantity : {orderItemsTotalQuantity}</li>
          <li>Total Price : {totalPrice}</li>
          <li>Order : {orderNumber}</li>
          <li>Order Date : {date}</li>
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
