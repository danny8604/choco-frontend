import useChairsData from "../app/hooks/useChairsData";
import Error from "../components/error/Error";
import LivingRoomTop from "../components/livingRoom/LivingRoomTop";
import Loading from "../components/loading/Loading";
import ShopList from "../components/shop/ShopList";

const LivingRoomPage = () => {
  const { chairsData } = useChairsData("category/livingRoom");

  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <LivingRoomTop />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default LivingRoomPage;
