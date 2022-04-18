import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    // const {serviceId } = useParams()
    return (
        <div>
            {/* <h2>welcome to datails: {serviceId}</h2> */}
           
            <div className='text-center mt-5'>
                <h3 className='mt-3'>Your Product is ready please Checkout</h3>
            <Link to="/checkout">
                <button className='btn btn-dark'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;