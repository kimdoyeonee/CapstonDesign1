import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./pages/NaviBar";
import Home from "./pages/home";
import Exercise from "./pages/exercise";


const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />

      </Routes>
    </div>
  );
};
// app.js

fetch('/api/getData')
  .then(response => response.json())
  .then(data => {
    console.log('Data from server:', data);
    // 여기서 데이터를 활용
  })
  .catch(error => console.error('Error fetching data:', error));



export default App;
