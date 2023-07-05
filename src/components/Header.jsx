import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetUserDetailsQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import '../styles/header.css'

const Header = () => {
  const [skip, setSkip] = useState(true)
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // skip is a "skip" boolean variable, the hook queries data only when skip is false
  // waiting for login to fetch userData
  const { data, isFetching } = useGetUserDetailsQuery("",{skip});
 

  // Original solution for fetching userData:
  // automatically authenticate user if token is found
  // const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
  //   pollingInterval: 300000, // 15mins
  // })

  useEffect(()=>{
    setSkip(!isLoggedIn)
    console.log("header isLoggedIn: " + isLoggedIn)
  }, [isLoggedIn])

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])

  return (
    <header>
      <div className='header-status'>
        <span>
          {isFetching
            ? `Fetching your profile...`
            : userInfo !== null
            ? `Logged in as ${userInfo.email}`
            : "You're not logged in"}
        </span>
        <div className='cta'>
          {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/'>Home</NavLink>
        {!userInfo && <>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink> 
        </> }
        <NavLink to='/user-profile'>Profile</NavLink>
      </nav>
    </header>
  )
}

export default Header
