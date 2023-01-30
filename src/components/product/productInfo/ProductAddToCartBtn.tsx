import styles from "./ProductAddToCartBtn.module.scss";
import { ProductsType } from "../../../app/type";
import useCart from "../../../app/hooks/useCart";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const { cartAddToCart, disabledBtn, isLoading } = useCart(props._id);

  const addToCartHandler = () => cartAddToCart(props._id);
  const activeBtn = disabledBtn || isLoading;

  return (
    <div className={`${styles.buttonContainer}`}>
      <button disabled={activeBtn} onClick={() => addToCartHandler()}>
        {disabledBtn ? "OUT OF STOCK" : "ADD TO CART"}
      </button>
    </div>
  );
};

export default ProductAddToCartBtn;
