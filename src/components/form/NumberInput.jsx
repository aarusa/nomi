const NumberInput = ({ name, label, value, min, placeholder, onInputChange }) => {
    return ( 
        <div className="form-group">
          <label htmlFor="{name}">{label}</label>
          <input 
            type="number" 
            name={name}
            min={min} 
            placeholder={placeholder}
            value={value}
            onChange={onInputChange}
            />
        </div> 
     );
}
 
export default NumberInput;