import React, { useEffect, useState } from 'react'

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
      
    </div>
  )
}

export default SecondComponent
