import type { Booth } from "../../types/models";

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
                height: 170,

                objectFit: "cover",

                borderRadius: 14,

                cursor: "pointer",

                border: "1px solid #444",

                boxShadow:
                  "0 4px 14px rgba(0,0,0,.25)",
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