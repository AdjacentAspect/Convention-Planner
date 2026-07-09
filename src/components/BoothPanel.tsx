import type { CSSProperties } from "react";
import type { Booth } from "../types/models";

type Props = {
  open: boolean;
  booth: Booth | null;
  onClose: () => void;
  onVisited: () => void;
};

function BoothPanel({
  open,
  booth,
  onClose,
  onVisited,
}: Props) {
  if (!open) return null;

  return (
    <div style={backdropStyle}>
      <div style={sheetStyle}>
        <div style={handleStyle} />

        <h2>{booth?.table}</h2>

        <p>{booth?.artist}</p>

        <p>
            Priority: {booth?.priority}
        </p>

        <p>
            Notes: {booth?.notes || "None"}
        </p>

        <button
          onClick={() => {
            onVisited();
            onClose();
          }}
          style={visitedButton}
        >
          ✅ Mark Visited
        </button>

        <button
          onClick={onClose}
          style={closeButton}
        >
          Close
        </button>
      </div>
    </div>
  );
}

const backdropStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.25)",
  display: "flex",
  alignItems: "flex-end",
  zIndex: 9999,
};

const sheetStyle: CSSProperties = {
  width: "100%",
  background: "#1f2937",
  color: "white",
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
  padding: 24,
  minHeight: 220,
};

const handleStyle: CSSProperties = {
  width: 60,
  height: 6,
  background: "#666",
  borderRadius: 99,
  margin: "0 auto 20px",
};

const visitedButton: CSSProperties = {
  width: "100%",
  padding: 12,
  marginTop: 20,
};

const closeButton: CSSProperties = {
  width: "100%",
  padding: 12,
  marginTop: 12,
};

export default BoothPanel;