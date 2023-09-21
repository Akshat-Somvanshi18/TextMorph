import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dictionary from "./components/Dictionary";
import Translator from "./components/Translator";
import Home from "./components/Home";
import Summarizer from "./components/Summarizer";

function App() {
  let [darkmode, setdarkmode] = useState("light");
  let [alertmsg, setAlertmsg] = useState(null);
  let [btn_mode_name, setbtn_mode_name] = useState("Dark Mode");
  let toggleMode = () => {
    if (darkmode === "light") {
      setdarkmode("dark");
      setbtn_mode_name("Light Mode");
      document.body.style.backgroundColor = "#262323";
      showAlert("Success! Dark Mode Has Been Enabled", "success");
    } else {
      setdarkmode("light");
      setbtn_mode_name("Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Success! Light Mode Has Been Enabled", "success");
    }
  };
  let showAlert = (message, type) => {
    setAlertmsg({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertmsg({ msg: "", type: "none" });
    }, 2000);
  };

  return (
    <>
      <Router basename="/">
        <Navbar
          mode={darkmode}
          toggleMode={toggleMode}
          btn_mode_name={btn_mode_name}
        />
        <Alert alert={alertmsg} mode={darkmode} />
        <Routes>
          <Route exact path="/" element={<Home mode={darkmode} alertfunc={showAlert}/>} />
          <Route exact path="/TextMode" element={<Text mode={darkmode} alertfunc={showAlert} />}/>
          <Route exact path="/Translator" element={<Translator mode={darkmode} alertfunc={showAlert}/>} />
          <Route exact path="/Summarizer" element={<Summarizer alertfunc={showAlert}/>} />
          <Route exact path="/Dictionary" element={<Dictionary mode={darkmode} alertfunc={showAlert}/>} />
          <Route exact path="/About" element={<About mode={darkmode} />} />
          <Route exact path="/Contact" element={<Contact mode={darkmode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
