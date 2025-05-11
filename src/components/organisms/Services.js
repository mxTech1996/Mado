import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = dataSite.services;

export default function ServicesSection() {
  return (
    <section id='services' className='bg-[#fef5f0] py-16 text-center'>
      <h2 className='text-4xl font-serif mb-4'>
        From Business Meetings to{' '}
        <span className='italic text-red-600'>Celebrations</span>
      </h2>
      <p className='text-gray-700 mb-12 max-w-2xl mx-auto'>
        Whether you&apos;re planning a corporate breakfast, a formal gala
        dinner, or a creative workshop, our venues adapt to your needs, ensuring
        the perfect experience for any type of gathering.
      </p>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className='w-32 h-32 object-cover rounded-full mb-4 border-4 border-white shadow-md'
            />
            <h3 className='text-lg font-semibold'>{service.title}</h3>
            <p className='text-sm text-gray-600 max-w-xs text-center'>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
