import React from 'react';

// Named export of the Card component
export const Card = ({ title, imageUrl }) => {
  return (
    <div className='container mx-auto'>
      <div className='flex align-center items-center'>      
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white m-4'>        
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>
                  {title}
                </div>
                <p className='text-gray-700 text-base'>{imageUrl}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                <button className='bg-blue-500 py-2 px-4 rounded hover:bg-blue-700'>Read more</button>
            </div>
        </div>
      </div>
    </div>
  )
};