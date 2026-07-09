import { useEffect, useState } from "react";

import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import MapViewer from "./components/MapViewer";
import BottomNavigation from "./components/BottomNavigation";
import BoothPanel from "./components/BoothPanel";

import { currentEvent as initialEvent } from "./data/event";
import type { Booth, ConventionEvent } from "./types/models";

const STORAGE_KEY = `${initialEvent.id}-progress`;

function App() {
  const [event, setEvent] =
    useState<ConventionEvent>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved) {
        return JSON.parse(saved);
        }

        return initialEvent;
    });

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(event)
        );
    }, [event]);

  const [selectedFloor, setSelectedFloor] =
    useState("Level 1");

  const [selectedBooth, setSelectedBooth] =
    useState<Booth | null>(null);

  function toggleVisited() {
    if (!selectedBooth) return;

    const visited = !selectedBooth.visited;

    setEvent((previous) => ({
        ...previous,
        floors: previous.floors.map((floor) => ({
        ...floor,
        booths: floor.booths.map((booth) =>
            booth.id === selectedBooth.id
            ? {
                ...booth,
                visited,
                }
            : booth
        ),
        })),
    }));

    setSelectedBooth({
        ...selectedBooth,
        visited,
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
        onVisited={toggleVisited}
        onClose={() => setSelectedBooth(null)}
      />
    </div>
  );
}

export default App;