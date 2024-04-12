import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";

const SecondComponentCards = ({card}) => {
	const {icon,title,description} = card;
  return (

     <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 text-left">
	<img src={icon} alt="" className='w-8 h-8' />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
	</div>
	<p className="dark:text-gray-800">{description}</p>
	<p className=''>Learn more </p>
</div>

  )
}

SecondComponentCards.propTypes ={
	card:PropTypes.object.isRequired
}
export default SecondComponentCards
