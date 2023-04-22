import styled from "styled-components"

const Skils=styled.div`
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom:20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;
 @media (max-width:768px){
    padding-top: calc(50px + (90 - 50) * ( (100vw - 425px) / (1300 - 425) ));
    padding-bottom: calc(50px + (90 - 50) * ( (100vw - 425px) / (1300 - 425) ));
 }
`;

const SkilsTitle=styled.div`
font-family: 'Gilroy-Bold';
font-size: 34px;
line-height: 42px;
color:#070707;
font-weight: 700;
@media (max-width:768px){
    font-size: calc(30px + (34 - 30) * ( (100vw - 425px) / (1300 - 425) ));
 }
`;

const SkilsText=styled.div`
font-family: 'Gilroy-Medium';
font-size: 18px;
line-height: 22px;
@media (max-width:768px){
    font-size: calc(14px + (18 - 14) * ( (100vw - 425px) / (1300 - 425) ));
 }
`;

const SkilsUl=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 80%;
gap: 20px;
@media (max-width:768px){
   width: calc(100% + (80 - 100) * ( (100vw - 425px) / (1300 - 425) ));
}
`;
const SkilsLi=styled.div`
width: 146px;
height: 186px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
box-shadow: 0px 0px 50px #c1c1c1;
border-radius: 15px;
margin-left: 80px;
:hover{
   transform: scale(1.05);
   cursor: pointer;
}
@media (max-width:768px){
   margin-left: calc(0px + (80 - 0) * ( (100vw - 425px) / (1300 - 425) ));
}
`;
const SkilsLiText=styled.div`
font-family: 'Gilroy-Bold';
font-size: 14px;
line-height: 17px;
color:#828282;
`;
const SkilsLiUl=styled.div`
display: flex;
gap: 9px;

`;
const SkilsLiLi=styled.div``;

export {Skils,SkilsTitle,SkilsText,SkilsUl,SkilsLi,SkilsLiText,SkilsLiUl,SkilsLiLi};