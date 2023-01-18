import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import Button from "../../components/ui/button/Button";
import styles from "./CheckModal.module.scss";
import { closeCheckModal } from "./checkModalSlice";

type CheckModalProps = {
  okAction: () => void;
};

const CheckModal = ({ okAction }: CheckModalProps) => {
  const nodeRef = useRef(null);
  const dispatch = useAppDispatch();
  const { checkModalIsOpen, checkModalMessage } = useAppSelector(
    (state) => state.checkModal
  );

  const cancelHandler = () => {
    dispatch(closeCheckModal());
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => cancelHandler()}
        className={`${styles.backdrop} ${checkModalIsOpen && styles.active}`}
      ></div>
      <CSSTransition
        nodeRef={nodeRef}
        in={checkModalIsOpen}
        mountOnEnter
        unmountOnExit
        timeout={400}
        classNames={{
          enter: styles.modalEnter,
          enterActive: styles.modalEnterActive,
          exit: styles.modalExit,
          exitActive: styles.modalExitActive,
        }}
      >
        <div ref={nodeRef} className={`${styles.modal}`}>
          <div>
            <p>{checkModalMessage}</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button btnMessage="CANCEL" clickAciton={cancelHandler} />
            <Button btnMessage="OK" clickAciton={okAction} />
          </div>
        </div>
      </CSSTransition>
    </>,
    document.getElementById("checkModal")!
  );
};

export default CheckModal;
