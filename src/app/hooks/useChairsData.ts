import { useEffect, useState } from "react";

const useChairsData = (product: string | undefined) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDiningRoomData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${product}`
        );
        if (!response.ok) {
          throw new Error("Fetch data failed.");
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchDiningRoomData();
  }, []);

  return { data, error };
};

export default useChairsData;
