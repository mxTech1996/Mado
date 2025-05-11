import { dataSite } from '@/data';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='bg-[#fff1e6]'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6 py-12'>
        {/* Left Content */}
        <div className='flex-1'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='flex -space-x-2'>
              <Image
                src='/images/avatar1.png'
                alt='client1'
                width={32}
                height={32}
                className='rounded-full border'
              />
              <Image
                src='/images/avatar2.png'
                alt='client2'
                width={32}
                height={32}
                className='rounded-full border'
              />
              <Image
                src='/images/avatar3.png'
                alt='client3'
                width={32}
                height={32}
                className='rounded-full border'
              />
            </div>
          </div>

          <h1 className='text-4xl md:text-5xl font-serif leading-snug mb-4'>
            Elevate Your Experience with{' '}
            <span className='italic text-red-600'>Culinary Excellence</span>
          </h1>
          <p className='text-sm text-gray-600 max-w-md'>
            Designed just for you, every dish we create is a celebration of
            flavor, creativity, and sophistication.
          </p>
        </div>

        {/* Right Image */}
        <div className='flex-1'>
          <Image
            src={dataSite.image_hero}
            alt='Culinary Experience'
            width={800}
            height={600}
            className='rounded-md shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
