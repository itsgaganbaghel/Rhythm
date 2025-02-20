import React from 'react'
import Menu from './Menu'
const NavbarContainer = () => {

    return (
        <div className='lg:h-[10vh]  w-full flex lg:flex-row flex-col-reverse lg:justify-between  lg:px-10  lg:items-center items-end bg-primary text-white pb-3 lg:pb-0 gap-2 lg:gap-0'>
            <div className='lg:w-[20%] w-full px-4 relative'>
                <input type='search' className='w-full relative pl-3 py-2 rounded-2xl text-white bg-primary border-slate-300 border-2' />
                <span className=' absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>search</span>
            </div>
            <Menu />
        </div>
    )
}

export default NavbarContainer