import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Please enter a valid email address.');
    } else {
      alert(`You have successfully subscribed with: ${email}`);
      setEmail(''); // Reset input after subscription
    }
  };

  return (
    <section className='bg-[#351919] text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-6'>
      <div>
        <h2 className='text-3xl font-serif mb-2'>
          Stay updated with our newsletter
        </h2>
        <p className='text-sm text-gray-300'>
          Sign up for our newsletter to stay informed about all updates.
        </p>
      </div>

      <div className='flex border border-gray-400 rounded overflow-hidden'>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none'
        />
        <button
          onClick={handleSubscribe}
          className='bg-red-600 hover:bg-red-700 px-4 py-2 transition'
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}
