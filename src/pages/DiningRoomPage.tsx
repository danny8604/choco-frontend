import ShopList from "../components/shop/ShopList";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import { ScrollRestoration } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";
const DiningRoomPage = () => {
  const { chairsData } = useChairsData("category/diningRoom");
  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"DINING ROOM CHAIR"} category={"diningRoom"} />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default DiningRoomPage;
