import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Password from "./components/Password";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/password" element={<Password/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
