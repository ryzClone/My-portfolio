import styled from "styled-components";

const Header = styled.div`
width: 100%;
height: 100%;
background-color: #333;
`;

const HeaderContainer=styled.div`
margin: auto;
width: 80%;
height: 100%;
padding: 10px 10px;
display: flex;
align-items: center;
justify-content: space-between;
@media(max-width:768px){
    gap: 30px;
    flex-direction: column;
}
`;
const HeaderLogoBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const HeaderLogo=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
@media(max-width:768px){
    gap: 15px;
}
`;

const HeaderUl = styled.ul`
display: flex;
align-items: center;
left: 0;
gap: 20px;
@media(max-width:768px){
    display: none;
    gap: 5px;
}
`;
const HeaderLi=styled.li`
list-style: none;
font-size: 18px;
color: #fff;
padding: 5px;
:hover{
    cursor: pointer;
    transform: scale(1.1);
    color:#F9C627;
}

@media(max-width:768px){
    font-size: 16px;
    width: 100px;
    display: block;
}
`;


const Hamburger = styled.div`
    width: 32px;
    height: 30px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3px;
    cursor: pointer;
    :hover{
        transform:scale(1.1);
    }
    @media (max-width: 768px){
        display: flex;
    }
`;

const HamburgerSpan = styled.div`
    display: block;
    width: 100%;
    height: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
`;

export {Header,HeaderLogo,HeaderUl,HeaderLi,HeaderContainer , Hamburger , HamburgerSpan , HeaderLogoBody};