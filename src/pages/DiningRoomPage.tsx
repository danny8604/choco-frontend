import ShopList from "../components/shop/ShopList";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/ui/loading/Loading";
import { ScrollRestoration } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";
const DiningRoomPage = () => {
  const { categoryChairsData } = useChairsData({
    category: "diningRoom",
  });

  return (
    <main>
      {!categoryChairsData && <Loading />}
      {categoryChairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"DINING ROOM CHAIR"} category={"diningRoom"} />
          <ShopList props={categoryChairsData} />
        </>
      )}
    </main>
  );
};

export default DiningRoomPage;
