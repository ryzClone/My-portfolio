import styled from "styled-components";

const Contacts=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 50px 0px;
`;

// ###########################################################################################################################

const ContactsTop=styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
@media (max-width:1320px){
    gap: calc(20px + (40 - 20) * ( (100vw - 425px) / (1300 - 425) ));
}
`;
const ContactsTopTitle=styled.div`
font-family: 'Gilroy-Bold';
font-size: 34px;
line-height: 42px;
color: #070707;
font-weight: 700;
@media (max-width:768px){
    font-size: calc(30px + (34 - 30) * ( (100vw - 425px) / (1300 - 425) ));
 }
`;
const ContactsTopText=styled.div`
font-family: 'Gilroy-Medium';
font-size: 18px;
line-height: 22px;
color: #070707;
text-align: center;
@media (max-width:768px){
    font-size: calc(14px + (18 - 14) * ( (100vw - 425px) / (1300 - 425) ));
 }
`;
const ContactsTopBottom=styled.div`
padding: 10px 30px;
background-color: #070707;
color: #fff;
border-radius: 50px;
font-size: 18px;
font-weight: 700;
font-family: 'Gilroy-Bold';
transition: all .3s ease;
cursor: pointer;
:hover{
    transform: scale(1.05);
    background-color: #202020;
}
`;

// ###########################################################################################################################

const ContactsBottom=styled.div`
display: flex;
flex-direction: column;
gap: 45px;
align-items: center;
justify-content: center;
margin-top: 50px;
`;

const ContactsBottomUl=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
`;

const ContactsBottomLi=styled.div`
cursor: pointer;
transition: all 0.2s ease;
:hover{
    transform: scale(1.1);
}
`;

const ContactsBottomText=styled.div`
font-family: 'Gilroy-Medium';
font-size: 14px;
line-height: 17px;
`;
export {Contacts,ContactsTop,ContactsBottom,ContactsTopTitle,ContactsTopText,ContactsTopBottom,
    ContactsBottomUl,ContactsBottomLi,ContactsBottomText};