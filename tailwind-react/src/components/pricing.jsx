import React, { use } from 'react';
 import PricingCard from '../pricing.card/pricingCard';
const Pricing = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);

    return (
        <div> 
            <h2 className='text-5xl'>Get our Membership</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {pricingData.map((pricing) => (
                <PricingCard key={pricing.id} pricing={pricing} />
            ))}
        </div>
        </div>
    );
};

export default Pricing;