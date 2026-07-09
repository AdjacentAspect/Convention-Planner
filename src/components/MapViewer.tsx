import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { currentEvent } from "../data/currentEvent";

type Props = {
  floor: string;
};

function MapViewer({ floor }: Props) {
  return (
    <div className="map-viewer">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        centerOnInit
        wheel={{ step: 0.2 }}
      >
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={
                currentEvent.floors.find(
                    (f) => f.name === floor
                )?.image
            }
            alt={floor}
            className="map-image"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default MapViewer;