import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>This is CheckOut.</h1>
            <p>Id No : {serviceId}</p>
        </div>
    );
};

export default CheckOut;