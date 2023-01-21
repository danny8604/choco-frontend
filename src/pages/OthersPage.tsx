import ShopList from "../components/shop/ShopList";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import { ScrollRestoration } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";

const OthersPage = () => {
  const { chairsData } = useChairsData("category/others");
  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"OTHERS ROOM CHAIR"} category={"othersRoom"} />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default OthersPage;
