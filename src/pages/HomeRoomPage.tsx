import ShopList from "../components/shop/ShopList";
import HomeRoomTop from "../components/homeRoom/HomeRoomTop";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const HomeRoomPage = () => {
  const { data, error } = useChairsData("/category/homeRoom");

  return (
    <main>
      {!data && !error && <Loading />}
      {data && !error && (
        <>
          <HomeRoomTop />
          <ShopList props={data.products} />
        </>
      )}
      {error && <Error />}
    </main>
  );
};

export default HomeRoomPage;
