import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`service/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <div className='card'>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                    <button onClick={() => navigateToServiceDetail(id)} className="service-btn">{name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
