import { useMemo, useState } from "react";

import type {
  Booth,
  ConventionEvent,
} from "../types/models";

type Filter =
  | "all"
  | "high"
  | "medium"
  | "low"
  | "visited"
  | "unvisited";

type Props = {
  event: ConventionEvent;

  selectedFloor: string;

  onChange: (floor: string) => void;

  filter: Filter;

  onFilterChange: (filter: Filter) => void;

  onBoothSelect: (
    floor: string,
    booth: Booth
  ) => void;
};

function FloorSelector({
  event,
  selectedFloor,
  onChange,
  filter,
  onFilterChange,
  onBoothSelect,
}: Props) {
  const [query, setQuery] =
    useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const search = query
      .replace(/\./g, "")
      .toLowerCase();

    return event.floors.flatMap((floor) =>
      floor.booths
        .filter((booth) =>
          booth.table
            .replace(/\./g, "")
            .toLowerCase()
            .includes(search)
        )
        .map((booth) => ({
          booth,
          floor: floor.name,
        }))
    );
  }, [query, event]);

  return (
    <>
      <div
        style={{
          position: "relative",
          marginBottom: 14,
        }}
      >
        <input
          placeholder="Search table..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 12,
            boxSizing: "border-box",
          }}
        />

        {results.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#1f2937",
              borderRadius: 12,
              overflow: "hidden",
              zIndex: 9999,
              marginTop: 6,
            }}
          >
            {results.map(
              ({ booth, floor }) => (
                <button
                  key={booth.id}
                  onClick={() => {
                    onBoothSelect(
                      floor,
                      booth
                    );

                    setQuery("");
                  }}
                  style={{
                    width: "100%",
                    padding: 12,
                    background:
                      "transparent",
                    border: "none",
                    color: "white",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <strong>
                    {booth.table}
                  </strong>

                  {" · "}

                  {floor}
                </button>
              )
            )}
          </div>
        )}
      </div>

      <div className="floor-selector">
        <select
          value={selectedFloor}
          onChange={(e) =>
            onChange(e.target.value)
          }
        >
          {event.floors.map((floor) => (
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
            className={
              filter === "all"
                ? "active"
                : ""
            }
            onClick={() =>
              onFilterChange("all")
            }
          >
            All
          </button>

          <button
            className={
              filter === "high"
                ? "active"
                : ""
            }
            onClick={() =>
              onFilterChange("high")
            }
          >
            🔴 High
          </button>

          <button
            className={
              filter === "medium"
                ? "active"
                : ""
            }
            onClick={() =>
              onFilterChange(
                "medium"
              )
            }
          >
            🟡 Mid
          </button>

          <button
            className={
              filter === "low"
                ? "active"
                : ""
            }
            onClick={() =>
              onFilterChange("low")
            }
          >
            🟢 Low
          </button>

          <button
            className={
              filter === "visited"
                ? "active"
                : ""
            }
            onClick={() =>
              onFilterChange(
                "visited"
              )
            }
          >
            ⚫ Done
          </button>

          <button
            className={
              filter ===
              "unvisited"
                ? "active"
                : ""
            }
            onClick={() =>
              onFilterChange(
                "unvisited"
              )
            }
          >
            ⚪ To-do
          </button>
        </div>
      </div>
    </>
  );
}

export default FloorSelector;