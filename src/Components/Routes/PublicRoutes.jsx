import React, { Children, useContext } from 'react'
import { AuthUserContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({ children }) => {
    let { authUserData } = useContext(AuthUserContext)
    console.log(authUserData)
    if (!authUserData?.accessToken ||
        !window.localStorage.getItem("TOKEN")) {
        return <>
            {children}
        </>
    } else {

        return <Navigate to={'/'} />
    }
}

export default PublicRoutes