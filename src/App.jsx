import ProfileForm from "./components/ProfileForm";
import ResultsCard from "./components/ResultsCard";

const App = () => {
  return ( 
    <div className="app">
      <h1 className="app-title">Nomi</h1>
      <ProfileForm />
      <ResultsCard />
    </div>
   );
}
 
export default App;