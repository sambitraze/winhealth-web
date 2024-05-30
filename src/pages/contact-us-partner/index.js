import Layout from '../../components/Layout';
import React, { useEffect, useState } from 'react';

const CONTACTUS = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: '',
    who: 'doctor',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://api.winhealth.agpro.co.in/items/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 204) {
      setMessage("Response sent!");
    } else {
      setMessage("Some error occured, please retry!");
    }

    setFormData({
      name: '',
      number: '',
      message: '',
      who: 'doctor',
    });
  };
  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5">Contact Us (for partners)</h1>
        {message && <p className={message.includes("error") ? 'mb-5 text-red-500' : 'mb-5 text-green-500'}>{message}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required={true}
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-themeBlue focus:border-themeBlue sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              required={true}
              value={formData.number}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-themeBlue focus:border-themeBlue sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required={true}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label htmlFor="who" className="block text-sm font-medium text-gray-700">Reason for Contact</label>
            <select
              id="who"
              name="who"
              required={true}
              value={formData.who}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-themeBlue focus:border-themeBlue sm:text-sm"
            >
              <option value="doctor">Doctor</option>
              <option value="hospital">Hospital</option>
              <option value="clinic">Clinic</option>
              <option value="company">Gut Related Company</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-themeBlue text-white py-2 px-4 rounded-md hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeBlue"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};


export default CONTACTUS;
