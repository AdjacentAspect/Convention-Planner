import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import {
  useEffect,
  useRef,
  useState,
} from "react";

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

  const [scale, setScale] =
  useState(1);

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

  useEffect(() => {
  if (images.length === 0) return;

  function preventPagePinch(event: TouchEvent) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }

  document.addEventListener(
    "touchmove",
    preventPagePinch,
    { passive: false }
  );

  return () =>
    document.removeEventListener(
      "touchmove",
      preventPagePinch
    );
}, [images.length]);

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

        if (scale <= 1.02) {
            if (delta > 90)
                onPrevious();

            if (delta < -90)
                onNext();
        }

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
        key={images[currentIndex]}
        initialScale={1}
        minScale={1}
        maxScale={6}
        centerOnInit
        limitToBounds={false}
        doubleClick={{ disabled: true }}
        panning={{
          velocityDisabled: false,
        }}
        velocityAnimation={{
          /*
          If it still feels too slippery, lower maxStrengthTouch to 3 or 4.
          If it feels too dead, raise sensitivityTouch to 0.35 or maxStrengthTouch to 8. 
          */
          disabled: false,
          sensitivityTouch: 0.25,
          maxStrengthTouch: 6,
          animationTime: 120,
          maxAnimationTime: 180,
          animationType: "easeOut",
        }}
        onTransform={(ref) => {
          setScale(ref.state.scale);
        }}
      >
        <TransformComponent
          wrapperClass="image-transform-wrapper"
          contentClass="image-transform-content"
        >
          <div
            className="image-zoom-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              className="image-viewer-image"
            />
          </div>
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