import { useEffect, useState } from "react";

import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import MapViewer from "./components/MapViewer";
import BottomNavigation from "./components/BottomNavigation";
import BoothPanel from "./components/BoothPanel";
import ImageViewer from "./components/ImageViewer";

import { currentEvent as initialEvent } from "./data/event";
import type { Booth, UserProgress } from "./types/models";

type Filter =
  | "all"
  | "high"
  | "medium"
  | "low"
  | "visited"
  | "unvisited";

const STORAGE_KEY = `${initialEvent.id}-progress`;

function App() {
  const [selectedFloor, setSelectedFloor] =
    useState("Level 1");

  const [filter, setFilter] =
    useState<Filter>("all");

  const [selectedBooth, setSelectedBooth] =
    useState<Booth | null>(null);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const [progress, setProgress] =
    useState<UserProgress>(() => {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return {
          visitedBooths: [],
        };
      }

      try {
        const parsed = JSON.parse(saved);

        return {
          visitedBooths:
            parsed.visitedBooths ?? [],
        };
      } catch {
        return {
          visitedBooths: [],
        };
      }
    });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );
  }, [progress]);

  const event = {
    ...initialEvent,

    floors: initialEvent.floors.map((floor) => ({
      ...floor,

      booths: floor.booths
        .map((booth) => ({
          ...booth,
          visited:
            progress.visitedBooths.includes(
              booth.id
            ),
        }))
        .filter((booth) => {
          switch (filter) {
            case "high":
              return booth.priority === "high";

            case "medium":
              return booth.priority === "medium";

            case "low":
              return booth.priority === "low";

            case "visited":
              return booth.visited;

            case "unvisited":
              return !booth.visited;

            default:
              return true;
          }
        }),
    })),
  };

  function toggleVisited() {
    if (!selectedBooth) return;

    setProgress((previous) => {
      const alreadyVisited =
        previous.visitedBooths.includes(
          selectedBooth.id
        );

      if (alreadyVisited) {
        return {
          visitedBooths:
            previous.visitedBooths.filter(
              (id) => id !== selectedBooth.id
            ),
        };
      }

      return {
        visitedBooths: [
          ...previous.visitedBooths,
          selectedBooth.id,
        ],
      };
    });

    setSelectedBooth({
      ...selectedBooth,
      visited: !selectedBooth.visited,
    });
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FloorSelector
          selectedFloor={selectedFloor}
          onChange={setSelectedFloor}
          filter={filter}
          onFilterChange={setFilter}
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
        onImageClick={setSelectedImage}
      />

      <ImageViewer
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;