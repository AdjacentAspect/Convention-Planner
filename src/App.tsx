import { useState } from "react";

import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import MapViewer from "./components/MapViewer";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  const [selectedFloor, setSelectedFloor] = useState("Level 1");

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FloorSelector
          selectedFloor={selectedFloor}
          onChange={setSelectedFloor}
        />

        <MapViewer floor={selectedFloor} />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default App;