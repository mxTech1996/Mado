'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

const references = dataSite.references;

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = references[index];

  const next = () => setIndex((prev) => (prev + 1) % references.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + references.length) % references.length);

  return (
    <section
      id='testimonials'
      className='max-w-2xl mx-auto px-6 py-16 text-center'
    >
      <h2 className='text-3xl font-semibold mb-8'>Client Testimonials</h2>

      <div className='relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            className='bg-gray-100 p-6 rounded-md shadow-md'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-gray-700 mb-4 italic'>
              &quot;{testimonial.description}&quot;
            </p>
            <h3 className='font-semibold'>{testimonial.name}</h3>
            <p>{'⭐️'.repeat(testimonial.rating)}</p>
          </motion.div>
        </AnimatePresence>

        <div className='flex justify-center gap-4 mt-6'>
          <button
            onClick={prev}
            className='px-3 py-1 border rounded hover:bg-gray-200'
          >
            Previous
          </button>
          <button
            onClick={next}
            className='px-3 py-1 border rounded hover:bg-gray-200'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
