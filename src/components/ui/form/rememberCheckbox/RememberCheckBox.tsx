import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/hooks";
import { rememberEmail } from "../../../../features/login/loginSlice";
import styles from "./RememberCheckBox.module.scss";

const RememberCheckBox = () => {
  // const [remember, setRemember] = useState<HTMLInputElement>(false);
  const checkRef = useRef<HTMLInputElement>(null);
  const { isRememberEmail } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isRememberEmail) {
      checkRef.current!.checked = true;
    }
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(rememberEmail(e.target.checked));
  };

  return (
    <div className={styles.rememberCheck}>
      <input
        type="checkbox"
        name="remember"
        id="remember"
        ref={checkRef}
        onChange={changeHandler}
      />
      <label htmlFor="remember">REMEMBER EMAIL</label>
    </div>
  );
};

export default RememberCheckBox;
