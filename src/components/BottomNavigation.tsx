type Props = {
  current: "map" | "progress" | "settings";
  onNavigate: (
    screen: "map" | "progress" | "settings"
  ) => void;
};

function BottomNavigation({
  current,
  onNavigate,
}: Props) {
  return (
    <nav className="bottom-nav">
      <button
        className={
          current === "map" ? "active" : ""
        }
        onClick={() => onNavigate("map")}
      >
        <span className="nav-icon">🗺️</span>
        <span>Map</span>
      </button>

      <button
        className={
          current === "progress"
            ? "active"
            : ""
        }
        onClick={() =>
          onNavigate("progress")
        }
      >
        <span className="nav-icon">📊</span>
        <span>Progress</span>
      </button>

      <button
        className={
          current === "settings"
            ? "active"
            : ""
        }
        onClick={() =>
          onNavigate("settings")
        }
      >
        <span className="nav-icon">⚙️</span>
        <span>Settings</span>
      </button>
    </nav>
  );
}

export default BottomNavigation;