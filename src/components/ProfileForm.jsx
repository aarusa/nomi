import { useState } from "react";

const ProfileForm = () => {
    
    return ( 
        <div className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name" />
        </div> 
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number"min="0" placeholder="Enter age" />
        </div>  
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>  
        <div className="form-group">
          <label htmlFor="height">Height</label>

          <div className="height-inputs">
            <input type="number" min="0" placeholder="Feet" />
            <span>ft</span>

            <input type="number" min="0" placeholder="Inch" />
            <span>in</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" min="0" placeholder="Enter weight in kg" />
        </div>
        <div className="form-group">
          <label htmlFor="purpose">What's your goal?</label>
          <select>
            <option value="lose-weight">🏃 Lose Weight</option>
            <option value="build-muscle">💪 Build Muscle</option>
            <option value="maintain-weight">⚖️ Maintain Weight</option>
            <option value="eat-healthier">🍎 Eat Healthier</option>
          </select>
        </div>  
        <button className="submit-btn">Submit</button>   
      </div>
     );
}
 
export default ProfileForm;