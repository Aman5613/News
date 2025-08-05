import React from 'react'

const TopStories = () => {
  return (
    <div className='px-3 py-5 w-screen h-screen'>
        <div className='flex items-center justify-between'>
            <div className='vline w-[3px] h-8 bg-red-800'></div>
            <p className='font-bold'>Top Stories</p>
            <div className="hline h-[1px] w-2/3 bg-black"></div>
        </div>
        <div className='flex flex-col gap-7 mt-8'>
            <div className='w-full h-70 bg-teal-800 relative'>
                <img className='w-full h-full object-cover absolute' src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww" alt="" />
                <div className='px-5 flex gap-1 flex-col justify-center bg-black text-white w-full h-full absolute opacity-50'>
                  <p className='uppercase text-sm'>science</p>
                  <h1 className='font-bold text-2xl tracking-tighter'>Understanding the Human Brain: New Insights from Neuroscience</h1>
                  <p className='opacity-70 text-sm'> February 24, 2025</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
              <img className='w-full h-50 object-cover' src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww" alt="" />
              <div>
                <p className='uppercase text-sm text-red-800 tracking-tighter'>World</p>
                <h1 className='font-bold text-xl tracking-tight'>Global Migration Trends: Causes and Consequences</h1>
                <p className='opacity-70 text-sm'> February 24, 2025</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <img className='w-full h-50 object-cover' src="https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww" alt="" />
              <div>
                <p className='uppercase text-sm text-red-800 tracking-tighter'>World</p>
                <h1 className='font-bold text-xl tracking-tight'>Exploring the Impact of AI on Creative Industries</h1>
                <p className='opacity-70 text-sm'> February 24, 2025</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopStories