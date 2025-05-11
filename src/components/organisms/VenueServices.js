import {
  FaRegBuilding,
  FaChalkboardTeacher,
  FaRegHandshake,
  FaGlassCheers,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function VenueServices() {
  const services = [
    {
      title: 'Corporate Meeting Spaces',
      description:
        'Professional environments ideal for corporate meetings, workshops, and business presentations.',
      icon: <FaRegBuilding className='text-white text-3xl' />,
    },
    {
      title: 'Conference & Expo Halls',
      description:
        'Spacious halls perfect for conventions, expos, and large-scale corporate gatherings.',
      icon: <FaChalkboardTeacher className='text-white text-3xl' />,
    },
    {
      title: 'Private Celebration Venues',
      description:
        'Elegant spaces tailored for weddings, birthdays, and private social events of all kinds.',
      icon: <FaGlassCheers className='text-white text-3xl' />,
    },
    {
      title: 'Networking & Lounge Areas',
      description:
        'Comfortable lounge settings designed for networking, after-parties, or cocktail receptions.',
      icon: <FaRegHandshake className='text-white text-3xl' />,
    },
  ];

  return (
    <section className='bg-[#3b1d1d] py-16 text-center text-white'>
      <h2 className='text-4xl font-serif mb-12'>Our Venue Rental Services</h2>
      <div className='max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center bg-[#4b2c2c] p-6 rounded-md hover:scale-105 transition-transform'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className='bg-red-600 rounded-full p-4 mb-4'>
              {service.icon}
            </div>
            <h3 className='text-xl mb-2'>{service.title}</h3>
            <p className='text-sm mb-4'>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
