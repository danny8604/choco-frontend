import ShopList from "../components/shop/ShopList";
import DiningRoomTop from "../components/diningRoom/DiningRoomTop";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const DiningRoomPage = () => {
  const { data, error } = useChairsData("category/diningRoom");

  return (
    <main>
      {!data && !error && <Loading />}
      {data && !error && (
        <>
          <DiningRoomTop />
          <ShopList props={data.products} />
        </>
      )}
      {error && <Error />}
    </main>
  );
};

export default DiningRoomPage;
