import React from 'react';
import fakeData from '../../fakeData/fakeData';
import Book from '../Book/Book';
import Tickets from '../Tickets/Tickets';

const Home = () => {
    const styles = {
        display: 'flex',
        margin: '30px',
        justifyContent: 'space-between'
    }
    
    return (
        <div style={styles}>
            {
                fakeData.map(ticket => <Tickets key={ticket.ticketType} ticket={ticket}></Tickets>)
            }
        </div>
    );
};

export default Home;