function BoothOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        left: "40%",
        top: "30%",
        width: "120px",
        height: "120px",
        background: "red",
        border: "5px solid cyan",
        zIndex: 999999,
      }}
    />
  );
}

export default BoothOverlay;