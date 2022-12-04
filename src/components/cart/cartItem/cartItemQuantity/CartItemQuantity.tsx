import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../app/hooks/hooks";
import { ItemQuantity } from "../../../../app/type";
import styles from "./CartItemQuantity.module.scss";
import { updateItemQuantity } from "../CartSlice";
import CartItemSelect from "./CartItemSelect";
import CartItemInput from "./CartItemInput";
import { useEffect, useState } from "react";

const CartItemQuantity = ({ id, quantity }: ItemQuantity) => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (showInput) return;
    quantity >= 10 && setShowInput(true);
  }, [quantity]);

  return (
    <>
      {quantity < 10 && !showInput && (
        <CartItemSelect id={id} quantity={quantity} />
      )}
      {showInput && <CartItemInput id={id} quantity={quantity} />}
    </>
  );
};

export default CartItemQuantity;
