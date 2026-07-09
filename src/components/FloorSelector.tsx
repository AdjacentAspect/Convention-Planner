type Props = {
  selectedFloor: string;
  onChange: (floor: string) => void;
};

function FloorSelector({ selectedFloor, onChange }: Props) {
  return (
    <div className="floor-selector">
      <select
        value={selectedFloor}
        onChange={(e) => onChange(e.target.value)}
      >
        <option>Level 1</option>
        <option>Level 2</option>
        <option>Level 3</option>
        <option>Level 4</option>
      </select>
    </div>
  );
}

export default FloorSelector;