import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";

const SecondComponentCards = ({card}) => {
	const {icon,title,description} = card;
  return (

     <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 text-left relative">
	<img src={icon} alt="" className='w-10 h-10' />

	<div className="mt-4 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
	</div>
	
	<p className="dark:text-gray-800 mt-6 mb-12">{description}</p>
	<div className='flex  items-center text-[#006BFE] font-bold absolute bottom-6 '>
	<p className=''>Learn more  </p><FaAngleRight className='pt-1 ml-2' />
	
	</div>
</div>

  )
}

SecondComponentCards.propTypes ={
	card:PropTypes.object.isRequired
}
export default SecondComponentCards
