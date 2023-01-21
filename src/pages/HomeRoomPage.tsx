import ShopList from "../components/shop/ShopList";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import { ScrollRestoration } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";

const HomeRoomPage = () => {
  const { chairsData } = useChairsData("category/homeRoom");

  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"HOME ROOM CHAIR"} category={"homeRoom"} />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default HomeRoomPage;
