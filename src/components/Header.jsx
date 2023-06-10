import React from 'react'

function Header() {
  return (
    <div className='container px-2 py-4 mx-auto flex justify-between'>
        <div className='font-extrabold text-xl'>Yusuf Obr.</div>
        <div>
            <nav className='font-bold text-[#04102b]'>
                <ul className='flex gap-3'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header