import ShopList from "../components/shop/ShopList";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/ui/loading/Loading";
import { ScrollRestoration } from "react-router-dom";
import TopPage from "../components/ui/topPage/TopPage";

const OthersPage = () => {
  const { categoryChairsData } = useChairsData({
    category: "others",
  });
  return (
    <main>
      {!categoryChairsData && <Loading />}
      {categoryChairsData && (
        <>
          <ScrollRestoration />
          <TopPage title={"OTHERS ROOM CHAIR"} category={"othersRoom"} />
          <ShopList props={categoryChairsData} />
        </>
      )}
    </main>
  );
};

export default OthersPage;
