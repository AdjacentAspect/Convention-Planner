import { useState } from "react";

import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import MapViewer from "./components/MapViewer";
import BottomNavigation from "./components/BottomNavigation";
import BottomSheet from "./components/BottomSheet";
import type { Booth } from "./types/models";

function App() {
  const [selectedFloor, setSelectedFloor] =
    useState("Level 1");

  const [selectedBooth, setSelectedBooth] =
    useState<Booth | null>(null);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FloorSelector
          selectedFloor={selectedFloor}
          onChange={setSelectedFloor}
        />

        <MapViewer
          floor={selectedFloor}
          onBoothClick={setSelectedBooth}
        />
      </main>

      <BottomNavigation />

      <BottomSheet
        open={selectedBooth !== null}
        booth={selectedBooth}
        onClose={() => setSelectedBooth(null)}
        onVisited={() => {
          alert("Visited feature next!");
          setSelectedBooth(null);
        }}
      />
    </div>
  );
}

export default App;