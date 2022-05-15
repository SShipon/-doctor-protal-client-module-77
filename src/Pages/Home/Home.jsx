import React from 'react';
import Footer from '../Shared/Footer/Footer.jsx';
import Banner from './Banner/Banner.jsx';
import Contact from './Contact/Contact.jsx';
import Dental from './Dental/Dental.jsx';
import Info from './Info/Info.jsx';
import MakeAppointment from './MakeAppointment/MakeAppointment.jsx';
import Services from './Services/Services.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonials />
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;