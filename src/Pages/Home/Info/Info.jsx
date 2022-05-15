import React from 'react';
import InfoCard from '../InfoCard/InfoCard.jsx';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
const Info = () => {
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardText='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardText='Brooklyn, NY 10036, United States' cardTitle='Visit our location' bgColor="bg-[#3d4451]" img={marker}></InfoCard>
            <InfoCard cardText='Lorem Ipsum is simply dummy text of the pri' cardTitle='Contact us now' bgColor="bg-gradient-to-r from-secondary to-primary" img={phone} >GET Started</InfoCard>
        </div>
    );
};

export default Info;