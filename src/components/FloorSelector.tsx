import { useMemo, useState } from "react";

import { priorityConfig } from "../utils/priority";

import type {
  Booth,
  ConventionEvent,
} from "../types/models";

type Filter =
  | "all"
  | "high"
  | "medium"
  | "low";

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
              display: "grid",
              gridTemplateColumns: "3fr 1fr auto",
              gap: 12,
              marginBottom: 14,
          }}
      >
        <input
          placeholder="🔍 Search..."
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

        <select
          value={selectedFloor}
          onChange={(e) =>
            onChange(e.target.value)
          }
          style={{
            borderRadius: 12,
            padding: 12,
          }}
        >
          {event.floors.map((floor) => (
            <option
              key={floor.id}
              value={floor.name}
            >
              {floor.name.replace("Level ", "L")}
            </option>
          ))}
        </select>

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
            ALL
          </button>

          <button
            className={
              filter === "high"
                ? "active"
                : ""
            }
            style={{
              borderColor:
                filter === "high"
                  ? "white"
                  : priorityConfig.high.colour,

              color: priorityConfig.high.colour,
            }}
            onClick={() =>
              onFilterChange("high")
            }
          >
            {priorityConfig.high.short}
          </button>

          <button
            className={
              filter === "medium"
                ? "active"
                : ""
            }
            style={{
              borderColor:
                filter === "medium"
                  ? "white"
                  : priorityConfig.medium.colour,

              color: priorityConfig.medium.colour,
            }}
            onClick={() =>
              onFilterChange("medium")
            }
          >
            {priorityConfig.medium.short}
          </button>

          <button
            className={
              filter === "low"
                ? "active"
                : ""
            }
            style={{
              borderColor:
                filter === "low"
                  ? "white"
                  : priorityConfig.low.colour,

              color: priorityConfig.low.colour,
            }}
            onClick={() =>
              onFilterChange("low")
            }
          >
            {priorityConfig.low.short}
          </button>
        </div>
    </>
  );
}

export default FloorSelector;