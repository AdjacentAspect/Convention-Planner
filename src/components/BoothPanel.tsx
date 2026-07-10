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
  if (!open || !booth) return null;

  return (
    <div
      style={backdropStyle}
      onClick={onClose}
    >
      <div
        style={sheetStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={handleStyle} />

        <h2 style={titleStyle}>
          {booth.table}
        </h2>

        <div style={badgeRow}>
          <span style={priorityBadge}>
            {booth.priority === "high" &&
              "🔴 High"}

            {booth.priority === "medium" &&
              "🟡 Medium"}

            {booth.priority === "low" &&
              "🟢 Low"}
          </span>

          <span style={statusBadge}>
            {booth.visited
              ? "⚫ Visited"
              : "⚪ Todo"}
          </span>
        </div>

        <hr style={divider} />

        <ImageGallery
          booth={booth}
          onImageClick={onImageClick}
        />

        <button
          style={primaryButton}
          onClick={() => {
            onVisited();
            onClose();
          }}
        >
          {booth.visited
            ? "↩️ Mark Unvisited"
            : "✅ Mark Visited"}
        </button>

        <button
          style={secondaryButton}
          onClick={onClose}
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
  background: "rgba(0,0,0,.35)",
  display: "flex",
  alignItems: "flex-end",
  zIndex: 9999,
};

const sheetStyle: CSSProperties = {
  width: "100%",
  background: "#1f2937",
  color: "white",
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  padding: 24,
  maxHeight: "85vh",
  overflowY: "auto",
  animation: "slideUp .2s ease-out",
};

const handleStyle: CSSProperties = {
  width: 60,
  height: 6,
  background: "#6b7280",
  borderRadius: 999,
  margin: "0 auto 20px",
};

const titleStyle: CSSProperties = {
  marginBottom: 12,
};

const badgeRow: CSSProperties = {
  display: "flex",
  gap: 12,
  marginBottom: 20,
  flexWrap: "wrap",
};

const priorityBadge: CSSProperties = {
  background: "#374151",
  padding: "6px 12px",
  borderRadius: 999,
};

const statusBadge: CSSProperties = {
  background: "#374151",
  padding: "6px 12px",
  borderRadius: 999,
};

const divider: CSSProperties = {
  border: 0,
  borderTop: "1px solid #374151",
  margin: "20px 0",
};

const primaryButton: CSSProperties = {
  width: "100%",
  marginTop: 24,
  padding: 14,
  border: "none",
  borderRadius: 12,
  background: "#2563eb",
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryButton: CSSProperties = {
  width: "100%",
  marginTop: 12,
  padding: 14,
  border: "none",
  borderRadius: 12,
  background: "#374151",
  color: "white",
  cursor: "pointer",
};

export default BoothPanel;