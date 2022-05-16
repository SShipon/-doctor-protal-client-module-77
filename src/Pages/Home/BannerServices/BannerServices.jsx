import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
 import BannerService from '../../Home/BannerService/BannerService.jsx'

const Services = () => {
    const bookings = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride,
        },
        {
            _id: 1,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity,
        },
        {
            _id: 1,
            name: 'Teeth whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening,
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3> 
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-center'>
                {
                    bookings.map(booking => <BannerService
                        key={booking._id}
                        booking={booking}
                    ></BannerService>)
                }
            </div>
        </div>
    );
};

export default Services;