import { ScrollRestoration } from "react-router-dom";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import ShopList from "../components/shop/ShopList";
import TopPage from "../components/ui/topPage/TopPage";

const LivingRoomPage = () => {
  const { chairsData } = useChairsData("category/livingRoom");

  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"LIVING ROOM CHAIR"} category={"livingRoom"} />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default LivingRoomPage;
