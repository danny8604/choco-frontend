import { useState } from "react";
import { getSearchOrder } from "../../api/axios";
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
        setMessage(
          "Can't find order for the provided order number, please check your number and try again later."
        );
        setSearchResult(null);
        setLoading(false);
      });
  };

  return { loading, searchResult, message, fetchSearchResult };
};

export default useSearch;
