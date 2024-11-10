import './Chip.css';

interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return (
    <div className="chip">
      <span className="chip-label">{label}</span>
    </div>
  );
};

export default Chip;
