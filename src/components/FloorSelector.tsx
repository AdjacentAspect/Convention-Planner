import { currentEvent } from "../data/event";

type Filter =
  | "all"
  | "high"
  | "medium"
  | "low"
  | "visited"
  | "unvisited";

type Props = {
  selectedFloor: string;
  onChange: (floor: string) => void;

  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

function FloorSelector({
  selectedFloor,
  onChange,
  filter,
  onFilterChange,
}: Props) {
  return (
    <div className="floor-selector">
      <select
        value={selectedFloor}
        onChange={(e) => onChange(e.target.value)}
      >
        {currentEvent.floors.map((floor) => (
          <option
            key={floor.id}
            value={floor.name}
          >
            {floor.name}
          </option>
        ))}
      </select>

      <div className="filter-row">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>

        <button
          className={filter === "high" ? "active" : ""}
          onClick={() => onFilterChange("high")}
        >
          🔴
        </button>

        <button
          className={filter === "medium" ? "active" : ""}
          onClick={() => onFilterChange("medium")}
        >
          🟡
        </button>

        <button
          className={filter === "low" ? "active" : ""}
          onClick={() => onFilterChange("low")}
        >
          🟢
        </button>

        <button
          className={filter === "visited" ? "active" : ""}
          onClick={() => onFilterChange("visited")}
        >
          ⚫
        </button>

        <button
          className={filter === "unvisited" ? "active" : ""}
          onClick={() => onFilterChange("unvisited")}
        >
          ⚪
        </button>
      </div>
    </div>
  );
}

export default FloorSelector;