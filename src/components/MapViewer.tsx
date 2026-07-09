import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import level1 from "../assets/maps/level1.png";
import level2 from "../assets/maps/level2.png";
import level3 from "../assets/maps/level3.png";
import level4 from "../assets/maps/level4.png";

type Props = {
  floor: string;
};

const maps: Record<string, string> = {
  "Level 1": level1,
  "Level 2": level2,
  "Level 3": level3,
  "Level 4": level4,
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
            src={maps[floor]}
            alt={floor}
            className="map-image"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default MapViewer;