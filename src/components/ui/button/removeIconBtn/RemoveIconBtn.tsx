import removeIcon from "../../../../assets/svg/close-outline.svg";

type RemoveBtnProps = {
  onClick(): void;
  isLoading: boolean;
};
const RemoveBtn = ({ onClick, isLoading }: RemoveBtnProps) => {
  return (
    <button onClick={() => onClick()} disabled={isLoading}>
      <img src={removeIcon} />
    </button>
  );
};

export default RemoveBtn;
