import React from 'react'

const homepage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>

        <div className='container'>
          <div class="grid grid-flow-col grid-rows-2 gap-4">
            <div class="row-span-3 ...">
              <img src='public/logo192.png' alt="Natalie Vinyu" className='' />
            </div>

            <div class="col-span-2 ...">
              <h1 className='text-9xl'>Natalie Vinyu</h1>
            </div>

            <div class="col-span-2 row-span-2 ...">
              <h2 className='text-7xl'>Front-end developer</h2>
            </div>
          </div>
        </div>

    </div>
  )
}

export default homepage;
