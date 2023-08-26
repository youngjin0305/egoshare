import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Password from "./components/Password";
import Welcome from "./components/Welcome";
import GuildList from "./components/GuildList";
import Guildmembers from "./components/Guildmembers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/password" element={<Password/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/guildlist" element={<GuildList/>}/>
          <Route path="/guild/:guild" element={<Guildmembers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
