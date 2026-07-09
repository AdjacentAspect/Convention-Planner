import type { CSSProperties } from "react";

type Props = {
  open: boolean;
  table: string;
  onClose: () => void;
};

function BottomSheet({ open, table, onClose }: Props) {
  if (!open) return null;

  return (
    <div style={backdropStyle}>
      <div style={sheetStyle}>
        <div style={handleStyle} />

        <h2>{table}</h2>

        <p>
          <strong>Priority:</strong> 🔴 High
        </p>

        <button onClick={onClose}>
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

export default BottomSheet;