import { useEffect, useState } from "react";

import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import MapViewer from "./components/MapViewer";
import BottomNavigation from "./components/BottomNavigation";
import BoothPanel from "./components/BoothPanel";
import ImageViewer from "./components/ImageViewer";

import ProgressScreen from "./screens/ProgressScreen";
import SettingsScreen from "./screens/SettingsScreen";

import { currentEvent as initialEvent } from "./data/event";
import type { Booth, UserProgress } from "./types/models";

type Filter =
  | "all"
  | "high"
  | "medium"
  | "low";

type Screen =
  | "map"
  | "progress"
  | "settings";

const STORAGE_KEY = `${initialEvent.id}-progress`;

function App() {
  const [screen, setScreen] =
    useState<Screen>("map");

  const [editorMode, setEditorMode] =
    useState(false);

  const [selectedFloor, setSelectedFloor] =
    useState("Level 1");

  const [filter, setFilter] =
    useState<Filter>("all");

  const [selectedBooth, setSelectedBooth] =
    useState<Booth | null>(null);

  const [galleryImages, setGalleryImages] =
  useState<string[]>([]);

  const [mapWhitening, setMapWhitening] =
  useState(true);

  const [currentImageIndex, setCurrentImageIndex] =
    useState(0);

  const [progress, setProgress] =
    useState<UserProgress>(() => {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return {
          visitedBooths: [],
          boothPriorities: {},
        };
      }

      try {
        const parsed = JSON.parse(saved);

        return {
          visitedBooths:
            parsed.visitedBooths ?? [],
          boothPriorities:
            parsed.boothPriorities ?? {},
        };
      } catch {
        return {
          visitedBooths: [],
          boothPriorities: {},
        };
      }
    });

  useEffect(() => {
    setSelectedBooth(null);
  }, [selectedFloor]);

  useEffect(() => {
    setSelectedBooth(null);
  }, [filter]);

  useEffect(() => {
    setSelectedBooth(null);
  }, [screen]);

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
          priority:
            progress.boothPriorities[booth.id] ??
            booth.priority,
        }))
        .filter((booth) => {
          switch (filter) {
            case "high":
              return booth.priority === "high";

            case "medium":
              return booth.priority === "medium";

            case "low":
              return booth.priority === "low";

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
          boothPriorities:
            previous.boothPriorities,
        };
      }

      return {
        visitedBooths: [
          ...previous.visitedBooths,
          selectedBooth.id,
        ],
        boothPriorities:
          previous.boothPriorities,
      };
    });

    setSelectedBooth({
      ...selectedBooth,
      visited: !selectedBooth.visited,
    });
  }

  function changeBoothPriority(
    priority: Booth["priority"]
  ) {
    if (!selectedBooth) return;

    setProgress((previous) => ({
      ...previous,
      boothPriorities: {
        ...previous.boothPriorities,
        [selectedBooth.id]: priority,
      },
    }));

    setSelectedBooth({
      ...selectedBooth,
      priority,
    });
  }

  return (
    <div className="app">
      <Header />

      {screen === "map" && (
        <main className="main-content">
          <FloorSelector
            event={event}
            selectedFloor={selectedFloor}
            onChange={setSelectedFloor}
            filter={filter}
            onFilterChange={setFilter}
            onBoothSelect={(floor, booth) => {
                setSelectedFloor(floor);
                setSelectedBooth(booth);
            }}
          />

          <MapViewer
            floor={selectedFloor}
            event={event}
            onBoothClick={setSelectedBooth}
            editorMode={editorMode}
            dimMap={mapWhitening}
            emphasiseBooths={filter !== "all"}
          />
        </main>
      )}

      {screen === "progress" && (
        <ProgressScreen
          event={event}
        />
      )}

      {screen === "settings" && (
        <SettingsScreen
          editorMode={editorMode}
          onToggleEditorMode={() =>
            setEditorMode((previous) => !previous)
          }
          mapWhitening={mapWhitening}
          onToggleMapWhitening={() =>
            setMapWhitening((previous) => !previous)
          }
          progress={progress}
          onResetProgress={() =>
            setProgress({
              visitedBooths: [],
              boothPriorities: {},
            })
          }
        />
      )}

      <BottomNavigation
        current={screen}
        onNavigate={setScreen}
      />

      <BoothPanel
        open={selectedBooth !== null}
        booth={selectedBooth}
        onVisited={toggleVisited}
        onPriorityChange={changeBoothPriority}
        onClose={() => setSelectedBooth(null)}
        onImageClick={(image) => {
          if (!selectedBooth) return;

          const index =
            selectedBooth.images.indexOf(image);

          setGalleryImages(selectedBooth.images);
          setCurrentImageIndex(index);
        }}
      />

      <ImageViewer
        images={galleryImages}
        currentIndex={currentImageIndex}
        onPrevious={() =>
          setCurrentImageIndex((previous) =>
            Math.max(previous - 1, 0)
          )
        }
        onNext={() =>
          setCurrentImageIndex((previous) =>
            Math.min(
              previous + 1,
              galleryImages.length - 1
            )
          )
        }
        onClose={() => {
          setGalleryImages([]);
          setCurrentImageIndex(0);
        }}
      />
    </div>
  );
}

export default App;
