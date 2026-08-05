const App = () => {
  return ( 
    <div>
      <h1>Nomi</h1>
      <div className="user-details">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name" />
        </div> 
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" placeholder="Enter age" />
        </div>  
        <div>
          <label htmlFor="gender">Gender</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>  
        <div>
          <label htmlFor="height">Height</label>
          <input type="text" placeholder="Feet" />ft
          <input type="text" placeholder="Inch" />in
        </div>  
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input type="text" placeholder="Enter weight in kg" />
        </div>
        <button>Submit</button>   
      </div>
      <div className="display-details">
        <p>Calories required: 1245 cal</p>
        <p>BMI: 28 (Healthy)</p>
      </div>
    </div>
   );
}
 
export default App;