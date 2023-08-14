import React from 'react'
import tgImage  from './images/tgImg.png'

export default function YuborishTgPage({tillar}) {
  return (
    <div className='LongPage'>
        <h1>Oxirgi qadam qoldi!</h1>
        <p>Jonli efirda qatnashish uchun quyidagi tugmani bosib yopiq kanalga qo'shiling!</p>
        <img src="" alt="" />
        <a href={tillar}><img src={tgImage } alt="" /> OBUNA BO'LISH</a>
    </div>
  )
}
