interface LimitSelectorProps {
  limit: number;
  onLimiChange: (limit: number) => void;
}

const LimitSelector = ({ limit, onLimiChange }: LimitSelectorProps) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Limit:</label>
      <select id="limit" value={limit} onChange={(e) => onLimiChange(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
 
export default LimitSelector;