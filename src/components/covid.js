import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <section>
                <h1>LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                <ul>
                    <li className='card'>
                        <div className='card__main' id='one'>
                            <div className='card__inner'>
                                <p className='card__name'><span>OUR</span> COUNTRY</p>
                                <p className='card__total card__small'><span>INDIA</span></p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card__main' id='two'>
                            <div className='card__inner'>
                                <p className='card__name'><span>TOTAL</span> RECOVERED</p>
                                <p className='card__total card__small'><span>{data.recovered}</span></p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card__main' id='three'>
                            <div className='card__inner'>
                                <p className='card__name'><span>TOTAL</span> CONFIRMED</p>
                                <p className='card__total card__small'><span>{data.confirmed}</span></p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card__main' id='four'>
                            <div className='card__inner'>
                                <p className='card__name'><span>TOTAL</span> DEATHS</p>
                                <p className='card__total card__small'><span>{data.deaths}</span></p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card__main' id='five'>
                            <div className='card__inner'>
                                <p className='card__name'><span>TOTAL</span> ACTIVE</p>
                                <p className='card__total card__small'><span>{data.active}</span></p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card__main' id='six'>
                            <div className='card__inner'>
                                <p className='card__name'><span>LAST</span> UPDATED</p>
                                <p className='card__total card__small'><span>{data.lastupdatedtime}</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid