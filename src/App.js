import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null); // Write Your code here
    }, 6000);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#16213E";
      document.body.style.color = "white";
      document.title = "Text Utils - dark mode";
      showAlert("mode changed to darkMode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("mode changed to lightMode", "warning");
    }
  };
  return (
    <Router>

    <div>
      {/* {<Navbar/>} */}
      {/* <Navbar title = "Tarun" aboutText = "about Me"/> */}
      <Navbar
        title="textUtils"
        aboutText="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* try using exact before path if any error occurs this was supported in previous versions of react dom but maybe not in later versions */}
      <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
