function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      <button disabled>
        🗺️
        <span>Map</span>
      </button>

      <button disabled>
        📊
        <span>Progress</span>
      </button>

      <button disabled>
        ⚙️
        <span>Settings</span>
      </button>
    </nav>
  );
}

export default BottomNavigation;