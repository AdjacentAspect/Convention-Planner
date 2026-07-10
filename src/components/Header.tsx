import { currentEvent } from "../data/event";

function Header() {
  return (
    <header className="header">
      <h1>{currentEvent.name}</h1>
    </header>
  );
}

export default Header;