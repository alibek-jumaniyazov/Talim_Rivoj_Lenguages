import React from 'react'
import img1 from './img.png'
export default function LandingHomePage() {
  return (
    <div className='LandingHomePage'>

      {/* Mobila Version */}

      <div className="header">
        <p>15-16-17 - IYUN | BEPUL MARAFON</p>
      </div>
      <div className="main">
        <div className="mainHeaderInfo">
          <p>15-16-17 - IYUN</p>
          <span>Dovranbek Turdiev</span>
        </div>
        <h5 className="mainText">
          3 Kun Ichida Har Qanday
          Ma'lumotni Tezroq Eslab Qolishni
          O'rganing!
        </h5>
        <div className="mainBigInfo">
          <div className="imgButton">
            <img src={img1} alt="" />
            <button>Ro'yxatdan o'tish</button>
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
