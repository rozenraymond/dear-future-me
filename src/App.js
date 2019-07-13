import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LetterForm from "./LetterForm";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  React.useEffect(() => {
    var i = 0;
    function change() {
      var doc = document.getElementById("root");
      var me = document.getElementById("me");
      var myself = [
        "Hottie",
        "Friend",
        "Champion",
        "Creative",
        "Developer",
        "Hero",
        "Cool Cat",
        "Hustler",
        "Artist",
        "Visionary",
        "You",
        "Grown Up",
        "Me"
      ];
      // var color = ["black", "blue", "brown", "green"];
      // doc.style.backgroundColor = color[i];
      var asset =
        require(`./assets/pattern${i}.png`) || require(`./assets/pattern0.png`);
      doc.style.backgroundImage = `url(${asset})`;
      me.innerText = myself[i] || "Me";
      i = (i + 1) % 12;
    }
    setInterval(change, 5000);
  });
  return (
    <Router>
      <Switch>
        <Route path="/confirmation" component={ConfirmationPage} />
        <Route path="/create-letter" component={LetterForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
