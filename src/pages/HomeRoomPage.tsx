import ShopList from "../components/shop/ShopList";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/ui/loading/Loading";
import { ScrollRestoration } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";

const HomeRoomPage = () => {
  const { categoryChairsData } = useChairsData({
    category: "homeRoom",
  });

  return (
    <main>
      {!categoryChairsData && <Loading />}
      {categoryChairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"HOME ROOM CHAIR"} category={"homeRoom"} />
          <ShopList props={categoryChairsData} />
        </>
      )}
    </main>
  );
};

export default HomeRoomPage;
