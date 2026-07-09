import { useState } from "react";
import type { CSSProperties } from "react";

type Props = {
  enabled?: boolean;
};

function DeveloperOverlay({ enabled = true }: Props) {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  if (!enabled) return null;

  const handleMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setCoords({
      x,
      y,
    });
  };

  const handleClick = async () => {
    const text =
      `x: ${coords.x.toFixed(2)}\ny: ${coords.y.toFixed(2)}`;

    await navigator.clipboard.writeText(text);

    console.log(text);
  };

  return (
    <>
      <div
        onMouseMove={handleMove}
        onClick={handleClick}
        style={overlayStyle}
      />

      <div style={panelStyle}>
        <strong>Developer Mode</strong>

        <div>X: {coords.x.toFixed(2)}%</div>

        <div>Y: {coords.y.toFixed(2)}%</div>

        <small>Click to copy</small>
      </div>
    </>
  );
}

const overlayStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 500,
};

const panelStyle: CSSProperties = {
  position: "absolute",
  top: 15,
  right: 15,
  zIndex: 9999,

  background: "#111827",

  color: "white",

  padding: 10,

  borderRadius: 10,

  fontSize: 13,
};

export default DeveloperOverlay;