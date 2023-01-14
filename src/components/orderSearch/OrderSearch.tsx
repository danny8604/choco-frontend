import { useRef, useState } from "react";
import styles from "./OrderSearch.module.scss";
import searchSvgIcon from "../../assets/svg/search-outline.svg";
import axios from "axios";
import InfoItem from "../../features/infoModal/InfoItem";
import { ShoppingCartItem } from "../../app/type";

const OrderSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResult, setSearchResult] = useState<any>(null);
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please enter your order number.");

  const searchHandler = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/getOrders/${inputRef.current?.value}`
      );
      const TotalQuantity = response.data.order.products.reduce((acc, cur) => {
        return (acc += cur.quantity);
      }, 0);
      const TotalPrice = response.data.order.products.reduce((acc, cur) => {
        return (acc += cur.productId.price * cur.quantity);
      }, 0);

      setPrice(TotalPrice);
      setQuantity(TotalQuantity);
      setSearchResult(response.data.order);
    } catch (err) {
      console.log(err);
      setSearchResult(null);
      setMessage(
        "Can't find this order for the provided order number, please check your number and try again later."
      );
    }

    setLoading(false);
  };

  return (
    <section className={styles.orderContainer}>
      <div>
        <input
          ref={inputRef}
          type="text"
          id="text"
          placeholder="ORDER NUMBER"
        />
        <button onClick={() => searchHandler()} disabled={loading}>
          <img src={searchSvgIcon} className={styles.Icon} alt="rwar" />
        </button>
      </div>
      {message && !searchResult && (
        <div className={styles.messageContaiter}>
          <h5>{message}</h5>
        </div>
      )}
      <div className={styles.infoContainer}>
        {searchResult &&
          searchResult.products.map((item) => (
            <InfoItem
              key={item.productId._id}
              productId={item.productId}
              quantity={item.quantity}
            />
          ))}
        {searchResult && (
          <div className={styles.orderInfor}>
            <div>
              <p>TOTAL PRICE: ${price}</p>
            </div>
            <div>
              <p>TOTAL QUANTITY: {quantity}</p>
            </div>
            <div>
              <p>
                ORDER DATE: {new Date(searchResult.createdAt).toDateString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSearch;
