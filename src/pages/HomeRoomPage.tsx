import ShopList from "../components/shop/ShopList";
import HomeRoomTop from "../components/homeRoom/HomeRoomTop";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const HomeRoomPage = () => {
  const { chairsData } = useChairsData("category/homeRoom");

  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <HomeRoomTop />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default HomeRoomPage;
