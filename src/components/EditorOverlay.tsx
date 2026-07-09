import { useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

type Point = {
  x: number;
  y: number;
};

type Props = {
  enabled?: boolean;
};

function EditorOverlay({ enabled = true }: Props) {
  const [mouse, setMouse] = useState<Point>({ x: 0, y: 0 });
  const [start, setStart] = useState<Point | null>(null);

  if (!enabled) return null;

  function getCoords(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    return {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    };
  }

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    setMouse(getCoords(event));
  }

  async function handleClick(event: MouseEvent<HTMLDivElement>) {
    const point = getCoords(event);

    if (!start) {
      setStart(point);
      return;
    }

    const bounds = {
      x: Number(start.x.toFixed(2)),
      y: Number(start.y.toFixed(2)),
      width: Number((point.x - start.x).toFixed(2)),
      height: Number((point.y - start.y).toFixed(2)),
    };

    const text = `bounds: {
  x: ${bounds.x},
  y: ${bounds.y},
  width: ${bounds.width},
  height: ${bounds.height},
}`;

    await navigator.clipboard.writeText(text);

    console.log(text);

    alert("Bounds copied to clipboard!");

    setStart(null);
  }

  return (
    <>
      <div
        onMouseMove={handleMove}
        onClick={handleClick}
        style={overlayStyle}
      />

      <div style={panelStyle}>
        <strong>Editor Mode</strong>

        <div>
          Mouse: {mouse.x.toFixed(2)}%, {mouse.y.toFixed(2)}%
        </div>

        <hr />

        {start ? (
          <div>
            Second click:
            <br />
            Bottom-right
          </div>
        ) : (
          <div>
            First click:
            <br />
            Top-left
          </div>
        )}
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
  top: 12,
  right: 12,
  background: "#111827",
  color: "white",
  padding: 10,
  borderRadius: 10,
  zIndex: 9999,
  fontSize: 13,
};

export default EditorOverlay;