import ShopList from "../components/shop/ShopList";
import DiningRoomTop from "../components/diningRoom/DiningRoomTop";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const DiningRoomPage = () => {
  const { chairsData } = useChairsData("category/diningRoom");
  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <DiningRoomTop />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default DiningRoomPage;
