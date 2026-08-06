import { useState } from "react";
import TextInput from "./form/TextInput";
import NumberInput from "./form/NumberInput";
import SelectInput from "./form/SelectInput";
import HeightInput from "./form/HeightInput";

const ProfileForm = ({userData, setUserData}) => {
    
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'Male',
        heightinf: '',
        heightini: '',
        weight: '',
        goal: '🏃 Lose Weight'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    return ( 
        <div className="profile-form">

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
            value={formData.age} 
            placeholder="Enter age" 
            onInputChange={handleChange} 
        /> 

        <SelectInput
            name="gender"
            label="Gender"
            value={formData.gender}
            onInputChange={handleChange}
            options={[
                {value: 'male', label: 'Male'},
                {value: 'female', label: 'Female'},
                {value: 'others', label: 'Others'}
            ]}
        /> 

        <HeightInput 
            label="Height"
            feet={formData.heightinf}
            inch={formData.heightini}
            onInputChange={handleChange}
        />

        <NumberInput 
            name="weight" 
            label="Weight (kg)" 
            min="0"
            value={formData.weight} 
            placeholder="Enter weight in kg" 
            onInputChange={handleChange} 
        />  

        <SelectInput
            name="goal"
            label="What's your goal"
            value={formData.goal}
            onInputChange={handleChange}
            options={[
                {value: 'lose-weight', label: '🏃 Lose Weight'},
                {value: 'build-muscle', label: '💪 Build Muscle'},
                {value: 'maintain-weight', label: '⚖️ Maintain Weight'},
                {value: 'eat-healthier', label: '🍎 Eat Healthier'},
            ]}
        /> 

        <button className="submit-btn">Submit</button>   
      </div>
     );
}
 
export default ProfileForm;