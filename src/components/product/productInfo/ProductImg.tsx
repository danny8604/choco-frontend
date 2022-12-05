import styles from "./ProductImg.module.scss";

interface ProductImgProps {
  imgA: string;
}

const ProductImg = ({ imgA }: ProductImgProps) => {
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }

  return (
    <div className={styles.productImg}>
      <img src={getImageUrl(imgA)} loading="lazy" alt="chair photo" />
    </div>
  );
};

export default ProductImg;
