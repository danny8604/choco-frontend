import { useState } from "react";
import ArrowLeftBtn from "../button/ArrowLeftBtn";
import ArrowRightBtn from "../button/ArrowRight";
import Button from "../button/Button";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  perPage: number;
  pageMax: number;
  testHanlder?: () => void;
};

const Pagination = ({ perPage, pageMax, testHanlder }: PaginationProps) => {
  const [page, setPage] = useState(1);
  const pageVisited = perPage * page;
  const nextPage = () => setPage((page) => page + 1);
  const prevPage = () => setPage((page) => page - 1);

  return (
    <div className={styles.btnContainer}>
      {page !== 1 && <ArrowLeftBtn clickAciton={() => prevPage()} />}
      <div className={styles.pageBtnContainer}>
        {page === pageMax && page - 2 > 0 && (
          <Button btnMessage={page - 2} clickAciton={() => setPage(page - 2)} />
        )}
        {page !== 1 && (
          <Button btnMessage={page - 1} clickAciton={() => setPage(page - 1)} />
        )}
        <Button
          className={"active"}
          btnMessage={page}
          clickAciton={() => setPage(page)}
        />
        {page !== pageMax && (
          <Button btnMessage={page + 1} clickAciton={() => setPage(page + 1)} />
        )}
        {page == 1 && pageMax >= 3 && (
          <Button btnMessage={page + 2} clickAciton={() => setPage(page + 2)} />
        )}
      </div>
      {page !== pageMax && <ArrowRightBtn clickAciton={() => nextPage()} />}
    </div>
  );
};

export default Pagination;
