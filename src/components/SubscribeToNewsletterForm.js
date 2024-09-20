import React, { useState } from 'react';

const SubscribeToNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage('Please enter your email address');
      return;
    }

    const emailValidRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const isEmailValid = emailValidRegex.test(trimmedEmail);

    if (!isEmailValid) {
      setMessage('Please enter a valid email address');
      return;
    } else {
      const res = await fetch('https://api.microheal.in/items/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (res.status === 204) {
        setMessage('Subscribed successfully!');
      } else if (res.status === 400) {
        setMessage('Already Subscribed!');
      } else {
        setMessage('Some error occured, please retry!');
      }
    }

    // TODO: Add post URL to the form's action URL
    setEmail('');
    // setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center rounded-md">
        <input
          className="flex-[2] rounded-l-sm p-2 font-ptSans outline-none"
          type="email"
          name="email"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="flex-[1] rounded-r-sm bg-themeBlue py-2 uppercase text-white"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p
          className={
            message.includes('error') || message.includes('Please')
              ? 'pt-4 text-red-500'
              : 'pt-4 text-green-500'
          }
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default SubscribeToNewsletterForm;
