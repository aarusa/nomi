const SelectInput = ({ name, label, value, onInputChange, options }) => {
    return ( 
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <select
            name={name}
            value={value}
            onChange={onInputChange}
            >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
          </select>
        </div> 
     );
}
 
export default SelectInput;