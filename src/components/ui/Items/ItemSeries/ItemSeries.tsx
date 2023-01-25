import styles from "./ItemSeries.module.scss";

type ItemSeriesProps = {
  series: string;
};

const ItemSeries = ({ series }: ItemSeriesProps) => {
  return (
    <div className={styles.itemSeries}>
      <p>Series : {series}</p>
    </div>
  );
};

export default ItemSeries;
