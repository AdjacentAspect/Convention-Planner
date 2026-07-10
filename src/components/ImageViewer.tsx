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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="image-viewer-backdrop"
      onClick={onClose}
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
            className="image-viewer-image"
            onClick={(e) =>
              e.stopPropagation()
            }
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default ImageViewer;