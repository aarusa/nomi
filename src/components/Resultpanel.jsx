import ResultCard from "./ResultCard";

const ResultPanel = ({userData}) => {

    const user = userData[0];
    const feet = Number(user.heightFeet);
    const inch = Number(user.heightInch);
    const weight = Number(user.weight);
    const age = Number(user.age);

    const totalInch = feet * 12 + inch;
    const heightInCm = totalInch * 2.54;
    const heightInM = heightInCm / 100;

    const calculateBMI = () => {
        return (weight / (heightInM ** 2)).toFixed(1);
    }

    const calculateBMIClass = () => {
        if (bmi < 18.5) {
            return {
                classification: "Underweight",
                message: "Your BMI is below the healthy range. Consider eating a balanced, nutrient-rich diet and consulting a healthcare professional if you're concerned."
            };
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return {
                classification: "Healthy",
                message: "Great! Your BMI is within the healthy range. Keep up your balanced diet and regular physical activity."
            };
        } else if (bmi >= 25 && bmi <= 29.9) {
            return {
                classification: "Overweight",
                message: "Your BMI is above the healthy range. Regular exercise and healthy eating habits can help you gradually reach a healthier weight."
            };
        } else if (bmi >= 30 && bmi <= 34.9) {
            return {
                classification: "Obesity Class 1 (Moderate)",
                message: "Your BMI falls into Obesity Class 1. Consider speaking with a healthcare professional to create a sustainable nutrition and exercise plan."
            };
        } else if (bmi >= 35 && bmi <= 39.9) {
            return {
                classification: "Obesity Class 2 (Severe)",
                message: "Your BMI falls into Obesity Class 2. It's recommended to seek guidance from a healthcare professional to reduce health risks."
            };
        } else {
            return {
                classification: "Obesity Class 3 (Very Severe)",
                message: "Your BMI falls into Obesity Class 3. Please consult a healthcare professional to develop a safe and personalized health plan."
            };
        }
    };

    const calculateBMR = () => {
        if(user.gender == "female"){
            return ((10 * weight) + (6.25 * heightInCm) - (5 * age) - 161).toFixed(2);
        }else{
            return ((10 * weight) + (6.25 * heightInCm) - (5 * age) + 5).toFixed(2);
        }
    }

    const activityMultipliers = {
        'sedentary': 1.2,
        'lightly-active': 1.375,
        'active': 1.55,
        'highly-active': 1.725,
        'extremely-active': 1.9
    };

    const calcualteTDEE = () => {
        const multiplier = activityMultipliers[user.activity] || 1.2;
        return (bmr * multiplier).toFixed(2);
    }

    const calculateCalories = () => {

        let calories = 0;

        if(user.goal === 'lose-weight'){
            calories = Number(tdee) - 300;
        }else if(user.goal === 'gain-weight'){
            calories = Number(tdee) + 300;
        }else {
            calories = Number(tdee);
        }

        if(user.gender == 'male' && calories < 1500){
            calories = 1500;
        }

        if(user.gender == 'female' && calories < 1200){
            calories = 1200;
        }

        return calories.toFixed(2);
    }

    const bmi = calculateBMI();
    const bmiInfo = calculateBMIClass();
    const bmr = calculateBMR();
    const tdee = calcualteTDEE();
    const calories = calculateCalories();

    return ( 
        <div className="results-card">
            <ResultCard
                title="Body Mass Index (BMI)" 
                val1={bmi} 
                val2={bmiInfo.classification} 
                message={bmiInfo.message}
            />

            <ResultCard
                title="Daily Calorie Target" 
                val1={calories} 
                val2='kcal'
                message="Total calories you need to eat to hit your personal goal."
            />

            <ResultCard
                title="Basal Metabolic Rate (BMR)" 
                val1={bmr} 
                val2='kcal'
                message="The baseline calories your body naturally burns just to keep your organs functioning at complete rest."
            />

            <ResultCard
                title="Total Daily Energy Expenditure (TDEE)" 
                val1={tdee} 
                val2='kcal'
                message="The total calories your body actually burns per day once you add your daily movement and exercise."
            />

        </div>
     );
}
 
export default ResultPanel;