import React, { useContext, useEffect, useRef, useState } from 'react'
import NavbarContainer from './Components/NavBarComponent/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AlbumSideBar from './Components/Pages/AlbumPages/AlbumSideBar'

import logo from "./assets/logo.png"

import { AuthUserContext } from './Components/Context/AuthContext'
import CustomAudioPlayer from './Components/utilities/CustomAudioPlayer'
import { addAlbumContext } from './Components/Context/SongContext'

const App = () => {

  let { showWebsite, setShowWebsite } = useContext(AuthUserContext)
  let { audioPlayerData } = useContext(addAlbumContext)
  console.log("audioPlayerData", audioPlayerData)
  useEffect(() => {
    const showWebsiteTimeout = setTimeout(() => {
      setShowWebsite(true);
    }, 1600);

  }, []);

  return (
    <>{
      !showWebsite &&
      <div className='bg-primary min-h-[100vh] min-w-full flex flex-col justify-center items-center overflow-hidden'>
        <img src={logo} className='websiteLoader w-52' alt="Loading..." />
      </div>
    }
      <div className={`w-full flex ${showWebsite ? "block" : "hidden"}`}>
        <div className='lg:w-[14%] lg:relative lg:left-0  absolute z-10 -left-[6%] hidden md:block'>
          <AlbumSideBar />
        </div>

        <div className='flex flex-col lg:w-[86%] w-full'>
          <NavbarContainer />
          <Outlet />
          {
            audioPlayerData.length > 0 &&
            <div className=' w-full fixed bottom-0'>
              <CustomAudioPlayer tracks={audioPlayerData} />
            </div>
          }
        </div>
        <Toaster />
      </div>
    </>
  )
}

export default App
