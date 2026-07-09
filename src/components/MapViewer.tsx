import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import type {
  Booth,
  ConventionEvent,
} from "../types/models";

import BoothOverlay from "./BoothOverlay";
import DeveloperOverlay from "./DeveloperOverlay";

type Props = {
  floor: string;
  event: ConventionEvent;
  onBoothClick: (booth: Booth) => void;
};

function MapViewer({
  floor,
  event,
  onBoothClick,
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

            <DeveloperOverlay />

            <BoothOverlay
              booths={currentFloor?.booths ?? []}
              onBoothClick={onBoothClick}
            />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default MapViewer;