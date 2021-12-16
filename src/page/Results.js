import React from 'react';
import CountUp from "react-countup";

function Results() {
    return (
        <div className={'results container mt-5'}>
            <div className={'text-center titleFon'}>
                <h3>Наши результаты</h3>
                <p><span> </span></p>
            </div>
            <div className={'row mt-3 '}>
                <div className=" col-sm-6 pruduct_count col-lg-3 d-flex  pt-2">
                   <div className={' CountColor'}>
                       <h1><CountUp start={0} end={100} duration={3}/>+</h1>
                       <p> </p>
                       <span className={'info'}>Сотрудники</span>
                   </div>
                </div>
                <div className=" col-sm-6 pruduct_count col-lg-3 d-flex  pt-2 ">
                    <div className="CountColor">
                        <h1><CountUp start={0} end={9000} duration={7}/>+</h1>
                        <p> </p>
                        <span className={'info '}>День в рынке</span>
                    </div>
                </div>
                <div className=" col-sm-6 pruduct_count col-lg-3 d-flex  pt-2 ">
                    <div className="CountColor">
                        <h1><CountUp start={0} end={1000} duration={7}/>+</h1>
                        <p> </p>
                        <span className={'info'}>
                            Тонны продукты в год
                    </span>
                    </div>
                </div>
                <div className="col-sm-6 pruduct_count col-lg-3 d-flex  pt-2 ">
                    <div className="CountColor">
                        <h1><CountUp start={0} end={50} duration={4}/>+</h1>
                        <p> </p>
                        <span className={'info'}>
                        Партнеры
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;