import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId , name} = useParams()
    return (
        <div>
            <h2>welcome to datails: {serviceId}</h2>
            <h3>{name}</h3>
            <div className='text-center'>
            <Link to="/checkout">
                <button className='btn btn-dark'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;