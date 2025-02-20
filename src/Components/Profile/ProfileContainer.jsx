import React from 'react'
import { Outlet } from 'react-router-dom'
import AlbumSideBar from '../Pages/AlbumPages/AlbumSideBar'
import { Toaster } from 'react-hot-toast'


const ProfileContainer = () => {
    return (

        <div className='w-full min-h-[100vh] flex justify-center items-center bg-primary font-sans
        '>
            <div className='lg:w-[16%] lg:relative lg:left-0  absolute z-10 -left-[56%]'>
                <AlbumSideBar />
            </div>
            <div className='md:w-[84%] flex justify-center items-center relative'>
                <Outlet />
            </div>
            <Toaster />

        </div>
    )
}

export default ProfileContainer