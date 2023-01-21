import styles from "./ProductDetailsImg.module.scss";

interface ProductDetailsImgProps {
  img: { imgA: string; imgB: string; imgC: string; imgD: string; imgE: string };
}

const ProductDetailsImg = ({ img }: ProductDetailsImgProps) => {
  function getImageUrl(name: string) {
    return new URL(`../../../assets/productImg/${name}.jpg`, import.meta.url)
      .href;
  }

  return (
    <div className={styles.productImg}>
      <div>
        <img src={getImageUrl(img.imgB)} />
      </div>
      <div>
        <img src={getImageUrl(img.imgC)} />
      </div>
      <div>
        <img src={getImageUrl(img.imgD)} />
      </div>
      <div>
        <img src={getImageUrl(img.imgE)} />
      </div>
    </div>
  );
};

export default ProductDetailsImg;
