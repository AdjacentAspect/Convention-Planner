import { useState } from "react";

import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import MapViewer from "./components/MapViewer";
import BottomNavigation from "./components/BottomNavigation";
import BoothPanel from "./components/BoothPanel";

import { currentEvent as initialEvent } from "./data/event";
import type { Booth, ConventionEvent } from "./types/models";

function App() {
  const [event, setEvent] =
    useState<ConventionEvent>(initialEvent);

  const [selectedFloor, setSelectedFloor] =
    useState("Level 1");

  const [selectedBooth, setSelectedBooth] =
    useState<Booth | null>(null);

  function markVisited() {
    if (!selectedBooth) return;

    setEvent((previous) => ({
      ...previous,
      floors: previous.floors.map((floor) => ({
        ...floor,
        booths: floor.booths.map((booth) =>
          booth.id === selectedBooth.id
            ? {
                ...booth,
                visited: true,
              }
            : booth
        ),
      })),
    }));

    setSelectedBooth({
      ...selectedBooth,
      visited: true,
    });
  }

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
          event={event}
          onBoothClick={setSelectedBooth}
        />
      </main>

      <BottomNavigation />

      <BoothPanel
        open={selectedBooth !== null}
        booth={selectedBooth}
        onVisited={markVisited}
        onClose={() => setSelectedBooth(null)}
      />
    </div>
  );
}

export default App;