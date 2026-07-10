import type { UserProgress } from "../types/models";

type Props = {
  editorMode: boolean;
  onToggleEditorMode: () => void;
  onResetProgress: () => void;
  progress: UserProgress;
};

function SettingsScreen({
  editorMode,
  onToggleEditorMode,
  onResetProgress,
  progress,
}: Props) {
  return (
    <main className="main-content">
      <h2>⚙️ Settings</h2>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div>
          <h3>Editor Mode</h3>

          <button
            onClick={onToggleEditorMode}
          >
            {editorMode
              ? "🟢 Enabled"
              : "⚪ Disabled"}
          </button>
        </div>

        <div>
          <h3>Progress</h3>

          <p>
            Visited booths:{" "}
            {progress.visitedBooths.length}
          </p>

          <button
            onClick={onResetProgress}
          >
            Reset Progress
          </button>
        </div>

        <div>
          <h3>About</h3>

          <p>Convention Planner</p>

          <p>Version 0.6.5</p>
        </div>
      </div>
    </main>
  );
}

export default SettingsScreen;