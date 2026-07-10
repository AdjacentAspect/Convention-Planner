import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { useEffect, useRef } from "react";

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
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
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

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [onClose, onPrevious, onNext]);

  if (images.length === 0) return null;

  return (
    <div
      className="image-viewer-backdrop"
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current =
          e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null)
          return;

        const delta =
          e.changedTouches[0].clientX -
          touchStartX.current;

        if (delta > 70) onPrevious();

        if (delta < -70) onNext();

        touchStartX.current = null;
      }}
    >
      <div className="gallery-top-bar">
        <button
          className="gallery-close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ✕
        </button>

        <div className="gallery-counter">
          Image {currentIndex + 1} of {images.length}
          {/*{currentIndex + 1} / {images.length}*/}
        </div>
      </div>

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
          currentIndex === images.length - 1
        }
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        ▶
      </button>
    </div>
  );
}

export default ImageViewer;