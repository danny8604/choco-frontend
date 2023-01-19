import axios from "axios";
import { useState } from "react";
import { Order } from "../type";

const useSearch = () => {
  const [searchResult, setSearchResult] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please enter your order number.");
  const fetchSearchResult = async (searchInput: string | undefined) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/getOrders/${searchInput}`
      );

      if (!response.data.order) {
        setMessage(
          "Can't find order for the provided order number, please check your number and try again later."
        );
      }

      setSearchResult(response.data.order);
    } catch (err) {
      setMessage(
        "Can't find order for the provided order number, please check your number and try again later."
      );
      setSearchResult(null);
    }
    setLoading(false);
  };
  return { loading, searchResult, message, fetchSearchResult };
};

export default useSearch;
