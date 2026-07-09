import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { currentEvent } from "../data/currentEvent";
import BoothOverlay from "./BoothOverlay";

import DeveloperOverlay from "./DeveloperOverlay";

type Props = {
  floor: string;
  onBoothClick: (table: string) => void;
};

function MapViewer({ floor, onBoothClick }: Props) {
  const currentFloor = currentEvent.floors.find(
    (f) => f.name === floor
  );

  return (
    <div className="map-viewer">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        centerOnInit
        wheel={{
          step: 0.01,
        }}
        pinch={{
          step: 5,
        }}
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