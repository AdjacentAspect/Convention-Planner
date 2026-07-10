import type { CSSProperties } from "react";

import type { Booth } from "../types/models";
import { priorityColours } from "../utils/priority";

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
      ? "rgba(0,0,0,.65)"
      : window.innerWidth < 700
          ? "rgba(255,255,255,.12)"
          : "rgba(255,255,255,.22)",

    border: `${
      window.innerWidth < 700 ? 1 : 3
    }px solid ${priorityColours[booth.priority]}`,

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