import React from 'react'
import Speed1 from '../images/Speed1.png'
import badge from '../images/badge 1.png'
import shoppingImg from '../images/shopping-bag 1.png'

export default function Advantages() {
    return (
        <div className='container Advantages my-5' id="advanted">
            <div className={'text-center titleFon my-5'}>
                <h3>Преимущества</h3>
                <p><span> </span></p>
            </div>
            <div className={'row p-2'}>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <div className='radius1'>
                        <img src={Speed1} alt="speed" className='img-advant'/>
                        <div className='radius'>                        </div>
                        </div>
                    <p>ОПЕРАТИВНОСТЬ</p>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                <div className='radius1'>
                    <img src={badge} alt="badge" className='img-advant'/>
                    <div className='radius'>
                        
                    </div>
                </div>
                <p>НАДЕЖНОСТЬ</p>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                <div className='radius1'>
                <img src={shoppingImg} alt="shoppingImg" className='img-advant'/>
                <div className='radius'>
                    
                </div>
                </div>
                <p>ВЫГОДНЫЕ ЦЕНЫ</p>    
                </div>
            
            </div>
        </div>
    )
}
