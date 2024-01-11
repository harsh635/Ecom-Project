import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    shippingAddress: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.email);
    if(!formData.fullName && !formData.shippingAddress && formData.phoneNumber==0){
      toast.error("Please fill all the required fields!! ")
    }else if(!formData.email.includes('@')){
      toast.error("Email should be valid !")
    }else if(formData.phoneNumber.length!==10){
      toast.error("Phone number is not valid !")
    }
    else
    {
      toast.success("Order Placed");
    }
      
    setFormData({
    fullName: '',
    shippingAddress: '',
    phoneNumber: '',
    email:'',
    });
  };

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-extrabold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
          <div className="mb-4">
            <label htmlFor="firstName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName">Shipping Address</label>
            <input
              type="text"
              id="shippingAddress"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>


        <div className="mb-6">
        <h3 className="text-xl font-bold mb-4"></h3>
          <div className="mb-4">
            <label htmlFor="cardNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
            Place Order
          </button>
        </div>
            </form>
    </div>
    </div>
    </>
  );
  }

export default Checkout;
