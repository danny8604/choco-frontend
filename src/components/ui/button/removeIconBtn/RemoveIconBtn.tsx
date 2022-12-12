import removeIcon from "../../../../assets/svg/close-outline.svg";

type RemoveBtnProps = {
  onClick(): void;
};
const RemoveBtn = ({ onClick }: RemoveBtnProps) => {
  return (
    <button onClick={() => onClick()}>
      <img src={removeIcon} />
    </button>
  );
};

export default RemoveBtn;
