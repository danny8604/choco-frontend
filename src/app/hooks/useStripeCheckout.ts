import { postStripeCardCheckout } from "../../api/axios";
import getErrorMessage from "../../components/util/getErrorMessage";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const useStripeCheckout = () => {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const { userToken, login } = useAppSelector((state) => state.login);

  const stripeCardCheckout = async () => {
    if (!(login && userToken && shoppingCart)) return;

    postStripeCardCheckout(shoppingCart, userToken)
      .then((data) => (window.location = data))
      .catch((err) =>
        dispatch(
          openUtilModal({
            message: getErrorMessage(err),
          })
        )
      );
  };

  return { stripeCardCheckout };
};

export default useStripeCheckout;
