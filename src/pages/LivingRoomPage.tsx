import useChairsData from "../app/hooks/useChairsData";
import Error from "../components/error/Error";
import LivingRoomTop from "../components/livingRoom/LivingRoomTop";
import Loading from "../components/loading/Loading";
import ShopList from "../components/shop/ShopList";

const LivingRoomPage = () => {
  const { data, error } = useChairsData("/category/livingRoom");

  return (
    <main>
      {!data && !error && <Loading />}
      {data && !error && (
        <>
          <LivingRoomTop />
          <ShopList props={data.products} />
        </>
      )}
      {error && <Error />}
    </main>
  );
};

export default LivingRoomPage;
