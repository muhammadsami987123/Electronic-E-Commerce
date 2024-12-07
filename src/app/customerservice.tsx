import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";



const CustomerService = () => {
  return (
    <section className='px-32'>
    <div className="bg-gray-100 p-8">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <TbTruckDelivery className="w-16 h-16 mb-4 " />
          <h3 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
        <RiCustomerServiceFill className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
        <RiMoneyDollarCircleFill  className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600">We return money within 30 days.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CustomerService;