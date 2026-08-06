const TextInput = ({ name, label, placeholder, value, onInputChange }) => {
    return ( 
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input 
            name={name}
            type="text" 
            placeholder={placeholder} 
            value={value} 
            onChange={onInputChange}
        />
        </div>
     );
}
 
export default TextInput;