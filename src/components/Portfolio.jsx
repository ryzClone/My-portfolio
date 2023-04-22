import React, { useState } from "react";
import { Portfolio, PortfolioUl, PortfolioText ,PortfolioUl1} from "./styled/portfolio-styled";
import Css from '../img/Css.jpg';
import Harbor from '../img/Harbor.jpg';
import Ipsum from '../img/Ipsum.jpg';
import MoonCach from '../img/Mooncach.jpg';
import Sms from '../img/Sms.jpg';
import "../components/styled/portfolio-styleddd.css"

export default function Portfoliomen() {
    const ImagesArr = [Css, Harbor, Ipsum, MoonCach, Sms];
    const TextArr = ['css анимация - Домашняя страница', 'Приложение, которое делает готовность к чрезвычайным ситуациям простой и удобной. - Домашняя страница', 'Развивайте свой подписной бизнес- Домашняя страница', 'Минималистичный модульный шаблон Webflow. - Домашняя страница', 'SMS-сервис для вашего бизнеса - Домашняя страница'];
    const HrefArr = ['https://cubecss3d.netlify.app', 'https://harbor-maket.netlify.app', 'https://ipsum-maket.netlify.app', 'https://mooncach-maket.netlify.app', 'https://sms-tariflar.netlify.app']
    const [count1, setCount1] = useState(4);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const OnPrev = () => {
        if (count === 0) {
            setCount(ImagesArr.length - 1)
            setCount(TextArr.length - 1)
            setCount(HrefArr.length - 1)
        } else {
            setCount(count - 1)
        }

        if (count1 === 0) {
            setCount1(ImagesArr.length - 1)
        } else {
            setCount1(count1 - 1)
        }

        if (count2 === 0) {
            setCount2(ImagesArr.length - 1)
        } else {
            setCount2(count2 - 1)
        }

    }
    const OnNext = () => {
        if (count === ImagesArr.length - 1) {
            setCount(0)
        } else {
            setCount(count + 1)
        }

        if (count1 === ImagesArr.length - 1) {
            setCount1(0)
        } else {
            setCount1(count1 + 1)
        }

        if (count2 === ImagesArr.length - 1) {
            setCount2(0)
        } else {
            setCount2(count2 + 1)
        }

    }
    return (


        <Portfolio>
            <div className="Btn">
                <div className="prevBtn" onClick={OnPrev}></div>

                <div className="prevHome">
                    <div className="prevHomeCont">
                        <img src={ImagesArr[count1]} alt="" className="prevImg" />
                        <h6 style={{ textAlign: "center" }}>
                            {
                                TextArr[count1]
                            }
                        </h6>
                    </div>
                </div>

                <PortfolioUl>
                    <a href={HrefArr[count]} style={{width:"100%"}}><img src={ImagesArr[count]} alt="" className='PhotoPort' /></a>
                    <PortfolioText>
                        <a href={HrefArr[count]} style={{ textDecoration: "none", color: "#070707" }}>
                            {
                                TextArr[count]
                            }
                        </a></PortfolioText>
                </PortfolioUl>

                <PortfolioUl1>
                    <a href={HrefArr[count+1]}><img src={ImagesArr[count+1]} alt="" className='PhotoPort' /></a>
                    <PortfolioText>
                        <a href={HrefArr[count+1]} style={{ textDecoration: "none", color: "#070707" }}>
                            {
                                TextArr[count+1]
                            }
                        </a></PortfolioText>
                </PortfolioUl1>  
                
                <PortfolioUl1>
                    <a href={HrefArr[count+2]}><img src={ImagesArr[count+2]} alt="" className='PhotoPort' /></a>
                    <PortfolioText>
                        <a href={HrefArr[count+2]} style={{ textDecoration: "none", color: "#070707" }}>
                            {
                                TextArr[count+2]
                            }
                        </a></PortfolioText>
                </PortfolioUl1>  
                
                <PortfolioUl1>
                    <a href={HrefArr[count+3]}><img src={ImagesArr[count+3]} alt="" className='PhotoPort' /></a>
                    <PortfolioText>
                        <a href={HrefArr[count+3]} style={{ textDecoration: "none", color: "#070707" }}>
                            {
                                TextArr[count+3]
                            }
                        </a></PortfolioText>
                </PortfolioUl1> 
                
                 <PortfolioUl1>
                    <a href={HrefArr[count+4]}><img src={ImagesArr[count+4]} alt="" className='PhotoPort' /></a>
                    <PortfolioText>
                        <a href={HrefArr[count+4]} style={{ textDecoration: "none", color: "#070707" }}>
                            {
                                TextArr[count+4]
                            }
                        </a></PortfolioText>
                </PortfolioUl1>

                <div className="prevHome">
                    <div className="prevHomeCont">
                        <img src={ImagesArr[count2]} alt="" className="prevImg" />
                        <h6 style={{ textAlign: "center" }}>
                            {
                                TextArr[count2]
                            }
                        </h6>
                    </div>
                </div>

                <div className="nextBtn" onClick={OnNext}></div>
            </div>
        </Portfolio>
    )
}