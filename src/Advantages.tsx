import React from 'react';
import './Advantages.scss';
import search from './images/search.svg';

export default function Advantages() {
    return (
        <div className='container advantages'>
            <h2 className='title'>Преимущества продукта</h2>
            <div className='body'>
                <div>
                    <img src={search} className='icon'/>
                    <span>Поиск туров в любую точку Казахстана</span>
                </div>
                <div>
                <img src={search} className='icon'/>
                    <span>Качественные поставщики услуг</span>
                </div>
                <div>
                <img src={search} className='icon'/>
                    <span>Возможность приобрести тур в кредит или в рассрочку</span>
                </div>
                <div>
                   <img src={search} className='icon'/>
                    <span>Покупка тура в один клик</span>
                </div>
                <div>
                   <img src={search} className='icon'/>
                    <span>Возможность изучить тур предлодение на одной площадке</span>
                </div>
            </div>
        </div>
    )
}