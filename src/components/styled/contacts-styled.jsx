import styled from "styled-components";

const Contacts=styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 50px 0px;
`;

const ContactsBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 40px;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(26, 26, 26, 0.1);
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

// Modal ############################################################

const ModalOpacity = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    overflow: auto;
`;

const ModalBody = styled.div`
    background-color: #fefefe; 
    margin: auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 5px;
    position: relative;

    @media(max-width:921px){
        width: calc(40% + (90% + 40%) * ((100vw - 555px) / (1920px - 555px)));
    }
`;

const ModalTitle = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`;

const ModalBodySubtitle = styled.input`
    width: 100%;
    padding: 5px 0px 5px 10px;
    border: 1px solid #c1c1c1;
    :focus{
        outline: none;
    }
`;

const ModalBodyTitle = styled.input`
    width: 100%;
    padding: 5px 0px 5px 10px;
    border: 1px solid #c1c1c1;
    :focus{
        outline: none;
    }
`;

const ModalBodyText = styled.textarea`
    width: 100%;
    height: 100px; 
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    resize: vertical; 
    font-size: 14px; 
    font-family: Arial, sans-serif; 
    :focus{
        outline: none;
    }
`;

const ModalClose = styled.div`
    color: red;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
`;


export {
    Contacts,ContactsTop,ContactsBottom,ContactsTopTitle,ContactsTopText,ContactsTopBottom,
    ContactsBottomUl,ContactsBottomLi,ContactsBottomText , ContactsBody , ModalOpacity , ModalBody, 
    ModalBodySubtitle , ModalBodyTitle , ModalBodyText , ModalTitle , ModalClose
};