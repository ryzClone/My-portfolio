import styled from "styled-components";

const About=styled.div`
width: 100%;
height: 90vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
`;

const AboutBody=styled.div`
width:900px;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width:921px){
  flex-wrap: wrap;
}
`;

const AboutImg=styled.div`
width: 100%;
height: 100%;
@media (max-width:921px){
  width: 200px;
  height: 200px;
}
`;

const AboutText=styled.div`
display: flex;
width: 100%;
padding-left: 50px;
flex-direction: column;
align-items: center;
@media (max-width:921px){
    padding-left: 0px;
    margin: 0px 20px;
}
`;

const AboutTextTitle=styled.div`
text-align: center;
font-weight: 700;
margin-bottom: 15px;
font-size: 34px;
color: #070707;
`;

const AboutTextText=styled.div`
text-align: left;
font-weight: 400;
font-size: 16px;
color: #070707;
`;

export {About,AboutBody,AboutImg,AboutText,AboutTextText,AboutTextTitle}