import { currentEvent } from "../data/event";

function Header() {
  return (
    <header className="header">
      <h1>{currentEvent.name}</h1>

      <p className="subtitle">
        {currentEvent.venue}
      </p>
    </header>
  );
}

export default Header;