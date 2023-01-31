import styles from "./SideModal.module.scss";

type SideModalProps = {
  children: JSX.Element;
  show: boolean;
};

const SideModal = ({ children, show }: SideModalProps) => {
  return (
    <section className={`${styles.sideModal}   ${show && styles.active}`}>
      {children}
    </section>
  );
};

export default SideModal;
