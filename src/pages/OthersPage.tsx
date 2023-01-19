import ShopList from "../components/shop/ShopList";
import OthersTop from "../components/others/OthersTop";
import useChairsData from "../app/hooks/useChairsData";
import Loading from "../components/loading/Loading";

const OthersPage = () => {
  const { chairsData } = useChairsData("category/others");
  return (
    <main>
      {!chairsData && <Loading />}
      {chairsData && (
        <>
          <OthersTop />
          <ShopList props={chairsData} />
        </>
      )}
    </main>
  );
};

export default OthersPage;
