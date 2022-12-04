import styles from "./ProductFigureImg.module.scss";

interface ProductFigureImgProps {
  imgA: string;
  descript: string;
}

const ProductFigureImg = ({ imgA, descript }: ProductFigureImgProps) => {
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }
  return (
    <div className={styles.imgContainer}>
      <img src={getImageUrl(imgA)} alt={descript} />
    </div>
  );
};

export default ProductFigureImg;
