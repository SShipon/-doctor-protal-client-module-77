import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton.jsx';
import './banner.css'
const Banner = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl banner-img" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts <br/> Here!!</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
       <PrimaryButton>GET Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;