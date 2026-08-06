const NumberInput = ({ name, label, value, min, step, placeholder, onInputChange }) => {
    return ( 
        <div className="form-group">
          <label htmlFor="{name}">{label}</label>
          <input 
            type="number" 
            name={name}
            min={min} 
            step={step}
            placeholder={placeholder}
            value={value}
            onChange={onInputChange}
            />
        </div> 
     );
}
 
export default NumberInput;