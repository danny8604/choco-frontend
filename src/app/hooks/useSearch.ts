import { useState } from "react";
import { getSearchOrder } from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import { Order } from "../type";

const useSearch = () => {
  const [searchResult, setSearchResult] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please enter your order number.");

  const fetchSearchResult = async (searchInput: string | undefined) => {
    setLoading(true);

    getSearchOrder(searchInput)
      .then((data) => {
        data
          ? setSearchResult(data)
          : setMessage(
              "Can't find order for the provided order number, please check your number and try again later."
            );
        setLoading(false);
      })
      .catch((err) => {
        setMessage("can't find the order for the provider order number.");
        setSearchResult(null);
        setLoading(false);
      });
  };

  return { loading, searchResult, message, fetchSearchResult };
};

export default useSearch;
