import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
// import destination from '../FakeData/FakeData.json';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './Book.css';
const Book = () => {
    const { ticket } = useParams();
    
    const {imgUrl, capacity, prices, from, To} = fakeData.find(data => data.ticketType === ticket)
    console.log(ticket, imgUrl);

    // const [destination, setDestination] = useState([])
    
    // useEffect(()=>{
    //     setDestination()
    // },[])

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Let's book a {} Room.</h1>
            
            <div className="form-style">
                <form className="form">
                    <h3>Book your ticket</h3>
                    <p>Pic from</p>
                    <input type="text" />
                    <br />
                    <p>Pic to</p>
                    <input type="text" />
                    <br />
                   {
                       fakeData ?  <button className="btn-style" onClick={from}>search</button> :  <button className="btn-style" onClick={To}>search</button>
                   }
                </form>
            </div>

            <div className="maps">

            </div>


        </div>
    );
};

export default Book;