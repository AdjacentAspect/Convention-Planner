import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import type {
  Booth,
  ConventionEvent,
} from "../types/models";

import BoothOverlay from "./BoothOverlay";
import EditorOverlay from "./EditorOverlay";
import ResetViewButton from "./ResetViewButton";

type Props = {
  floor: string;
  event: ConventionEvent;
  onBoothClick: (booth: Booth) => void;
  editorMode: boolean;
};

function MapViewer({
  floor,
  event,
  onBoothClick,
  editorMode,
}: Props) {
  const currentFloor = event.floors.find(
    (f) => f.name === floor
  );

  return (
    <div className="map-viewer">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        centerOnInit
        wheel={{ step: 0.01 }}
        pinch={{ step: 5 }}
      >
        {(utils) => (
          <>
            <ResetViewButton
              onClick={() =>
                utils.resetTransform()
              }
            />

            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100%",
              }}
            >
              <div className="map-container">
                <img
                  src={currentFloor?.image}
                  alt={floor}
                  className="map-image"
                />

                {editorMode && <EditorOverlay />}

                <BoothOverlay
                  booths={currentFloor?.booths ?? []}
                  onBoothClick={onBoothClick}
                />
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

export default MapViewer;