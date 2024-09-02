import React, {useState} from 'react'; 
import {FaArrowCircleUp, FaWhatsapp} from 'react-icons/fa'; 
import { Button ,Button1} from './Style';
import './Tab.css' 

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( <>

<div className="bg-warning">
<Button > 
	<FaArrowCircleUp onClick={scrollToTop} 
	style={{display: visible ? 'inline' : 'none'}} /> 
	</Button> 
  
 <a href='https://wa.me/971586150070' target='blank'>  <Button1 className=''><FaWhatsapp style={{display: visible ? 'inline' : 'none'}}  /></Button1></a>


 
</div >


 </>

); 
} 

export default ScrollButton; 
