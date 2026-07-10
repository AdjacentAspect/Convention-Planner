import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { useEffect } from "react";

type Props = {
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
};

function ImageViewer({
  images,
  currentIndex,
  onPrevious,
  onNext,
  onClose,
}: Props) {
  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
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
  }, [
    onClose,
    onPrevious,
    onNext,
  ]);

  if (images.length === 0) return null;

  return (
    <div
      className="image-viewer-backdrop"
      onClick={onClose}
    >
      <button
        className="gallery-arrow left"
        disabled={currentIndex === 0}
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
      >
        ◀
      </button>

      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={6}
      >
        <TransformComponent>
          <img
            src={images[currentIndex]}
            className="image-viewer-image"
            onClick={(e) =>
              e.stopPropagation()
            }
          />
        </TransformComponent>
      </TransformWrapper>

      <button
        className="gallery-arrow right"
        disabled={
          currentIndex ===
          images.length - 1
        }
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        ▶
      </button>

      <div className="gallery-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageViewer;