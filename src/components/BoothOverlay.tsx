import type { CSSProperties } from "react";

import type { Booth } from "../types/models";
import { priorityColours } from "../utils/priority";

type Props = {
  booths: Booth[];
  onBoothClick: (booth: Booth) => void;
  emphasiseBooths: boolean;
};

type BoothComponentProps = {
  booth: Booth;
  onClick: (booth: Booth) => void;
  emphasiseBooths: boolean;
};

function BoothComponent({
  booth,
  onClick,
  emphasiseBooths,
}: BoothComponentProps) {
  const isMobile = window.innerWidth < 700;

  const outlineWidth = isMobile ? 1 : 3;
  const outerHighlightWidth = isMobile ? 1 : 4;

  const style: CSSProperties = {
    position: "absolute",

    left: `${booth.bounds.x}%`,
    top: `${booth.bounds.y}%`,

    width: `${booth.bounds.width}%`,
    height: `${booth.bounds.height}%`,

    background: booth.visited
      ? "rgba(0,0,0,.45)"
      : "transparent",

    outline: `${outlineWidth}px solid ${
      priorityColours[booth.priority]
    }`,

    outlineOffset: 0,

    boxSizing: "border-box",

    cursor: "pointer",

    zIndex: 1000,

    transition:
      "background .15s ease, outline .15s ease",
  };

  const outerHighlightStyle: CSSProperties = {
    position: "absolute",
    inset: -outerHighlightWidth,

    border: `${outerHighlightWidth}px solid ${
      priorityColours[booth.priority]
    }`,

    boxSizing: "border-box",
    pointerEvents: "none",
  };

  return (
    <div
      style={style}
      onClick={() => onClick(booth)}
    >
      {emphasiseBooths && (
        <div style={outerHighlightStyle} />
      )}
    </div>
  );
}

function BoothOverlay({
  booths,
  onBoothClick,
  emphasiseBooths,
}: Props) {
  return (
    <>
      {booths.map((booth) => (
        <BoothComponent
          key={booth.id}
          booth={booth}
          onClick={onBoothClick}
          emphasiseBooths={emphasiseBooths}
        />
      ))}
    </>
  );
}

export default BoothOverlay;