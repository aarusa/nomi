import { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ResultPanel from "./components/ResultPanel";

const App = () => {

  const [userData, setUserData] = useState([]);

  return ( 
    <div className="app">
      <h1 className="app-title">Nomi</h1>
      <ProfileForm userData={userData} setUserData={setUserData} />
      {userData.length > 0 && 
        <ResultPanel userData={userData} />
      }
      
    </div>
   );
}
 
export default App;