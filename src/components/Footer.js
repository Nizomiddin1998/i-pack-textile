import React from 'react'
import Logo from '../images/White 21.svg'
import logoImg from '../images/White2.png'
// import Logo1 from '../images/iPack logo.jpg'
import InstagramIcon from '../images/InstagramIcon.png'
import FaceBoxIcon from '../images/FaceBoxIcon.png' 
import Telegram from '../images/telegram-brands.svg' ;
import iconPhone from '../images/icons8-phone.png'
import iconMail from '../images/icons8-mail.png'
import MobilIcon from '../images/mobile-alt-solid.svg'

export default function Footer() {

    return (
        <div className='container Footer' id="contact">
            <h1 className='text-center mb-5'>Контакты</h1>
            <div className='row'>
                <div className='col-sm-6 my-3 col-md-4'>
                    <img src={logoImg}  alt="logo" className='logoImg '/>
                    <div className='footIcon' >
                        <a href="https://www.facebook.com/ipacktextile">
                            <img src={FaceBoxIcon} alt="FaceboxIcon"/>
                        </a>
                        <a href="https://t.me/ipacktextil" target={"_blank"}  rel="noreferrer">
                            <img width={23} src={Telegram} alt="TelegramIcon"/></a>
                        <a href="https://www.instagram.com/ipacktextileuz/">
                            <img src={InstagramIcon} alt="instagram"/>
                        </a>

                    </div>
                </div> 
                <div className='col-sm-6 contactGroup my-3 col-md-4'>
                    <h4 ><img src={iconPhone} alt="iconPhone"/> <a href="tel:+998903240444"> +99890 324 0444</a></h4>
                    <h4 ><img width={'30'} height={'30'} style={{color: "red"}} src={MobilIcon} alt="iconPhone"/> <a href="tel:+998933760444"> +99893 376 0444</a></h4>
                    <h4 className='mt-4'><img src={iconMail} alt="iconMail"/>
                        <a href="mailto:iPackTextil@mail.ru"> iPackTextil@mail.ru</a>
                    </h4>
                </div> 
                <div className='col-sm-12 my-3 col-md-4 ' >

                    {/*<img src={Logo1} style={{width:'150px'}} alt="logo" className='logoImg'/>*/}
                    <h4 className='footerAddress  text-center'>г.Ташкент, ул.Джаркурганский 76</h4>

                </div> 
            </div>    
        </div>
    )   
}
