import ShopList from "../components/shop/ShopList";
import OthersTop from "../components/others/OthersTop";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const OthersPage = () => {
  const { data, error } = useChairsData("/category/others");

  return (
    <main>
      {!data && !error && <Loading />}
      {data && !error && (
        <>
          <OthersTop />
          <ShopList props={data.products} />
        </>
      )}
      {error && <Error />}
    </main>
  );
};

export default OthersPage;
