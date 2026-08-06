const ResultsCard = ({userData}) => {

    const user = userData[0];
    const feet = Number(user.heightFeet);
    const inch = Number(user.heightInch);
    const weight = Number(user.weight);
    const age = Number(user.age);

    const totalInch = feet * 12 + inch;
    const heightInCm = totalInch * 2.54;
    const heightInM = heightInCm / 100;

    const calculateBMI = () => {
        return (weight / (heightInM ** 2)).toFixed(2);
    }

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
    const bmr = calculateBMR();
    const tdee = calcualteTDEE();
    const calories = calculateCalories();

    return ( 
        <div className="results-card">
            <p>Body Mass Index (BMI): {bmi} (Healthy)</p>
            <p>Basal Metabolic Rate (BMR): {bmr} kcal</p>
            <p>Total Daily Energy Expenditure (TDEE): {tdee} calories per day</p>
            <p>Daily Calorie Target: {calories} kcal per day</p>
        </div>
     );
}
 
export default ResultsCard;