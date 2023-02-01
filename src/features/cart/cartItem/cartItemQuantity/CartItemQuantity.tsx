import { ItemQuantity } from "../../../../app/type";
import styles from "./CartItemQuantity.module.scss";
import CartItemSelect from "./CartItemSelect";
import CartItemInput from "./CartItemInput";
import { useEffect, useState } from "react";

const CartItemQuantity = ({ _id, productName, quantity }: ItemQuantity) => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (showInput) return;
    quantity >= 10 && setShowInput(true);
  }, [quantity]);
  return (
    <>
      {quantity < 10 && !showInput && (
        <CartItemSelect
          _id={_id}
          productName={productName}
          quantity={quantity}
        />
      )}
      {showInput && (
        <CartItemInput
          _id={_id}
          productName={productName}
          quantity={quantity}
        />
      )}
    </>
  );
};

export default CartItemQuantity;
