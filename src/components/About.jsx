import { About, AboutBody, AboutImg, AboutText, AboutTextText, AboutTextTitle } from "./styled/about-styled"
import Logo from '../icon/photo-logo.jpg'
import { useEffect } from "react"


export default function AboutSend(){

    return(
    <About>
      <AboutBody>
        <AboutImg>
            <img src={Logo} alt="" style={{width:"100%",height:"100%"}}/>
        </AboutImg>
        <AboutText>
            <AboutTextTitle>Жумаев Озодбек</AboutTextTitle>
            <AboutTextText>Я , Жумаев Озодбек , 21 год. Образования среднее-специальное. Самостоятельно изучал HTML , CSS , Js , React js и адаптивную вёрстку сайтов ( figma ). Изучаю Python. Хотелось бы работать с опытными программистами в команде. Теперь о плохом: Русским языком владею плохо (изучаю). Английским не владею. Опыта работы нет. <br /> ( Согласен на стажировку без оплаты).</AboutTextText>
        </AboutText>
      </AboutBody>
    </About>
    )
}