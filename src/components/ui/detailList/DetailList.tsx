import styles from "./DetailList.module.scss";
import { ArrowDown } from "../icon/Arrow";
import { useState } from "react";

type DetailsListProps = {
  title: string;
  descriptTitle: string;
  descript: string;
};

const DetailList = ({ title, descriptTitle, descript }: DetailsListProps) => {
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

export default DetailList;
