import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../Context/AuthContext'
import { __AUTH } from '../../../Backend/Firebase'
import { modalProviderContext } from '../Context/ModalContext'
import MyProfile from '../Profile/ProfileComponents/MyProfile'
import Modal from '../Model/Modal'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import ForgotPassword from '../Auth/ForgotPassword'
import { useTheme } from '../Context/ThemeProvider'

const Menu = () => {

  let { authUserData } = useContext(AuthUserContext)
  const { theme, setTheme } = useTheme();

  let { isVisibility, setVisibility, targetModel, setTargetModel } = useContext(modalProviderContext)
  // console.log(isVisibility.toString())
  // console.log(targetModel)

  let isAuthenticatedUser = () => {
    return (
      <div onClick={(e) => {
        setVisibility(true);
        setTargetModel("profile")
      }} className='flex justify-center items-center gap-4 pb-3 hover:bg-secondary rounded-2xl px-6 py-2 border-2 border-primary hover:shadow-[inset_5px_-5px_5px_#101215,inset_-5px_5px_5px_#424655]  cursor-pointer'>
        <span>Profile</span>
        <img src={authUserData?.photoURL} width={40} className='rounded-full' />
      </div>
    )
  }

  let isAnonymousUser = () => {
    return (
      <>
        <button
          onClick={(e) => {
            setVisibility(true);
            setTargetModel("login")
          }}
        >Login</button>
        <button
          onClick={(e) => {
            setVisibility(true);
            setTargetModel("register")
          }}
        >Register</button>

      </>
    )
  }

  return (
    <div className='flex items-center   gap-8 text-xl text-light font-semibold'>

      <div >

        <p>
          Music Languages
        </p>
      </div>
      {
        authUserData ?
          isAuthenticatedUser()
          : isAnonymousUser()
      }
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 bg-accent text-white rounded-md"
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {

        (isVisibility == true && targetModel == 'profile') &&
        <Modal >
          <MyProfile />
        </Modal>
      }
      {

        (isVisibility == true && targetModel == 'login') &&
        <Modal >
          <Login />
        </Modal>
      }
      {

        (isVisibility == true && targetModel == 'register') &&
        <Modal >
          <Register />
        </Modal>
      }
      {

        (isVisibility == true && targetModel == 'forgotPassword') &&
        <Modal >
          <ForgotPassword />
        </Modal>
      }
    </div>
  )
}

export default Menu
