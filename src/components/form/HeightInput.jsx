const HeightInput = ({ label, feet, inch, onInputChange }) => {
    return ( 
        <div className="form-group">
          <label htmlFor="heightFeet">{label}</label>

          <div className="height-inputs">
            <input 
                name="heightFeet"
                type="number" 
                min="0" 
                placeholder="Feet" 
                value={feet}
                onChange={onInputChange}
            />
            <span>ft</span>

            <input 
                name="heightInch"
                type="number" 
                min="0" 
                placeholder="Inch"
                value={inch} 
                onChange={onInputChange}
            />
            <span>in</span>
          </div>
        </div>
     );
}
 
export default HeightInput;