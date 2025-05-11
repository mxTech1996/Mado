import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';

const blogPosts = dataSite.products;
export default function ProductSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section className='bg-[#fef5f0] py-16 px-6 text-center'>
      <h2 className='text-4xl font-serif mb-4'>
        Every Event Should{' '}
        <span className='italic text-red-600'>Tell A Story</span>
      </h2>
      <p className='text-gray-700 mb-12 max-w-2xl mx-auto'>
        From professional conferences to social gatherings, we help you craft
        experiences worth sharing.
      </p>

      <div
        id='products'
        className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'
      >
        {blogPosts.map((post, index) => {
          const isInCart = validateProductInCart(post.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(post.id);
          };

          return (
            <motion.div
              key={index}
              className='bg-white shadow rounded overflow-hidden text-left'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={post.image}
                alt={post.name}
                className='w-full h-56 object-cover'
              />
              <div className='p-4'>
                <p className='text-xs text-gray-500 mb-2'>$ {post.price}</p>
                <h3 className='font-semibold mb-2'>{post.name}</h3>
                <p className='text-sm text-gray-600 mb-4'>
                  {post.description.slice(0, 100)}...
                </p>
                <button
                  onClick={handleClick}
                  style={{
                    backgroundColor: isInCart ? '#fef5f0' : '#3b1d1d',

                    color: isInCart ? '#3b1d1d' : '#fff',
                  }}
                  className='text-red-600 text-sm hover:underline p-5 rounded transition'
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
