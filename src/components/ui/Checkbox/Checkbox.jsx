const Checkbox = ({ value, onChange, checked }) => {
  return (
    <label>
      {value}
      <input type='checkbox' checked={checked} value={value} onChange={onChange} />
    </label>
  );
};

export default Checkbox;
