'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const info = dataSite.info;

export default function InfoSection() {
  return (
    <section id='about' className='max-w-6xl mx-auto px-6 py-16'>
      <motion.h2
        className='text-3xl font-semibold mb-8 text-center'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Partner with Us?
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {info.map((item, index) => (
          <motion.div
            key={index}
            className='bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl font-medium mb-2'>{item.title}</h3>
            <p className='text-gray-600'>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
