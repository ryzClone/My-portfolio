import React from "react"
import { Contacts, ContactsTop, ContactsBottom, ContactsTopTitle, ContactsTopText, ContactsTopBottom, ContactsBottomUl, ContactsBottomLi, ContactsBottomText } from "./styled/contacts-styled"
import instagram from '../icon/instagram.png';
import telegram from '../icon/telegram.png';
import gmail from '../icon/gmail.png';
export default function ContactsMen() {
    return (
        <Contacts id='contacts'>
            <ContactsTop>
                <ContactsTopTitle>Контакты</ContactsTopTitle>
                <ContactsTopText>
                    Хотите узнать больше или просто поболтать? Пожалуйста!
                </ContactsTopText>
                <ContactsTopBottom><a href="https://t.me/jumayevvvv" style={{ textDecoration: "none", color: "#fff" }}>Отправить сообщение</a></ContactsTopBottom>
            </ContactsTop>
            <ContactsBottom>
                <ContactsBottomUl>
                    <ContactsBottomLi>
                        <a href="https://www.instagram.com/jumayev_v/">
                            <img src={instagram} alt="" width='30px' height='30px' />
                        </a>
                    </ContactsBottomLi>
                    <ContactsBottomLi>
                        <a href="https://t.me/jumayevvvv">
                            <img src={telegram} alt="" width='30px' height='30px' />
                        </a>
                    </ContactsBottomLi>
                    <ContactsBottomLi>
                        <a href="https://mail.google.com/mail/u/0/#inbox">
                            <img src={gmail} alt="" width='30px' height='30px' />
                        </a>
                    </ContactsBottomLi>
                </ContactsBottomUl>
                <ContactsBottomText>
                    <a href="tel:996032141" style={{ textDecoration: "none", color: "#070707" }}>Тел: (+99) 603 - 21 - 41</a> <br /> <br />
                    <a href="tel:977144595" style={{ textDecoration: "none", color: "#070707" }}>Тел: (+97) 714 - 45 - 95</a>
                </ContactsBottomText>
            </ContactsBottom>
        </Contacts>
    )
}