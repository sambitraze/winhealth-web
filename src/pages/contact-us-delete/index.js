import Layout from '../../components/Layout';
import React, { useEffect, useState } from 'react';

const DELETEACCOUNT = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    confirmDelete: false,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.confirmDelete) {
      setMessage('Please confirm that you want to delete your account.');
      return;
    }

    const res = await fetch('https://api.microheal.in/items/support_tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        object: formData.email,
        type: 'delete_account',
        summary: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
        }),
      }),
    });

    if (res.status === 204) {
      setMessage('Account deletion request submitted successfully.');
    } else {
      setMessage('Some error occurred, please retry.');
    }

    setFormData({
      name: '',
      email: '',
      reason: '',
      confirmDelete: false,
    });
  };

  return (
    <Layout>
      <div className="mx-auto mt-10 max-w-md">
        <h1 className="mb-5 text-2xl font-bold">Request Account Deletion</h1>
        <p className="mb-5 text-sm">
          By submitting this form, your request to delete your account will be
          processed. Please note that all associated data will be deleted,
          except for data required by law for retention.
        </p>
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-themeBlue focus:ring-themeBlue sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700"
            >
              Reason for Deletion (Optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              value={formData.reason}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-themeBlue focus:ring-themeBlue sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                name="confirmDelete"
                checked={formData.confirmDelete}
                onChange={handleChange}
                className="mr-2"
              />
              I confirm that I want to delete my account and understand that
              this action is irreversible.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-themeBlue px-4 py-2 text-white hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-themeBlue focus:ring-offset-2"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DELETEACCOUNT;
