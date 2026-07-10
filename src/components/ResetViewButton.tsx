type Props = {
  onClick: () => void;
};

function ResetViewButton({ onClick }: Props) {
  return (
    <button
      className="reset-view-button"
      onClick={onClick}
      title="Reset View"
    >
      🎯
    </button>
  );
}

export default ResetViewButton;