import type { CSSProperties } from "react";
import type { Booth } from "../types/models";

type Props = {
  booths: Booth[];
  selectedBoothId?: string;
  onBoothClick: (booth: Booth) => void;
};

type BoothComponentProps = {
  booth: Booth;
  selected: boolean;
  onClick: (booth: Booth) => void;
};

function BoothComponent({
  booth,
  selected,
  onClick,
}: BoothComponentProps) {
  const style: CSSProperties = {
    position: "absolute",
    left: `${booth.bounds.x}%`,
    top: `${booth.bounds.y}%`,
    width: `${booth.bounds.width}%`,
    height: `${booth.bounds.height}%`,

    background: booth.visited
      ? "black"
      : booth.priority,

    border: selected
      ? "4px solid #ffffff"
      : "2px solid white",

    boxSizing: "border-box",

    opacity: selected ? 1 : 0.75,

    cursor: "pointer",

    zIndex: selected ? 1001 : 1000,

    transform: selected
      ? "scale(1.08)"
      : "scale(1)",

    transition:
      "all .15s ease",
  };

  return (
    <div
      style={style}
      onClick={() => onClick(booth)}
    />
  );
}

function BoothOverlay({
  booths,
  selectedBoothId,
  onBoothClick,
}: Props) {
  return (
    <>
      {booths.map((booth) => (
        <BoothComponent
          key={booth.id}
          booth={booth}
          selected={
            booth.id === selectedBoothId
          }
          onClick={onBoothClick}
        />
      ))}
    </>
  );
}

export default BoothOverlay;