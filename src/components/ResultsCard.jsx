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

    const calcualteTDEE = () => {
        let acl = 0;
        if(
            user.activity == 'sedentary' ? acl = (bmr * 1.2) : 
            user.activity == 'lightly-active' ? (acl = bmr * 1.375) : 
            user.activity == 'moderately-active' ? (acl = bmr * 1.55) : 
            user.activty == 'very-active' ? (acl = bmr * 1.725) : (acl = bmr * 1.9)
        );
        return acl.toFixed(2);
    }

    const calculateCalories = () => {
        let calories = 0;
        if(
            user.goal == 'lose-weight' ? calories = tdee - 300 :
            user.goal == 'gain-weight' ? calories = tdee + 300 :
            calories = tdee
        )
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
            <p>Daily Calorie Target: {calories} kcal</p>
        </div>
     );
}
 
export default ResultsCard;