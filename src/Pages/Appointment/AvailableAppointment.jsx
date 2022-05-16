import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Service from './Service.jsx';
const AvailableAppointment = ({ date }) => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
 },[])   
      console.log(services); 
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'> Available Appointments {format(date, 'PP')}</h4>
            <h1>this is services data{services.length}</h1>
            <div>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
              } 
           </div>
     </div>
    );
};

export default AvailableAppointment;