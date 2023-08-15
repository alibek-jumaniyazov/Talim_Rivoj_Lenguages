import React, { useState } from 'react';
import axios from 'axios';
import img1 from './images/Logo.png'
import { Link } from 'react-router-dom';

const TelegramBotForm = ({ setTillar, tillar }) => {

  const [tekshiruv, setTekshiruv] = useState(false);
  const [tuman, setTuman] = useState('Urganch shahri');

  const [formData, setFormData] = useState({
    name: '',
    tel: '+998 ',
    til: '',
  });

  const [til, setTil] = useState("Turk")
  const [color, setColor] = useState({
    turk: 'black',
    engilsh: 'white',
    rus: 'black'
  })
  const [left, setLeft] = useState(0)


  function Engilsh() {
    setTil('English')
    setTillar("https://t.me/+LNT3E33_0IYyYzZi")
    setLeft(0)
    setColor({
      turk: 'black',
      engilsh: 'white',
      rus: 'black'
    })
  }
  function Turk() {
    setTil('Turk')
    setTillar("https://t.me/+gSrDzdbWQac1NmYy")
    setLeft(34)
    setColor({
      turk: 'white',
      engilsh: 'black',
      rus: 'black'
    })
  }
  function Rus() {
    setTil('Rus')
    setTillar("https://t.me/+08inHuxoGCUyNWFi")
    setLeft(66)
    setColor({
      turk: 'black',
      engilsh: 'black',
      rus: 'white'
    })
  }



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //  'YOUR_BOT_API_TOKEN' Bu yerga Telegram bot token API yoziladi
    const apiToken = '6406627293:AAH7VNgJ9r1Y6tqLjBpC7C07VVvtQLeHQ08';
    const chatId = '2119173106'; // Telegram user ni ChatId 
    
    const message = `
      Yangi foydalanuvchi:  
      Name: ${formData.name}
      Telefon Raqam: ${formData.tel}
      Yashash joyi: ${tuman}
      Til: ${til}
    `;

    try {
      if (formData.name == '', formData.tel == '+998 ') {
        alert('iltimos Hamma joylarni toldiring')
      }
      else {
        await axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
          chat_id: chatId,
          text: message,
        });
        setTekshiruv(true);
        // Malumotlarni uzatganizdan keyin input ishidegi malumot ochib ketadi
        setFormData({ name: '', tel: '+998 ', setTil: 'Turk' });
      }


    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  if (formData.name == ! '', formData.tel == ! '+998 ') {
    setTekshiruv(true);
  }


  return (
    <div className="Modal">
      <div className="modalHeader">
        <img src={img1} alt="" />
      </div>
      <form onSubmit={handleSubmit} className='ModalBox'>
        <Link to={"/"}> <i className="fa-solid fa-xmark" onClick={() => closeModal()}></i> </Link>
        <p className="modalInfo">
          Ro'yxatdan o'tish uchun
          ma'lumotlaringizni
          kiriting!
        </p>
        <div className="modalInputs">
          <div className="inputTitle">
            <p>Ism Familiya</p>
            <input type="text" name="name" placeholder="Ism Familiya" value={formData.name} onChange={handleChange} />
            <div className="inputTitle">
              <p>Telefon raqamingiz</p>
              <input type="tel" name="tel" placeholder="Telefon raqam" value={formData.tel} onChange={handleChange} />
            </div>
            <div className="inputTitle">
              <p>Tumanni Tanglang</p>
              <select className='selectViloyat' onChange={(e) => setTuman(e.target.value)}>
                <option value="Urganch shahri">Urganch Shahri</option>
                <option value="Xonqa Tumani">Xonqa</option>
                <option value="Khiva">Khiva</option>
                <option value="Qo'shko'pir Tumani">Qo'shko'pir</option>
                <option value="Xazorasp Tumani">Xazorasp</option>
                <option value="Bog'ot Tumani">Bog'ot </option>
                <option value="Gurlan Tumani">Gurlan</option>
                <option value="Yangiariq Tumani">Yangiariq</option>
                <option value="Yangibozor Tumani">Yangibozor</option>
                <option value="Tumani">Shovot</option>
              </select>
            </div>
          </div>
          <p className="tanlash">Tilni tanlang</p>
          <div className="Languages">
            <div className="BgDiv" style={{ left: `${left}%` }}></div>
            <h5 href='#' onClick={() => Engilsh()} style={{ color: color.engilsh }}>Ingilz Tili</h5>
            <h5 href='#' onClick={() => Turk()} style={{ color: color.turk }}>Turk Tili</h5>
            <h5 href='#' onClick={() => Rus()} style={{ color: color.rus }} >Rus Tili</h5>
          </div>
        </div>
        {tekshiruv ? (
          <button type="submit" className='modalButton'>
            <Link to={"tgkanal"}>  Yuborish </Link>
          </button>
        ) : (
          <button type="submit" className='modalButton'>
            Yuborish
          </button>
        )}
      </form>
    </div>
  );
};

export default TelegramBotForm;