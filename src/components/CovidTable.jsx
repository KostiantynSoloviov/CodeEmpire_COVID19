import React, { useState, useEffect } from 'react';
import TableRows from './TableRows';
import './style.css';

function CovidTable() {
    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api.covid19api.com/summary`)
            .then((response) => response.json())
            .then((response) => {
                setCountries(response.Countries);
            });
    }, []);

    const searchValue = (e) => {
        setValue(e.target.value);
    };

    const filter = ({ Country }) => {
        if (!value) return true;

        return Country.toUpperCase().startsWith(value.toUpperCase());
    };

    return (
        <div className="form-wrap">
            <div className="block_heared">
                <img src="img/logo.png" alt="" />
                <div>
                    <h1 className="statistic">STATISTIC</h1>
                </div>
                <div className="search">
                    <input
                        type="text"
                        className="search-field"
                        placeholder="Search..."
                        value={value}
                        onChange={searchValue}
                    />
                    <img
                        src="./img/search.png"
                        alt=""
                        className="search-icon"
                    ></img>
                </div>
            </div>

            <div className="messages-wrapper">
                <div className="header_list">
                    <div className="item-detail1">
                        <div className="simbol-number">№</div>
                        <div className="left-name">
                            Country
                        </div>
                    </div>
                    <div className="">
                        <div className="right-name">TotalConfirmed</div>
                    </div>
                </div>
                {countries.filter(filter).map((item, index) => {
                    return (
                        <div
                            key={item.ID}
                            onClick={() => setDetails(item)}
                            className="message"
                        >
                            <div className="item-detail2">
                                <div className="index ">{index + 1}</div>
                                <div className="name-country">
                                    {item.Country}
                                </div>
                            </div>
                            <div className="item-list">
                                <div className="total-confirmed">
                                    {item.TotalConfirmed}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <TableRows onClose={() => setDetails(null)} details={details} />
        </div>
    );
}

export default CovidTable;
