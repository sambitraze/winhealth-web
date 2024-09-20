import Layout from '../../components/Layout';
import React, { useEffect, useState } from 'react';

const CONTACTUS = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: '',
    who: 'pharmaceutical',
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

    const res = await fetch('https://api.microheal.in/items/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 204) {
      setMessage('Response sent!');
    } else {
      setMessage('Some error occured, please retry!');
    }

    setFormData({
      name: '',
      number: '',
      message: '',
      who: 'pharmaceutical',
    });
  };
  return (
    <Layout>
      <div className="mx-auto mt-10 max-w-md">
        <h1 className="mb-5 text-2xl font-bold">Contact Us (for provider)</h1>
        {message && (
          <p
            className={
              message.includes('error')
                ? 'mb-5 text-red-500'
                : 'mb-5 text-green-500'
            }
          >
            {message}
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required={true}
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-themeBlue focus:ring-themeBlue sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              required={true}
              value={formData.number}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-themeBlue focus:ring-themeBlue sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required={true}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="who"
              className="block text-sm font-medium text-gray-700"
            >
              Who are you?
            </label>
            <select
              id="who"
              name="who"
              required={true}
              value={formData.who}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-themeBlue focus:ring-themeBlue sm:text-sm"
            >
              <option value="pharmaceutical">Pharmaceutical Company</option>
              <option value="healthinsurer">Health Insurer</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-themeBlue px-4 py-2 text-white hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-themeBlue focus:ring-offset-2"
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
