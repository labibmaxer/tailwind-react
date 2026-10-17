import React from 'react';

const PricingCard = ({pricing}) => {
    return (
        <div className='border bg-orange-400 rounded-2xl'>
            <div>
                <h1 className='text-7xl'>{pricing.name}</h1>
                <h3 className='text-3xl'>{pricing.price}</h3>
            </div>
        </div>
    );
};

export default PricingCard;