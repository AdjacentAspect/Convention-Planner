import type { CSSProperties } from "react";
import type { Booth } from "../types/models";

type Props = {
  booths: Booth[];
  onBoothClick: (table: string) => void;
};

type BoothComponentProps = {
  booth: Booth;
  onClick: (table: string) => void;
};

function BoothComponent({ booth, onClick }: BoothComponentProps) {
  const style: CSSProperties = {
    position: "absolute",
    left: `${booth.bounds.x}%`,
    top: `${booth.bounds.y}%`,
    width: `${booth.bounds.width}%`,
    height: `${booth.bounds.height}%`,
    background: booth.visited ? "black" : booth.priority,
    border: "2px solid white",
    opacity: 0.75,
    cursor: "pointer",
    zIndex: 1000,
  };

  return (
    <div
      style={style}
      onClick={() => onClick(booth.table)}
    />
  );
}

function BoothOverlay({ booths, onBoothClick }: Props) {
  return (
    <>
      {booths.map((booth) => (
        <BoothComponent
          key={booth.id}
          booth={booth}
          onClick={onBoothClick}
        />
      ))}
    </>
  );
}

export default BoothOverlay;