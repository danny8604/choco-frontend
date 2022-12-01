import styles from "./ProductDetailsList.module.scss";
import { ArrowDown } from "../../ui/icon/Arrow";
import { useState } from "react";

type ProductDetailsListProps = {
  title: string;
  descriptTitle: string;
  descript: string;
};

const ProductDetailList = ({
  title,
  descriptTitle,
  descript,
}: ProductDetailsListProps) => {
  const [show, setShow] = useState(false);

  return (
    <li
      className={`${styles.detailsTextContainer}
        ${show && styles.detailsActive}`}
    >
      <button
        className={styles.detailsTextTitle}
        onClick={() => setShow(!show)}
      >
        <h5>{title}</h5>
        <ArrowDown />
      </button>
      <div className={styles.detailsMoreDescript}>
        <h6>{descriptTitle}</h6>
        <p>{descript}</p>
      </div>
    </li>
  );
};

export default ProductDetailList;
