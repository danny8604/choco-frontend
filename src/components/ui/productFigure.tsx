import styles from "./productFigure.module.scss";

interface productFigureProps {
  img: string;
  id: string;
}

const productFigure = ({ img, id }: productFigureProps) => {
  console.log(img);
  return (
    <figure className={styles.figure}>
      <div className={styles.weapper}>
        <img src={img} />
        <figcaption>{id}</figcaption>
        <button className={styles.button}>EXPLORE</button>
      </div>
    </figure>
  );
};

export default productFigure;
