import React from 'react';
import quote from '../.../../../../assets/icons/quote.svg'
 import people1 from '../../../assets/images/people1.png'
 import people2 from '../../../assets/images/people2.png'
 import people3 from '../../../assets/images/people3.png'
import Reviews from '../Reviews/Reviews.jsx';
 
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson herry',
            location:'Pakistan',
            reviews: 'Get the best Results for Doctors In Usa Directory. Find what you are looking for! 99% Match on Doctors In Usa Directory. Find Here - Free, Private and Secure. Always Facts. Results & Answers. Privacy Friendly. Unlimited Access',
            img:people1
        },
        {
            _id: 1,
            name: 'Kamrul Islam',
            location:'Bangladesh',
            reviews: 'Get the best Results for Doctors In Usa Directory. Find what you are looking for! 99% Match on Doctors In Usa Directory. Find Here - Free, Private and Secure. Always Facts. Results & Answers. Privacy Friendly. Unlimited Access',
            img:people2
        },
        {
            _id: 1,
            name: 'Rahat Hossin',
            location:'India',
            reviews: 'Get the best Results for Doctors In Usa Directory. Find what you are looking for! 99% Match on Doctors In Usa Directory. Find Here - Free, Private and Secure. Always Facts. Results & Answers. Privacy Friendly. Unlimited Access',
            img:people3
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between '>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;