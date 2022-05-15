import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton.jsx';
const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center my-28'>
            <div className='flex-1'>
               <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white px-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl py-5'>Make an Appointment Today </h2>
                <p>octor was released in theatres on 9 October 2021, following multiple delays related to the COVID-19 pandemic. The film received positive reviews with praise towards the performances, black comedy, direction, story, action sequences, soundtrack and background score</p>
               
               <PrimaryButton>GET Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;