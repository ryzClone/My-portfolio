import React from "react";
import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";

import Logo from "./icon/photo-logo.jpg";
import "./app.css"
import AboutSend from "./components/About"
import ContactsMen from "./components/Contacts"
import Portfoliomen from "./components/Portfolio"
import Skils from "./components/Skils"
import { Header,HeaderLogo,HeaderUl,HeaderLi, HeaderContainer } from "./home-components";
function App() {

  return (
    <div>
      <Router>
        <Header>
          <HeaderContainer>
          <HeaderLogo>
            <a href="/"><img src={Logo} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></a>
            <h2 style={{ color: "#fff" }}>Ozodbek</h2>
          </HeaderLogo>
          <HeaderUl>
            <NavLink  to="/" exact style={{ textDecoration: 'none' }}><HeaderLi>Oбо мне</HeaderLi></NavLink>
            <NavLink  to="/skils" style={{ textDecoration: 'none' }}><HeaderLi>Изучал </HeaderLi></NavLink>
            <NavLink  to="/portfolio" style={{ textDecoration: 'none' }}><HeaderLi>Портфолио </HeaderLi></NavLink>
            <NavLink  to="/contacts" style={{ textDecoration: 'none' }}><HeaderLi>Контакты </HeaderLi></NavLink> 
          </HeaderUl>
          </HeaderContainer>
        </Header>

        <Route path="/" exact component={AboutSend}/>
        <Route path="/contacts" component={ContactsMen} />
        <Route path="/skils" exact component={Skils} />
        <Route path="/portfolio" component={Portfoliomen} />


      </Router>
    </div>
  );
}

export default App;
