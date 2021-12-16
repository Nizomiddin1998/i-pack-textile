import React from 'react'
import TabPanel from '@mui/lab/TabPanel';
import CarobkaImg1 from '../images/carobka-lg.png'
import CarobkaImg2 from '../images/carobka-md-1.png'
import CarobkaImg3 from '../images/carobka-md-2.png'
import Carton1 from '../images/karton1.png'
import Carton2 from '../images/karton2.png'
import Carton3 from '../images/karton3.png'
import Carton4 from '../images/karton4.png';
import PolitelenG from '../images/politelenG.png';
import PolitelenG1 from '../images/politelenG1.png';
import PolitelenG2 from '../images/politelenG2.png';
import Pacet1 from '../images/pacet1.png'
import Pacet2 from '../images/pacet2.png'
import Pacet3 from '../images/pacet3.png'
import Pacet4 from '../images/pacet4.png'
import XaltaG from '../images/XaltaG.png'
import XaltaG1 from '../images/XaltaG1.png'
import XaltaG2 from '../images/XaltaG2.png'
import xalta1 from '../images/xalta1.png'
import xalta2 from '../images/xalta2.png'
import xalta3 from '../images/xalta3.png'
import xalta4 from '../images/xalta4.png'
import ConusG from '../images/ConusG.png'
import ConusG1 from '../images/ConusG1.png'
import ConusG2 from '../images/ConusG2.png'
import Conus1 from '../images/Conus1.png'
import Conus2 from '../images/Conus2.png'
import Conus3 from '../images/Conus3.png'
import Conus4 from '../images/Conus4.png'


export default function TabPanelComp() {
    return (<div className='tabPanel'>
        <TabPanel value="4">
            <div className='row'>
                <div className='col-lg-6 p-3'>
                    <div className='row'>
                            <div className='col-md-7 PanelImg1'>
                                <img  src={XaltaG} alt="XaltaImg1"/>
                            </div>
                            <div className='col-md-5 PanelImg2' >
                                <img src={XaltaG1} alt="XaltaImg2"/>
                                <img src={XaltaG2} alt="XaltaImg3"/>
                            </div>

                    </div>
                </div>
                <div className='col-lg-6 p-4'>

                        <p>
                            Полипропилен мешки
                        </p>
                        <span className='span'>
                            <p>Основание 2019 год</p>
                            <p>
                                Покупка Ipack textile целесообразно с точки зрения сохранения качества продукции.
                            </p>
                            <p className='py-3'>
                                К тому же, крупногабаритные контейнеры исключают потери сыпучих материалов, таких как:
                                порошкообразные и дисперсные материалы,
                                гранулированные вещества,
                                зернистые продукты,
                                крупно-, средне и мелкокусковых материалы. А так же обеспечивает защиту от окружающей среды и от загрязнений.
                            </p>
                            <a href="#communicationId"><button className='Обратная_связь'> Обратная связь </button></a>
                        </span>

                </div>
                <div className="col-md-12">
                    <div className="row text-center cartonImg py-4 ">
                        <div className={'cartonWidth col-lg-3  col-md-6'}>
                            <img src={xalta1} alt="xalta rasm"/>
                            <p className={' pt-4'}>
                                МЕШКИ ПРОДУКТОВЫЕ ДЛЯ МУКИ, САХАРА
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={xalta2} alt="xalta rasm"/>
                            <p className={'pt-4 '}>
                                МЕШКИ ДЛЯ ХИМИЧЕСКОЙ ПРОДУКЦИИ
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={xalta3} alt="xalta rasm"/>
                            <p className={' pt-4 '}>
                                БИГ БЕГИ - КРУПНОГАБАРИТНЫЕ КОНТЕЙНЕРЫ
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={xalta4} alt="xalta rasm"/>
                            <p className={' pt-4'}>
                                ПОЛИПРОПИЛЕНОВАЯ ВИСОКОПРОЧНАЯ НИТЬ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="1">
            <div className='row'>
                <div className='col-lg-6 p-3'>
                    <div className='row ABS'>

                            <div className='col-md-7  PanelImg1 '>
                                <img src={CarobkaImg1} alt="CarobkaImg1" className='tab_panel'/>
                            </div>
                            <div className='col-md-5 PanelImg2 '>
                                <img src={CarobkaImg2} alt="CarobkaImg2"/>
                                <img src={CarobkaImg3} alt="CarobkaImg3"/>
                            </div>

                    </div>
                </div>
                <div className='col-lg-6 p-4'>

                        <p>
                            Гофракартон
                        </p>
                        <span className='span'>
                            <p>Основание 2009 год</p>
                            <p>
                               Первоначально парк оборудования предприятия был небольшим — одна линия формата 1250 мм по производству гофрокартона и несколько станков по переработке. Работа велась в одну смену.
                            </p>
                            <p>
                                Картонные коробки по индивидуальным размерам!
                                Допустим, что Вам нужны картонные коробки индивидуальных размеров? И так, мы изучим Вашу нишу и Ваш продукт вдоль и поперек.
                                Подготовим и создадим индивидуальную конструкцию для Вас. <br/>
                                Разработаем уникальный дизайн для коробок.
                                Изготовим и привезем готовый образец бесплатно.
                            </p>
                            <a href="#communicationId"><button className='Обратная_связь'> Обратная связь </button></a>
                        </span>

                </div>
                <div className="col-md-12">
                    <div className="row text-center cartonImg py-4 ">
                        <div className={'cartonWidth col-lg-3  col-md-6'}>
                            <img src={Carton1} alt="karobka rasm"/>
                            <p className={' pt-4'}>
                                ТРЕХСЛОЙНЫЙ <br/> ГОФРОКАРТОН
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Carton2} alt="karobka rasm"/>
                            <p className={'pt-4 '}>
                                БЕЛЫЙ <br/> ГОФРОКАРТОН
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Carton3} alt="karobka rasm"/>
                            <p className={' pt-4 '}>
                                ПЯТИСЛОЙНЫЙ <br/> ГОФРОКАРТОН
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Carton4} alt="karobka rasm"/>
                            <p className={' pt-4'}>
                                МИКРОГОФРОКАРТОН
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
            <div className='row'>
                <div className='col-lg-6 p-3'>
                    <div className='row'>

                            <div className='col-md-7 PanelImg1'>
                                <img src={PolitelenG} alt="CarobkaImg1" />
                            </div>
                            <div className='col-md-5 PanelImg2'>
                                <img src={PolitelenG1} alt="CarobkaImg2"/>
                                <img src={PolitelenG2} alt="CarobkaImg3"/>
                            </div>
                    </div>
                </div>
                <div className='col-lg-6 p-4'>
                        <p>
                            Полиэтилен пакеты
                        </p>
                        <span className='span'>
                            <p>
                               Основание 2015 год
                            </p>
                            <p>
                                Мы добавили высокотехнологичное оборудование и качественное сырье, что позволяет получать продукцию наивысшего качества.
                            </p>
                            <p>
                                <ul>
                                    <li>
                                        Удобство в использовании.
                                    </li>
                                    <li>Надежность.</li>
                                    <li>Экологичность.</li>
                                    <li>Практичность.</li>
                                    <li>Простота в утилизации.</li>
                                </ul>
                            </p>
                            <a href="#communicationId"><button className='Обратная_связь'> Обратная связь </button></a>
                        </span>

                </div>
                <div className="col-md-12">
                    <div className="row text-center cartonImg py-4 ">
                        <div className={'cartonWidth col-lg-3  col-md-6'}>
                            <img src={Pacet1} alt="Pacet rasm"/>
                            <p className={' pt-4'}>
                                ПАКЕТ МАЙКА
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Pacet2} alt="Pacet rasm"/>
                            <p className={'pt-4 '}>
                                ФАСОВОЧНЫЕ ПАКЕТ
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Pacet3} alt="Pacet rasm"/>
                            <p className={' pt-4 '}>
                                ПАКЕТ РЕЙТЕР
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Pacet4} alt="Pacet rasm"/>
                            <p className={' pt-4'}>
                                ПОЛИЭТИЛЕНОВАЯ ПАКЕТ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="3">
            <div className='row'>
                <div className='col-lg-6 p-3'>
                    <div className='row'>
                            <div className='col-md-7 PanelImg1'>
                                <img src={ConusG} alt="CarobkaImg1"/>
                            </div>
                            <div className='col-md-5 PanelImg2'>
                                <img src={ConusG1} alt="CarobkaImg2"/>
                                <img src={ConusG2} alt="CarobkaImg3"/>
                            </div>
                    </div>
                </div>
                <div className='col-lg-6 p-4'>
                        <p>
                            Бумажные конус
                        </p>
                        <span className='span'>
                            <p>Основание 2021 год</p>
                            <p>
                                ООО «IPACK TEXTILE» производит бумажные конусы для намотки пряжи на прядильные станки, в том числе классические бумажные конусы.
                            </p>
                            <p>
                               Мы можем формировать и проектировать наши бумажные конусы для каждой деятельности в зависимости от потребностей и требований заказчика.
                            </p>
                            <p >
                                Наша погрешность длины бумажного конуса ±1.0 мм и диаметра основания и верхней части ±0.25 мм.
                            </p>
                            <a href="#communicationId"><button className='Обратная_связь'> Обратная связь </button></a>
                        </span>
                </div>
                <div className="col-md-12">
                    <div className="row text-center cartonImg py-4 ">
                        <div className={'cartonWidth col-lg-3  col-md-6'}>
                            <img src={Conus1} alt="Conus rasm"/>
                            <p className={' pt-4'}>
                                Конус 1-51 и 2-20
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Conus2} alt="Conus rasm"/>
                            <p className={'pt-4 '}>
                                Конус 4-20
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Conus3} alt="Conus rasm"/>
                            <p className={' pt-4 '}>
                                Конус 5-57-68
                            </p>
                        </div>
                        <div className={'cartonWidth  col-lg-3 col-md-6'}>
                            <img src={Conus4} alt="konus rasm"/>
                            <p className={' pt-4'}>
                                Цилиндры
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
    </div>)
}
