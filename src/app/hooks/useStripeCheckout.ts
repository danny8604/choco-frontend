import axios from "axios";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const useStripeCheckout = () => {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const { userToken, login } = useAppSelector((state) => state.login);

  const stripeCardCheckout = async () => {
    if (login) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/stripe",
          {
            items: shoppingCart,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        window.location = response.data.url;
      } catch (err) {
        dispatch(
          openUtilModal({
            message: "stripe checkout failed, please try again later.",
          })
        );
      }
    }
  };
  return { stripeCardCheckout };
};

export default useStripeCheckout;
