import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import styles from "./CartItemQuantity.module.scss";
import { updateItemQuantity } from "../CartSlice";
import CartItemSelect from "./CartItemSelect";
import CartItemInput from "./CartItemInput";

const CartItemQuantity = ({ id, quantity }: ItemQuantity) => {
  return (
    <>
      {quantity < 10 && <CartItemSelect id={id} quantity={quantity} />}
      {quantity >= 10 && <CartItemInput id={id} quantity={quantity} />}
    </>
  );
};

export default CartItemQuantity;
