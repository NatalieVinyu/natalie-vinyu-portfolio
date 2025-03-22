import React from 'react'

const homepage = () => {
  return (
    <div className='flex items-center justify-center'>

        <div className='container p-16'>
          <div class="grid grid-flow-col grid-rows-1 gap-4">
            <div class="row-span-2">
              <img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/795/original/IMG_2575.jpeg?1742473855' alt="Natalie Vinyu" className='rounded-lg' />
            </div>

            <div className='text-center justfy-center content-center'>
              <div class="col-span-2 m-3">
                <h1 className='text-3xl'>Natalie Vinyu</h1>
                <h2 className='text-7xl'>Front-end developer</h2>

              </div>

              <div class="col-span-2 row-span-2">
                <h2 className='text-2xl'>download resume</h2>
              </div>
            </div>

            </div>
            
        </div>

    </div>
  )
}

export default homepage;
