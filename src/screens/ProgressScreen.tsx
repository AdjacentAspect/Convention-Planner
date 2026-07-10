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
      <h2>📊 Progress</h2>

      <div style={heroCard}>
        <div style={percent}>
          {overall}%
        </div>

        <div style={barBackground}>
          <div
            style={{
              ...barFill,
              width: `${overall}%`,
            }}
          />
        </div>

        <p style={subtitle}>
          {visited.length} / {booths.length} booths visited
        </p>
      </div>

      <div style={statsContainer}>
        <StatCard
          colour="🔴"
          label="High"
          current={visitedHigh.length}
          total={high.length}
        />

        <StatCard
          colour="🟡"
          label="Medium"
          current={visitedMedium.length}
          total={medium.length}
        />

        <StatCard
          colour="🟢"
          label="Low"
          current={visitedLow.length}
          total={low.length}
        />
      </div>
    </main>
  );
}

type StatCardProps = {
  colour: string;
  label: string;
  current: number;
  total: number;
};

function StatCard({
  colour,
  label,
  current,
  total,
}: StatCardProps) {
  return (
    <div style={card}>
      <h3>
        {colour} {label}
      </h3>

      <p
        style={{
          fontSize: 26,
          margin: "8px 0",
        }}
      >
        {current} / {total}
      </p>
    </div>
  );
}

const heroCard = {
  background: "#1f2937",
  borderRadius: 20,
  padding: 24,
  marginTop: 20,
  textAlign: "center" as const,
};

const percent = {
  fontSize: 52,
  fontWeight: 700,
};

const subtitle = {
  marginTop: 12,
  color: "#9ca3af",
};

const barBackground = {
  height: 14,
  background: "#374151",
  borderRadius: 999,
  marginTop: 20,
  overflow: "hidden",
};

const barFill = {
  height: "100%",
  background: "#2563eb",
};

const statsContainer = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 16,
  marginTop: 24,
};

const card = {
  background: "#1f2937",
  borderRadius: 18,
  padding: 18,
};

export default ProgressScreen;