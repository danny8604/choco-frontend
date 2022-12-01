import styles from "./ProductDetailsImg.module.scss";

interface ProductDetailsImgProps {
  img: { imgA: string; imgB: string; imgC: string; imgD: string; imgE: string };
}

const ProductDetailsImg = ({ img }: ProductDetailsImgProps) => {
  // Dynamic URL
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }

  return (
    <div className={styles.productImg}>
      <img src={getImageUrl(img.imgB)} />
      <img src={getImageUrl(img.imgC)} />
      <img src={getImageUrl(img.imgD)} />
      <img src={getImageUrl(img.imgE)} />
    </div>
  );
};

export default ProductDetailsImg;
