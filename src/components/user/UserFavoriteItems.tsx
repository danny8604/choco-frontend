import { useCallback, useRef, useState } from "react";
import useFavoritePage from "../../app/hooks/useFavoritePage";
import FavoriteItmes from "../ui/favoriteItem/FavoriteItems";
import Loading from "../ui/loading/Loading";
import styles from "./UserFavoriteItems.module.scss";

const UserFavoriteItems = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { hasNextPage, isloading, results } = useFavoritePage(pageNumber);
  const intObserver = useRef<any>();
  const lastPostRef = useCallback(
    (product: HTMLElement) => {
      if (isloading) return <Loading />;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (product) intObserver.current.observe(product);
    },
    [isloading, hasNextPage]
  );

  if (!Boolean(results.length)) {
    return (
      <div className={styles.text}>
        <p>You don't have any favorite items.</p>
      </div>
    );
  }

  const content = results.map((item, i) => {
    if (results.length === i + 1) {
      return (
        <FavoriteItmes
          ref={lastPostRef}
          key={item.productId._id}
          products={item.productId}
        />
      );
    }
    return <FavoriteItmes key={item.productId._id} products={item.productId} />;
  });

  return <div className={styles.favoriteItems}>{content}</div>;
};

export default UserFavoriteItems;
