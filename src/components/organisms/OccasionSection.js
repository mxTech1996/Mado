import { dataSite } from '@/data';
import Image from 'next/image';

export default function OccasionSection() {
  return (
    <section className='bg-[#fff1e6] py-16'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6'>
        {/* Left Content */}
        <div className='flex-1'>
          <h2 className='text-4xl font-serif mb-4'>
            Designed & Tailored For{' '}
            <span className='italic text-red-600'>Your Occasion</span>
          </h2>
          <p className='text-sm text-gray-700 mb-6 max-w-md'>
            From intimate dinners to family celebrations, my services are
            designed to suit any special moment. Whether you desire a fine
            dining experience or a themed menu, I will collaborate with you to
            craft the perfect culinary journey.
          </p>
          <div className='flex gap-4'>
            <button
              onClick={() => (window.location.href = '/more-information')}
              className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className='flex-1 flex gap-6 justify-center'>
          <Image
            src={dataSite.services[0].image}
            alt='Chef Preparing Food'
            width={250}
            height={400}
            className='rounded-full object-cover shadow-md'
          />
          <Image
            src={dataSite.services[1].image}
            alt='Served Dishes'
            width={250}
            height={400}
            className='rounded-full object-cover shadow-md'
          />
        </div>
      </div>
    </section>
  );
}
