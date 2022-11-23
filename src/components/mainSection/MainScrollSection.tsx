import Figure from "../ui/productFigure";
import chair08 from "../../assets/chair-08.jpg";
import styles from "./MainScrollSection.module.scss";

const MainScrollSection = () => {
  const test = () => {
    console.log("MouseDown");
  };
  const test2 = () => {
    console.log("MouseLeave");
  };
  const test3 = () => {
    console.log("MouseUP");
  };
  const test4 = () => {
    console.log("MouseMove");
  };
  return (
    <section className={styles.scrollSection}>
      <div
        className={styles.wrapper}
        onMouseDown={test}
        onMouseLeave={test2}
        onMouseUp={test3}
        onMouseMove={test4}
      >
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
        <Figure img={chair08} id={"testes"} />
      </div>
    </section>
  );
};

export default MainScrollSection;
