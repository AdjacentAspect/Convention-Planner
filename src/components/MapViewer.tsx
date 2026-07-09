import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { useState } from "react";
import BottomSheet from "./BottomSheet";

import { currentEvent } from "../data/currentEvent";
import BoothOverlay from "./BoothOverlay";

type Props = {
  floor: string;
};

function MapViewer({ floor }: Props) {

    const [selectedBooth, setSelectedBooth] =
    useState<string | null>(null);

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
            step: 0.001,
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

            <BoothOverlay
                onBoothClick={(table) => setSelectedBooth(table)}
            />

            <BottomSheet
                open={selectedBooth !== null}
                table={selectedBooth ?? ""}
                onClose={() => setSelectedBooth(null)}
            />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default MapViewer;