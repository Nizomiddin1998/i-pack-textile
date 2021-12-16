import React,{useState} from 'react';
import Logo from '../images/White2.png'
import HeadPhone from '../images/HeadPhone.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [state, setState] = useState(false)
    return (
        <>
        <div className={' d-flex navbar Navbar align-items-center'} >
            <div className='container' >
            <img src={Logo} alt="Logo" className='Logo'/>
            
            <ul className="list_navbar">
                <li><a href="#company">О КОМПАНИИ</a></li>
                <li><a href="#product">ПРОИЗВОДСТВО</a></li>
                <li><a href="#advanted">КАТАЛОГ ПРОДУКЦИИ</a></li>
                <li><a href="#contact">КОНТАКТЫ</a></li>
            </ul>
            <span className={'phoneNumber'} >
                <img src={HeadPhone} alt="HeadPhone icon"/>
                <a href="tel:+998903240444">+99890 324 04 44</a>
            </span>
            <div className="navbar_btn">
                <><MenuIcon onClick={()=>setState(true)} className='btn_menu'/></>
            </div>
        </div>
            
        
            </div>
            <div className="media_navbar" style={state ? {right:'0'}:{right:'100%'}}>
                <div>
                <button className='btn btnClose text-white' onClick={()=>setState(false)}>
                            <CloseIcon className='btnClose'/>
                            </button> 
                </div>
                <div className='row mt-5'>
                        <div className='col-md-12 d-flex justify-content-center align-items-center'>
                            <div>
                            <h2 onClick={()=>setState(false)}><a href="#company">О КОМПАНИИ</a></h2>
                            <h2 onClick={()=>setState(false)}><a href="#product">НАШИ ПРОДУКТЫ</a></h2>
                            <h2 onClick={()=>setState(false)}><a href="#advanted">ПРЕМУЩЕСТВА</a></h2>
                            <h2 onClick={()=>setState(false)}><a href="#contact">КОНТАКТЫ</a></h2>
                            <h2 onClick={()=>setState(false)}><a href="#communicationId">ЗАКАЗАТЬ ЗВОНОК</a></h2>
                            <h2><img src={HeadPhone} alt="HeadPhone icon"/> +99890 324 04 44</h2>
                            </div>
                        </div>
                        
                    
                </div>
            </div>
            </>
    );
}

export default Navbar;