import type { CSSProperties } from "react";

import type { Booth } from "../types/models";
import { priorityColours } from "../utils/priorityColours";

type Props = {
  booths: Booth[];
  onBoothClick: (booth: Booth) => void;
};

type BoothComponentProps = {
  booth: Booth;
  onClick: (booth: Booth) => void;
};

function BoothComponent({
  booth,
  onClick,
}: BoothComponentProps) {
  const style: CSSProperties = {
    position: "absolute",

    left: `${booth.bounds.x}%`,
    top: `${booth.bounds.y}%`,

    width: `${booth.bounds.width}%`,
    height: `${booth.bounds.height}%`,

    background: booth.visited
      ? "rgba(0,0,0,0.70)"
      : "rgba(255, 255, 255, 0.70)",

    border: `3px solid ${
      priorityColours[booth.priority]
    }`,

    boxSizing: "border-box",

    cursor: "pointer",

    zIndex: 1000,

    transition:
      "background .15s ease, border-color .15s ease",
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
  onBoothClick,
}: Props) {
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