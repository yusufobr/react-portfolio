import React from 'react'

function Header() {
  return (
    <div className='container max-w-screen-xl px-6 pt-4 mx-auto flex justify-between'>
        <div className='font-extrabold text-xl'>Yusuf Obr.</div>
        <div>
            <nav className='hidden sm:block font-bold text-[#04102b]'>
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