import React from "react";
import { Container, FullBackground } from "./index.style";

const Layout = props => {
  React.useEffect(() => {
    var i = 0;
    function change() {
      var doc = document.getElementById("background");
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
      var asset =
        require(`../assets/pattern${i}.png`) ||
        require(`../assets/pattern0.png`);
      doc.style.backgroundImage = `url(${asset})`;
      if (me) me.innerText = myself[i] || "Me";
      i = (i + 1) % 12;
    }
    setInterval(change, 5000);
  });
  return (
    <FullBackground id="background">
      <Container>{props.children}</Container>
    </FullBackground>
  );
};

export default Layout;
