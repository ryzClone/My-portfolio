import styled from "styled-components";

const Portfolio = styled.div`
width: 100%;
height: 84.5vh;
background-color: #f6f6f6;

position: relative;
@media (max-width:1200px){
    background-color: #fff;
    position: none;
}
`;

const PortfolioUl=styled.div`
width: 50%;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 44px;
padding: 20px;
box-shadow: 1px 1px 50px #c1c1c1;
border-radius: 15px;
@media (max-width:1200px){
    width:90%;
}
`;
const PortfolioUl1=styled.div`
width: 50%;
height: 400px;
display: none;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 44px;
padding: 20px;
box-shadow: 1px 1px 50px #c1c1c1;
border-radius: 15px;
@media (max-width:1200px){
    display: flex;
    width:90%;
}
`;
const PortfolioText=styled.div`
font-family: 'Gilroy-Medium';
font-size: 18px;
line-height: 22px;
text-align: center;
color: #070707;
@media (max-width:768px){
    font-size: calc(14px + (18 - 14) * ( (100vw - 425px) / (1300 - 425) ));
 }
 cursor: pointer;
    border-radius: 15px;
    transition: all 0.1s ease;
:hover{
    transform: scale(1.05);
}
`;

export {Portfolio,PortfolioUl,PortfolioText,PortfolioUl1};