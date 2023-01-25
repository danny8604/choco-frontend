import { Order } from "../../app/type";
import InfoItem from "../../features/infoModal/InfoItem";
import Card from "../ui/card/Card";
import usDollar from "../util/usDollar";
import styles from "./OrderInfo.module.scss";

type OrderInfoProps = {
  order: Order;
  orderNumber: string;
};

const OrderInfo = ({ order, orderNumber }: OrderInfoProps) => {
  const usdPrice = usDollar(order.totalPrice);

  return (
    <Card>
      <>
        <div>
          {order.products.map((item) => (
            <InfoItem
              key={item.productId._id}
              products={item.productId}
              quantity={item.quantity}
              showTotalPrice
              showQuantity
              showBorderBottom
            />
          ))}
        </div>

        <div className={styles.orderInfor}>
          <div>
            <p>TOTAL PRICE : {usdPrice}</p>
          </div>
          <div>
            <p>ORDER DATE : {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <p>TOTAL QUANTITY : {order.totalQuantity}</p>
          </div>
          <div>
            <p>ORDER : {orderNumber}</p>
          </div>
        </div>
      </>
    </Card>
  );
};

export default OrderInfo;
