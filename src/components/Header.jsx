import React from 'react'

function Header() {
  return (
    <div className='container max-w-screen-xl px-6 pt-4 py-2 mt-1 mx-auto flex justify-between'>
        <div className='font-extrabold uppercase text-xl text-gray-300'>Yusuf Obr.</div>
        <div>
            <nav className='hidden sm:block font-bold text-gray-300'>
                <ul className='flex gap-3'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header