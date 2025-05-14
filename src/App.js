import { Routes, Route } from "react-router-dom";
import SignInAndSignUp from "./pages/Sign_in_and_Sign_up";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInAndSignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
