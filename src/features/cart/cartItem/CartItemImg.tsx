import styles from "./CartItemImg.module.scss";

type CartItemNameProps = {
  img: string;
};

const CartItemImg = ({ img }: CartItemNameProps) => {
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }
  return (
    <div className={styles.cartItemImg}>
      <img src={getImageUrl(img)} alt="chair photo" loading="lazy" />
    </div>
  );
};

export default CartItemImg;
