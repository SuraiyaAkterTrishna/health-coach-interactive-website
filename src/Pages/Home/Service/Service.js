import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <div className='card'>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                    <button>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
