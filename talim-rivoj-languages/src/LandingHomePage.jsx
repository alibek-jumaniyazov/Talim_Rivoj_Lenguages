import React from 'react'
import video1 from './images/video.mp4'
import img from './images/Logo.png'
import poster1 from './images/oblojka.png'
import { Link } from 'react-router-dom'

export default function LandingHomePage() {


  return (
    <div className='LandingHomePage'>
      {/* Mobila Version */}
      <div className="header">
        <div className="animated-text">
          <div className="line">Turk Tili</div>
          <div className="line">Rus Tili</div>
          <div className="line">Ingliz Tili</div>
        </div>
      </div>
      <div className="main">
        <div className="mainHeaderInfo">
          <p>25 - AVGUST</p>
          <span>Talim Rivoj</span>
        </div>
        <h5 className="mainText">
          1 HAFTA BEPUL DARSDA KUNDALIK MULOQOTINGIZNI CHET TILLARIDA QILISH DARAJASIGA CHIQING
        </h5>
        <div className="mainBigInfo">
          <div className="imgButton">
            {/* <img src={img1} alt="" /> */}
            <div id="video-wrapper">
              <video controls width="300" height="220" poster={poster1} >
                <source src={video1} type='video/mp4' />
              </video>
            </div>
            <Link to={'register'}>  <button>Ro'yxatdan o'tish</button></Link>
          </div>
          <p>Shoshiling! Joylar soni oz qoldi</p>
        </div>
        <div className="mainInfos">
          <p>3 kunlik marafonda:</p>
          <ul>
            <div className="MinInfosLi">
              <li>Qanday qilib chalg'ituvchi dunyoda xotira va diqqatni yaxshilash mumkin?</li>
            </div>
            <div className="MinInfosLi">
              <li>Chet tili so'zlarini tezroq yod olish va IELTS imtihoniga samarali tayyorlanish uchun usullar</li>
            </div>
            <div className="MinInfosLi">
              <li>Qanday qilib kitob o'qish odatini shakllantirish va undagi ma'lumotlarni eslab qolish mumkin?</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footerOne">
          <p className="footerName">TURDIYEV DOVRANBEK</p>
          <span className="academyInfo">(STIR: 549477007) 06.05.2023 yil berilgan № 0003423284-sonli ma’lumotnomaga asosan xizmat ko'rsatadi.</span>
          <p className="phoneNumber">+998 78 113 19 00</p>
          <span className="infoData">Barcha huquqlar himoyalangan, 2023.</span>
        </div>
      </div>
    </div>
  )
}
