import React from 'react';
import './style.css';

function TableRows({ data, onClose }) {
    if (!data) return null;

    const { TotalConfirmed, TotalDeaths, TotalRecovered, Country } = data;

    return (
        <div className="form-wrapper">
            <div className="data-content">
                <div className="item-main">
                    <h3>
                        <b>{Country}</b>
                    </h3>
                </div>
                <div>
                    <div className="item">
                        <div className="vector">
                            <img
                                src="./img/confirmed.png"
                                className="vector-img"
                                alt=""
                            />
                            <p className="text">Total Confirmed</p>
                        </div>
                        <div className="vector-text">
                            <p className="text">{TotalConfirmed}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="vector">
                            <img
                                src="./img/deaths.png"
                                className="vector-img"
                                alt=""
                            />
                            <p className="text">Total Deaths</p>
                        </div>
                        <div className="vector-text">
                            <p className="text">{TotalDeaths}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="vector">
                            <img
                                src="./img/recovered.png"
                                className="vector-img"
                                alt=""
                            />
                            <p className="text">Total Recovered</p>
                        </div>
                        <div className="vector-text">
                            <p className="text">{TotalRecovered}</p>
                        </div>
                    </div>
                </div>
                <div className="item-main">
                    <button className="but-width" onClick={onClose}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TableRows;
