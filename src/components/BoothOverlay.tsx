import type { CSSProperties } from "react";

type Props = {
  onBoothClick: (table: string) => void;
};

type BoothProps = {
  table: string;
  left: number;
  top: number;
  width: number;
  height: number;
  colour?: string;
  onClick: (table: string) => void;
};

function Booth({
  table,
  left,
  top,
  width,
  height,
  colour = "red",
  onClick,
}: BoothProps) {
  const style: CSSProperties = {
    position: "absolute",
    left: `${left}%`,
    top: `${top}%`,
    width: `${width}%`,
    height: `${height}%`,
    background: colour,
    border: "2px solid white",
    opacity: 0.75,
    cursor: "pointer",
    zIndex: 1000,
  };

  return (
    <div
      style={style}
      onClick={() => onClick(table)}
    />
  );
}

function BoothOverlay({ onBoothClick }: Props) {
  return (
    <>
      <Booth
        table="4.E.13"
        left={40}
        top={30}
        width={8}
        height={6}
        onClick={onBoothClick}
      />
    </>
  );
}

export default BoothOverlay;