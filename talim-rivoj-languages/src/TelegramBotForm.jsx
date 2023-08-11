import React, { useState } from 'react';
import axios from 'axios';

const TelegramBotForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    til: '',
  });

  const [til, setTil] = useState("Turk")

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //  'YOUR_BOT_API_TOKEN' Bu yerga Telegram bot token API yoziladi
    const apiToken = '6406627293:AAH7VNgJ9r1Y6tqLjBpC7C07VVvtQLeHQ08';
    const chatId = '871299874'; // Telegram user ni ChatId 

    const message = `
      Yengi foydalanuvchi:
      Name: ${formData.name}
      Telefon Raqam: ${formData.tel}
      Til: ${til}
    `;

    try {
      if (formData.name == '', formData.tel == '') {
        alert('iltimos Hamma joylarni toldiring')
      }
      else {
        await axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
          chat_id: chatId,
          text: message,
        });

        // Malumotlarni uzatganizdan keyin input ishidegi malumot ochib ketadi
        setFormData({ name: '', tel: '', setTil: 'Turk' });
      }


    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Ism Familiya" value={formData.name} onChange={handleChange} />
      <input type="tel" name="tel" placeholder="Telefon raqam" value={formData.tel} onChange={handleChange} />
      {/* <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} /> */}
      <div className="">

        <h5 href='#' onClick={() => setTil('Turk')}>turk</h5>
        <h5 href='#' onClick={() => setTil('Engilsh')}>Engilsh</h5>
        <h5 href='#' onClick={() => setTil('Rus')}>Rus</h5>

      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TelegramBotForm;