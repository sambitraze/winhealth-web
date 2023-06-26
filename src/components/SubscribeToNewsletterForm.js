import React, { useState } from 'react';

const SubscribeToNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Please enter your email address');
      return;
    }

    const emailValidRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const isEmailValid = emailValidRegex.test(trimmedEmail);

    if (!isEmailValid) {
      setError('Please enter a valid email address');
      return;
    }

    // TODO: Add post URL to the form's action URL
    setEmail('');
    setError(null);
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
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SubscribeToNewsletterForm;
