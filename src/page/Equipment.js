import React from 'react';
import Mashini1 from "../images/Mashini1.png";
import Mashini2 from "../images/Mashini2.png";
import Mashini3 from "../images/Mashini3.png";
import Mashini4 from "../images/Mashini4.png";

function Equipment() {
    return (
        <div className={'container Equipment my-4'}>
            <div className={'text-center titleFon'}>
                <h3>Наши оборудование</h3>
                <p><span> </span></p>
            </div>
            <div className="row text-center cartonImg py-4 ">
                <div className={'cartonWidth col-lg-3 col-sm-12  col-md-6'}>
                    <img src={Mashini4} alt="Mashini rasm"/>
                    <p className={' pt-4'}>
                        Оборудование для полипропиленовых мешков
                    </p>
                </div>
                <div className={'cartonWidth  col-lg-3 col-sm-12 col-md-6'}>
                    <img src={Mashini3} alt="Mashini rasm"/>
                    <p className={'pt-4 '}>
                        Оборудование для гофрокартона
                    </p>
                </div>
                <div className={'cartonWidth  col-lg-3 col-sm-12 col-md-6'}>
                    <img src={Mashini2} alt="Mashini rasm"/>
                    <p className={' pt-4 '}>
                        Оборудование для полиэтиленовых пакетов
                    </p>
                </div>
                <div className={'cartonWidth  col-lg-3 col-sm-12 col-md-6'}>
                    <img src={Mashini1} alt="Mashini rasm"/>
                    <p className={' pt-4'}>
                        Оборудование для бумажных конусов
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Equipment;