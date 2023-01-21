import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./UtilModal.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { closeUtilModal } from "./utilModalSlice";

const UtilModal = () => {
  const nodeRef = useRef(null);
  const dispatch = useAppDispatch();
  const { utilModalIsOpen, utilModalMessage, isSucceed } = useAppSelector(
    (state) => state.utilModal
  );

  useEffect(() => {
    if (utilModalIsOpen) {
      const timer = setTimeout(() => {
        dispatch(closeUtilModal());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [utilModalIsOpen]);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={utilModalIsOpen}
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
        <div
          ref={nodeRef}
          className={`${styles.modal} ${isSucceed && styles.succeed}`}
        >
          <div>
            <p>{utilModalMessage}</p>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default UtilModal;
