import { useMemo, useState } from "react";
import type { Booth, ConventionEvent } from "../types/models";

type Props = {
  event: ConventionEvent;
  onSelect: (floorName: string, booth: Booth) => void;
};

function SearchBar({
  event,
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.trim() === "") return [];

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
  }, [event, query]);

  return (
    <div
      style={{
        position: "relative",
        marginBottom: 16,
      }}
    >
      <input
        type="text"
        placeholder="Search table (e.g. 4E14)"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid #444",
          background: "#1f2937",
          color: "white",
          boxSizing: "border-box",
        }}
      />

      {results.length > 0 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "100%",
            marginTop: 6,
            background: "#1f2937",
            borderRadius: 12,
            overflow: "hidden",
            zIndex: 9999,
            border: "1px solid #333",
          }}
        >
          {results.map(({ booth, floor }) => (
            <button
              key={booth.id}
              onClick={() => {
                onSelect(floor, booth);
                setQuery("");
              }}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <strong>{booth.table}</strong>

              <span
                style={{
                  opacity: 0.6,
                  marginLeft: 12,
                }}
              >
                {floor}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;