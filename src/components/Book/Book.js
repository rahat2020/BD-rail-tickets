import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './Book.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import map from '../../images/map.png'
const Book = () => {
    const { ticket } = useParams();

    const [destination, setDestination] = useState({
        pickFrom: '',
        pickTo: ''
    })

    // const  { imgUrl, capacity, prices, from, To } = fakeData.find(data => data.ticketType === ticket)
    // console.log(ticket, imgUrl);
    const ticketDestination = fakeData.find(data => data.ticketType === ticket)
    const { imgUrl, ticketType, prices, avatar, To } = ticketDestination

    const handleBlur = (e) => {
        const newDestination = { ...destination };
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);
    }
    const handleSubmit = (e) => {
        setDestination(destination);
        console.log(destination);
        e.preventDefault();
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Let's book a { } Room.</h1>
            <div>
                <div className="rows">
                    <div className="col-md-4 mt-5">
                        {destination.pickTo && destination.pickFrom ?
                            <div>
                                <div className="destination-form ml-1 mb-2 bg-danger text-white p-3">
                                    <ul>
                                        <li>
                                            <h3>{destination.pickFrom}</h3>
                                        </li>
                                        <li>
                                            <h3>{destination.pickTo}</h3>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ride-info mt-3 bg-light p-3">
                                    <img width='55px' src={imgUrl} alt="" />
                                    <h4>{avatar}</h4>
                                    <div className="d-flex align-item-center">
                                        <img width="28px" height='28px' src={imgUrl} alt="" />
                                        <h4>{ticketType}</h4>
                                    </div>
                                    <h4>${prices}</h4>
                                </div>
                                <div className="ride-info mt-3 bg-light p-3">
                                    <img width='55px' src={imgUrl} alt="" />
                                    <h4>{ticketType}</h4>
                                    <div className="d-flex align-item-center">
                                        <img width="28px" height='28px' src={imgUrl} alt="" />
                                        <h4>{avatar}</h4>
                                    </div>
                                    <h4>${prices}</h4>
                                </div>
                                <div className="ride-info mt-3 bg-light p-3">
                                    <img width='55px' src={imgUrl} alt="" />
                                    <h4>{avatar}</h4>
                                    <div className="d-flex align-item-center">
                                        <img width="28px" height='28px' src={imgUrl} alt="" />
                                        <h4>{avatar}</h4>
                                    </div>
                                    <h4>${prices}</h4>
                                </div>
                            </div>
                            : <form onSubmit={handleSubmit} className="destination-form ml-1 mb-2 bg-light p-3" action="">
                                <label htmlFor="pickFrom">Pick From</label>
                                <input onBlur={handleBlur} name="pickFrom" className="form-control mb-2" type="text" required placeholder="pick from" />
                                <label htmlFor="pickTo">Pick To</label>
                                <input onBlur={handleBlur} name="pickTo" className="form-control mb-2" type="text" required placeholder="pick to" />
                                <input className="search-btn btn btn-danger mb-2 p-2" type="submit" value="search" />
                            </form>}
                    </div>
                    <div className="col-md-8 mt-5 pb-5">
                        <img src={map}/>
                    </div>
                </div>
            </div>

            {/* <div className="form-style">
                <form className="form">
                    <h3>Book your ticket</h3>
                    <p>Pic from</p>
                    <input type="text" />
                    <br />
                    <p>Pic to</p>
                    <input type="text" />
                    <br />
                    <button className="btn-style" onClick={from}>search</button>
                </form>
            </div> */}
        </div>
    );
};

export default Book;

