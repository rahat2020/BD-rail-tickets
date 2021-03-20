import React from 'react';
import Tickets from '../Tickets/Tickets';

const Home = () => {
    const styles = {
        display: 'flex',
        margin: '30px',
        justifyContent: 'space-between'
    }
    const tickets = [
        {
            title: 'High Class and High Quality Service',
            imgUrl: 'https://i.pinimg.com/originals/b8/df/b2/b8dfb267781816f5cc21f67c0c63ed09.jpg',
            capacity: '3',
            avatar:'H',
            ticketType: 'first',
            description:'Checkout available seats, route information, fare information on real time basis with Esheba Platform.',
            prices:'35'
        },
        {
            title: 'Second Class and Low Quality Service',
            imgUrl: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/53aae738e4b02b018b783a7c/images/5f32303c042863444aa02124/file-WMkFDxmkOr.jpg',
            capacity: '3',
            avatar:'S',
            ticketType: 'second',
            description:'Checkout available seats, route information, fare information on real time basis with Esheba Platform.',
            prices:'25'
        },
        {
            title: 'Third Class and Low Quality Service',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjyW8wkNTnpVEtkf1XzC47a5C2DxuvcLtYQ&usqp=CAU',
            capacity: '3',
            avatar:'T',
            ticketType: 'third',
            description:'Checkout available seats, route information, fare information on real time basis with Esheba Platform.',
            prices:'20'
        },
        {
            title: 'Fourth Class and NO Service',
            imgUrl: 'https://3.bp.blogspot.com/_z_BPo98TPjs/SMWRVclatZI/AAAAAAAABKg/BqeO3Bw5Zv0/s320/railways-additional-berth.JPG',
            capacity: '3',
            avatar:'F',
            ticketType: 'fourth',
            description:'Checkout available seats, route information, fare information on real time basis with Esheba Platform.',
            prices:'15'
        }
    ]
    return (
        <div style={styles}>
            {
                tickets.map(ticket => <Tickets key={ticket.bedType} ticket={ticket}></Tickets>)
            }
        </div>
    );
};

export default Home;