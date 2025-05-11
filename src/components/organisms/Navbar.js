'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { FaChevronDown, FaShoppingCart } from 'react-icons/fa';

export default function StickyNavbar() {
  const { products } = useCart();
  return (
    <header className='sticky top-0 z-50 bg-[#fff1e6] shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img
            src={dataSite.iconImage}
            alt='Logo'
            className='w-10 h-10 rounded-full border-2 border-red-600'
          />
          <span className='font-serif text-xl'>MADO</span>
        </div>

        {/* Nav Links */}
        <nav className='hidden md:flex items-center gap-6 text-sm font-medium'>
          <a href='/' className='flex items-center gap-1 cursor-pointer'>
            Home
          </a>
          <a href='/#about' className='flex items-center gap-1 cursor-pointer'>
            About Us
          </a>
          <a href='/#services' className='hover:underline'>
            Services
          </a>
          <a href='/#products' className='hover:underline'>
            Products
          </a>
          <a href='/#testimonials' className='hover:underline'>
            Testimonials
          </a>
        </nav>

        {/* Cart & Enquire */}
        <div className='flex items-center gap-4'>
          <Link href={'/my-cart'}>
            <div className='relative'>
              <FaShoppingCart size={20} />
              <span className='absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full'>
                {products.length}
              </span>
            </div>
          </Link>
          <button
            onClick={() => (window.location.href = '/more-information')}
            className='bg-red-600 text-white px-4 py-2 rounded-sm text-sm'
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
