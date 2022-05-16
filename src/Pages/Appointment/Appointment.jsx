import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer.jsx';
import AppointmentBanner from './AppointmentBanner.jsx';
import AvailableAppointment from './AvailableAppointment.jsx';
import Service from './Service.jsx';


const Appointment = () => {
    const [date, setDate]=useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} ></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Service/>
            <Footer/>
        </div>
    );
};

export default Appointment;