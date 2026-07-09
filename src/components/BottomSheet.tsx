import type { CSSProperties } from "react";

type Props = {
  open: boolean;
  table: string;
  onClose: () => void;
  onVisited: () => void;
};

function BottomSheet({
  open,
  table,
  onClose,
  onVisited,
}: Props) {
  if (!open) return null;

  return (
    <div style={backdropStyle}>
      <div style={sheetStyle}>
        <h2>{table}</h2>

        <button
          onClick={onVisited}
          style={{
            width: "100%",
            padding: 20,
            background: "green",
            color: "white",
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          MARK VISITED
        </button>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: 20,
            background: "red",
            color: "white",
            fontSize: 20,
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

const backdropStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
};

const sheetStyle: CSSProperties = {
  width: 350,
  background: "white",
  color: "black",
  padding: 20,
  borderRadius: 12,
};

export default BottomSheet;