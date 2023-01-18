import { useRef, useState } from "react";
import styles from "./OrderSearch.module.scss";
import searchSvgIcon from "../../assets/svg/search-outline.svg";
import axios from "axios";
import { Order } from "../../app/type";
import OrderInfo from "./OrderInfo";

const OrderSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResult, setSearchResult] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please enter your order number.");

  const searchHandler = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/getOrders/${inputRef.current?.value}`
      );

      if (!response.data.order) {
        setMessage(
          "Can't find order for the provided order number, please check your number and try again later."
        );
      }

      setSearchResult(response.data.order);
    } catch (err) {
      setMessage(
        "Can't find order for the provided order number, please check your number and try again later."
      );
      setSearchResult(null);
    }
    setLoading(false);
  };

  return (
    <section className={styles.orderContainer}>
      <div className={styles.searchContainer}>
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
      <div>
        {!searchResult && (
          <div className={styles.messageContaiter}>
            {!loading && <h5>{message}</h5>}
            {loading && <h5>Loading...</h5>}
          </div>
        )}
        {searchResult && (
          <OrderInfo
            order={searchResult}
            orderNumber={inputRef.current?.value || ""}
          />
        )}
      </div>
    </section>
  );
};

export default OrderSearch;
