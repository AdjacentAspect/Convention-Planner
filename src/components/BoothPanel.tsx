import type { CSSProperties } from "react";
import type { Booth } from "../types/models";

import ImageGallery from "./BoothDetailsPanel/ImageGallery";

type Props = {
  open: boolean;
  booth: Booth | null;
  onClose: () => void;
  onVisited: () => void;
  onImageClick: (image: string) => void;
};

function BoothPanel({
  open,
  booth,
  onClose,
  onVisited,
  onImageClick,
}: Props) {
  if (!open) return null;

  return (
    <div style={backdropStyle}>
      <div style={sheetStyle}>
        <div style={handleStyle} />

        <h2 style={{ marginBottom: 6 }}>
          {booth?.table}
        </h2>

        <p style={{ marginBottom: 4 }}>
          {booth?.priority === "high" && "🔴 High Priority"}
          {booth?.priority === "medium" && "🟡 Medium Priority"}
          {booth?.priority === "low" && "🟢 Low Priority"}
        </p>

        <p style={{ marginBottom: 20 }}>
          <strong>Status:</strong>{" "}
          {booth?.visited
            ? "⚫ Visited"
            : "🟢 Not Visited"}
        </p>

        <ImageGallery
          booth={booth}
          onImageClick={onImageClick}
        />

        
        <button
          onClick={() => {
            onVisited();
            onClose();
          }}
          style={visitedButton}
        >
          {booth?.visited
            ? "↩️ Mark Unvisited"
            : "✅ Mark Visited"}
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