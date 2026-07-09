import type { Booth } from "../../types/models";

type Props = {
  booth: Booth | null;
};

type ImageGalleryProps = {
  booth: Booth | null;
  onImageClick?: (image: string) => void;
};

function ImageGallery({
  booth,
  onImageClick,
}: ImageGalleryProps) {
  if (!booth) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Catalogue</h3>

      {booth.images.length === 0 ? (
        <p>No catalogue images.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 12,
            marginTop: 12,
          }}
        >
          {booth.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Page ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: 8,
                cursor: "pointer",
                border: "2px solid #444",
              }}
              onClick={() => onImageClick?.(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;