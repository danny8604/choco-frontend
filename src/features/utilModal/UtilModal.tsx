import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./UtilModal.module.scss";
import ReactDOM from "react-dom";

type UtilModalPorps = {
  modalClass: string;
  show: boolean;
  children: JSX.Element;
};

const UtilModal = (props: UtilModalPorps) => {
  const nodeRef = useRef(null);
  return ReactDOM.createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={300}
      classNames={{
        enter: styles.modalEnter,
        enterActive: styles.modalEnterActive,
        exit: styles.modalExit,
        exitActive: styles.modalExitActive,
      }}
    >
      <div
        ref={nodeRef}
        className={`${styles.modal} ${styles[props.modalClass]}`}
      >
        {props.children}
      </div>
    </CSSTransition>,
    document.getElementById("utilModal")!
  );
};

export default UtilModal;
