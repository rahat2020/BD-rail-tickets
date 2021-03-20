import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Book = () => {
        const {bedType} = useParams();
        
    return (
        <div style={{textAlign: 'center'}}>
            console.log('text found')
            <h1>Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/Home">different room?</Link> </p>


        </div>
    );
};

export default Book;