import type { ConventionEvent } from "../types/models";

type Props = {
  event: ConventionEvent;
};

function ProgressScreen({ event }: Props) {
  const booths = event.floors.flatMap(
    (floor) => floor.booths
  );

  const visited = booths.filter(
    (booth) => booth.visited
  );

  const high = booths.filter(
    (booth) => booth.priority === "high"
  );

  const medium = booths.filter(
    (booth) => booth.priority === "medium"
  );

  const low = booths.filter(
    (booth) => booth.priority === "low"
  );

  const visitedHigh = high.filter(
    (booth) => booth.visited
  );

  const visitedMedium = medium.filter(
    (booth) => booth.visited
  );

  const visitedLow = low.filter(
    (booth) => booth.visited
  );

  const overall =
    booths.length === 0
      ? 0
      : Math.round(
          (visited.length / booths.length) * 100
        );

  return (
    <main className="main-content">
      <h2>Convention Progress</h2>

      <div
        style={{
          marginTop: 24,
        }}
      >
        <h1>{overall}%</h1>

        <progress
          value={visited.length}
          max={booths.length}
          style={{
            width: "100%",
            height: 16,
          }}
        />

        <p
          style={{
            marginTop: 12,
          }}
        >
          {visited.length} / {booths.length} booths visited
        </p>
      </div>

      <div
        style={{
          marginTop: 32,
          lineHeight: 2,
        }}
      >
        <p>
          🔴 High: {visitedHigh.length} /{" "}
          {high.length}
        </p>

        <p>
          🟡 Medium: {visitedMedium.length} /{" "}
          {medium.length}
        </p>

        <p>
          🟢 Low: {visitedLow.length} /{" "}
          {low.length}
        </p>
      </div>
    </main>
  );
}

export default ProgressScreen;