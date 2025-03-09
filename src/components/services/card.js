import React from 'react';

// Named export of the Card component
export const Card = ({ title, imageUrl, list }) => {
  return (
    <div className='container mx-auto'>
      <div className='flex align-center items-center'>      
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white m-4'>        
            <div className='px-6 py-4'>
                <div className='text-center font-bold text-4xl mb-2'>
                  {title}
                </div>
                <img className='w-full' src={imageUrl} />
                {list && list.length > 0 && (
                  <ul>
                    {list.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                    ))}
                  </ul>
                )}
            </div>
            
        </div>
      </div>
    </div>
  )
};