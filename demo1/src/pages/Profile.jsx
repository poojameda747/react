import React from 'react'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <a href="myaccount">My Accounts</a><br/>
        <br/>
        <a href="mysettings">My settings</a>

        <Outlet/>
    </div>
  )
}

export default Profile