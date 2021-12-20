import React, {useEffect, useState} from 'react';
import CountUp from "react-countup";
import {doGet} from "../axiosP/servise";

function Results() {
    const [result, setResult] = useState({})

    async function getUsers() {
        const res = await doGet()
        setResult(res)
    }
    console.log(result, 'data')
    useEffect(()=>{
        getUsers()
    },[])


    return (
        <div className={'results container mt-5'}>
            <div className={'text-center titleFon'}>
                <h3>Наши результаты</h3>
                <p><span> </span></p>
            </div>
            <div className={'row mt-3 '}>
                <div className=" col-sm-6 pruduct_count col-lg-3 d-flex  pt-2">
                   <div className={' CountColor'}>
                       <h1><CountUp start={0} end={result?.employees} duration={3}/>+</h1>
                       <p> </p>
                       <span className={'info'}>Сотрудники</span>
                   </div>
                </div>
                <div className=" col-sm-6 pruduct_count col-lg-3 d-flex  pt-2 ">
                    <div className="CountColor">
                        <h1><CountUp start={0} end={result?.market_day} duration={7}/>+</h1>
                        <p> </p>
                        <span className={'info '}>День в рынке</span>
                    </div>
                </div>
                <div className=" col-sm-6 pruduct_count col-lg-3 d-flex  pt-2 ">
                    <div className="CountColor">
                        <h1><CountUp start={0} end={result?.tons_products_year} duration={5}/>+</h1>
                        <p> </p>
                        <span className={'info'}>
                            Тонны продукты в год
                    </span>
                    </div>
                </div>
                <div className="col-sm-6 pruduct_count col-lg-3 d-flex  pt-2 ">
                    <div className="CountColor">
                        <h1><CountUp start={0} end={result?.partners} duration={4}/>+</h1>
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