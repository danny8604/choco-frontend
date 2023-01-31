import React, { useRef } from "react";
import styles from "./OrderSearch.module.scss";
import searchSvgIcon from "../../assets/svg/search-outline.svg";

import OrderInfo from "./OrderInfo";
import useSearch from "../../app/hooks/useSearch";

const OrderSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { loading, searchResult, message, fetchSearchResult } = useSearch();

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSearchResult(inputRef.current?.value);
  };

  return (
    <section className={styles.orderContainer}>
      <form className={styles.searchContainer} onSubmit={searchHandler}>
        <input
          ref={inputRef}
          type="text"
          id="text"
          placeholder="ORDER NUMBER"
        />
        <button type="submit" disabled={loading}>
          <img
            src={searchSvgIcon}
            className={styles.Icon}
            alt="searchSvgIcon"
          />
        </button>
      </form>
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
