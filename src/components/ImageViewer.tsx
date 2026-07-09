import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

import { useEffect } from "react";

type Props = {
  image: string | null;
  onClose: () => void;
};

function ImageViewer({
  image,
  onClose,
}: Props) {
  useEffect(() => {
    if (!image) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
      }}
    >
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={6}
        doubleClick={{
          mode: "zoomIn",
        }}
        wheel={{
          step: 0.2,
        }}
      >
        <TransformComponent>
          <img
            src={image}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default ImageViewer;