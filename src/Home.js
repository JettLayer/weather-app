import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [data, setData] = useState({
        celcius: "",
        name: "",
        humidity: "",
        speed: "",
        lat: "",
        lon: "",
        country: ""
    })
    const [name, setName] = useState('');

    const handleClick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=676104827a5fa24d27e00bcfd1301604&units=metric`
            axios.get(apiUrl)
                .then(res => {
                    setData({
                        ...data, celcius: res.data.main.temp, name: res.data.name,
                        humidity: res.data.main.humidity, speed: res.data.wind.speed,
                        lat: res.data.coord.lat, lon: res.data.coord.lon, country: res.data.sys.country
                    })
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="p-2 mb-4 bg-light rounded-3">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 p-2">
                                    <div className="card text-start">
                                        <img className="card-img-top mx-auto p-2"/>
                                        <div className="card-body">
                                            <h4 className="card-title text-center">Velocidad Viento</h4>
                                            <p className="card-text text-center">Wind Speed {Math.round(data.speed)} km</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-2">
                                    <div className="card text-start">
                                        <img className="card-img-top mx-auto p-2"/>
                                        <div className="card-body">
                                            <h4 className="card-title text-center">Humedad</h4>
                                            
                                            <p className="card-text text-center">Humidity {Math.round(data.humidity)}%</p>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 p-2">
                                    <div className="card text-start">
                                        <img className="card-img-top mx-auto p-2"/>
                                        <div className="card-body">
                                            <h4 className="card-title text-center">Coordenadas</h4>   
                                            <p className="card-text text-center">Latitude {Math.round(data.lat)}</p>
                                            <p className="card-text text-center">Longitude {Math.round(data.lon)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 p-2">
                                    <div className="card text-start">
                                        <img className="card-img-top mx-auto p-2" />
                                        <div className="card-body">
                                            <h4 className="card-title text-center">Ubicacion</h4>
                                            <p className="card-text text-center">Region</p>
                                            <p className="card-text text-center">{data.country}</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top p-2 mx-auto" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title text-center">{data.name}</h4>
                                <p className="card-text text-center">Temp {Math.round(data.celcius)}°C</p>
                            </div>
                        <input type='text' placeholder='Ingresa ciudad o estado' onChange={e => setName(e.target.value)} />
                        <br />
                        <a type="button" className="btn btn-primary d-block mx-auto " onClick={handleClick}>Obtener Diferentes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
