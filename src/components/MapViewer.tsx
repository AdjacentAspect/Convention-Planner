type Props = {
  floor: string;
};

function MapViewer({ floor }: Props) {
  return (
    <div className="map-viewer">
      <h2>{floor}</h2>

      <div className="map-placeholder">
        Map will appear here
      </div>
    </div>
  );
}

export default MapViewer;