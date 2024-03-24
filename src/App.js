import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";

import Logo from "./icon/photo-logo.jpg";
import "./app.css"
import AboutSend from "./components/About"
import ContactsMen from "./components/Contacts"
import Portfoliomen from "./components/Portfolio"
import Skils from "./components/Skils"
import { Header,HeaderLogo,HeaderUl,HeaderLi, HeaderContainer, Hamburger, HamburgerSpan, HeaderLogoBody } from "./home-components";
function App() {
  const [active , NotActive] = useState(false);

  useEffect(() => {
    alert('Напоминаем вам! Если при использовании сайта размер экрана вашего телефона меньше 555 пикселей, наш сайт не адаптируется на экране вашего телефона!!!');
  }, []);


  const MenuClick = () => {
    isActive(!active);
    NotActive(!active);
  };

  // Holatni tekshirish va yangilash funksiyasi
  const isActive = (isActive) => {
    console.log(isActive);
    const hamburgerSpans = document.querySelectorAll('.HamburgerSpan');

    document.getElementById('HeaderUl').style.display = active ? "none" : 'flex' ;

    if (isActive) {
      hamburgerSpans[0].style.transform = 'translateY(8px) rotate(45deg)';
      hamburgerSpans[1].style.opacity = '0';
      hamburgerSpans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      hamburgerSpans[0].style.transform = 'translateY(0px) rotate(0deg)';
      hamburgerSpans[1].style.opacity = '1';
      hamburgerSpans[2].style.transform = 'translateY(0px) rotate(0deg)';
    }
  };

  return (
    <div>
      <Router>
        
        <Header>
          <HeaderContainer>

         <HeaderLogoBody>

            <HeaderLogo>
              <img src={Logo} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <h2 style={{ color: "#fff" }}>Озодбек</h2>
            </HeaderLogo>

            
            <Hamburger onClick={() => MenuClick()}>

              <HamburgerSpan className="HamburgerSpan"/>
              <HamburgerSpan className="HamburgerSpan"/>
              <HamburgerSpan className="HamburgerSpan"/>

            </Hamburger>

         </HeaderLogoBody>

            <HeaderUl id="HeaderUl">
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
