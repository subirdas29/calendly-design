import React, { useEffect, useState } from 'react'
import SecondComponentCards from './SecondComponentCards';

const SecondComponent = () => {
    const [allCards,setAllCards] = useState([]);

    useEffect(()=>{
        fetch('Card.json')
        .then(res=>res.json())
        .then(data => setAllCards(data))
    },[])
  return (
    <div className='text-center my-20'>
      <p className='text-sm text-[#006BFE] font-semibold'>SOLUTION</p>
      <p className='text-4xl my-5 font-bold'> Calendly can solve your specfic pain points</p>
      <div className='grid grid-cols-3 gap-4 px-8'>
      {
        allCards.map(card =><SecondComponentCards key={card.id} card = {card}></SecondComponentCards>)
      }
      </div>
      
    </div>
  )
}

export default SecondComponent
