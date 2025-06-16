import Link from 'next/link'
import React from 'react'
import Images from './Images'
const Meeting = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col gap-2'>
            <div>
                <Images/>
            </div>
            <div>
              <form action="submit" className='flex flex-col gap-2'>
                <input className='h-10 w-full rounded-lg border border-gray-300 px-3 text-base' type="text" />
                <button  className='rounded-lg bg-blue-500 text-white' type="submit">Join</button>
              </form>
            </div>
            {/* <div>
                Room Name
            </div> */}
<button>
    Link 
    <Link href="/meeting">Join Meeting</Link></button>
        </div>
    </div>
  )
}

export default Meeting