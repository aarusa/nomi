import { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ResultsCard from "./components/ResultsCard";

const App = () => {

  const [userData, setUserData] = useState([]);

  return ( 
    <div className="app">
      <h1 className="app-title">Nomi</h1>
      <ProfileForm userData={userData} setUserData={setUserData} />
      <ResultsCard />
    </div>
   );
}
 
export default App;