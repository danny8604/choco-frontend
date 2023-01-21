import axios from "axios";
import { useEffect, useState } from "react";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { ProductsType } from "../type";
import { useAppDispatch } from "./hooks";

const useChairsData = (product: string | undefined) => {
  const [chairsData, setChairsData] = useState<any>();
  const [pathChairsData, setPathChairsData] = useState<any>();
  const [allChairsData, setAllChairsData] = useState<ProductsType[]>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchDiningRoomData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${product}`
        );
        setPathChairsData(response.data);
        setChairsData(response.data.products);
      } catch (err) {
        dispatch(openUtilModal({ message: "Fetch chair data failed." }));
      }
    };
    fetchDiningRoomData();
  }, [product]);

  useEffect(() => {
    const fetchDiningRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/`);

        setAllChairsData(response.data.products);
      } catch (err) {
        dispatch(openUtilModal({ message: "Fetch chair data failed." }));
      }
    };
    fetchDiningRoomData();
  }, []);

  return { chairsData, allChairsData, pathChairsData };
};

export default useChairsData;
