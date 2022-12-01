import styles from "./ProductAddToCartBtn.module.scss";

const ProductAddToCartBtn = () => {
  const addToCartHandler = () => {
    console.log("🐧🐧");
  };
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => addToCartHandler()}>ADD TO CART</button>
    </div>
  );
};

export default ProductAddToCartBtn;
