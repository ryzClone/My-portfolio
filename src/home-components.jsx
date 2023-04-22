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
padding: 20px 10px;
display: flex;
align-items: center;
justify-content: space-between;
@media(max-width:768px){
    flex-direction: column;
    gap: 30px;
}
`;

const HeaderLogo=styled.div`
display: flex;
align-items: center;
gap: 30px;
@media(max-width:768px){
    gap: 15px;
}
`;
const HeaderUl = styled.ul`
display: flex;
align-items: center;
gap: 20px;
@media(max-width:600px){
    display: grid;
    grid-template-columns: 100px 100px;
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
color:#94EBDE;
}
@media(max-width:768px){
    font-size: 16px;
    width: 100px;
}
`;

export {Header,HeaderLogo,HeaderUl,HeaderLi,HeaderContainer};