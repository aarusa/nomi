import { useState } from "react";
import TextInput from "./form/TextInput";
import NumberInput from "./form/NumberInput";
import SelectInput from "./form/SelectInput";
import HeightInput from "./form/HeightInput";

const ProfileForm = ({userData, setUserData}) => {
    
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'male',
        heightFeet: '',
        heightInch: '',
        weight: '',
        target: '',
        goal: 'lose-weight',
        activity: 'sedentary',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if(!formData.age || !formData.gender || !formData.weight || !formData.heightFeet || !formData.heightInch ) return;

        // Create new user
        const newUserData = {id: Date.now(), ...formData};

        // Add user to state
        setUserData([newUserData, ...userData]);

        // Reset form data
        // setFormData({
        //     name: '',
        //     age: '',
        //     gender: 'male',
        //     heightFeet: '',
        //     heightInch: '',
        //     weight: '',
        //     target: '',
        //     goal: 'lose-weight',
        //     activity: 'sedentary',
        // });
    }

    return ( 
        <form onSubmit={handleSubmit} className="profile-form">

            <TextInput 
                name="name" 
                label="Name" 
                value={formData.name} 
                placeholder="Enter name" 
                onInputChange={handleChange} 
            />

            <NumberInput 
                name="age" 
                label="Age" 
                min="0"
                step="1"
                value={formData.age} 
                placeholder="Enter age" 
                onInputChange={handleChange} 
            /> 

            <SelectInput
                name="gender"
                label="Biological Sex"
                value={formData.gender}
                onInputChange={handleChange}
                options={[
                    {value: 'male', label: 'Male'},
                    {value: 'female', label: 'Female'},
                ]}
            /> 

            <HeightInput 
                label="Height"
                feet={formData.heightFeet}
                inch={formData.heightInch}
                onInputChange={handleChange}
            />

            <NumberInput 
                name="weight" 
                label="Weight (kg)" 
                min="0"
                step="any"
                value={formData.weight} 
                placeholder="Enter weight in kg" 
                onInputChange={handleChange} 
            />  

            <NumberInput 
                name="target" 
                label="Target Weight (kg)" 
                min="0"
                step="any"
                value={formData.target} 
                placeholder="Enter your target weight in kg" 
                onInputChange={handleChange} 
            /> 

            <SelectInput
                name="goal"
                label="What's your goal"
                value={formData.goal}
                onInputChange={handleChange}
                options={[
                    {value: 'lose-weight', label: '🏃 Lose Weight'},
                    {value: 'maintain-weight', label: '⚖️ Maintain Weight'},
                    {value: 'gain-weight', label: '💪 Gain Muscle / Gain Weight'},
                ]}
            /> 

            <SelectInput
                name="activity"
                label="What's your activity level"
                value={formData.activity}
                onInputChange={handleChange}
                options={[
                    {value: 'sedentary', label: 'Sedentary / Little to No Exercise (Less than 5,000 steps per day)'},
                    {value: 'lightly-active', label: 'Lightly Active / 1–3 Days a Week (5,000–8,000 steps per day)'},
                    {value: 'active', label: 'Active / 3–5 Days a Week (8,000–12,000 steps per day)'},
                    {value: 'higly-active', label: 'Highly Active / 6–7 Days a Week (Over 12,000 steps per day)'},
                    {value: 'extremely-active', label: 'Extremely Active / Athlete / Heavy Physical Labor'},

                ]}
            /> 

            <button className="submit-btn">Submit</button>   
      </form>
     );
}
 
export default ProfileForm;