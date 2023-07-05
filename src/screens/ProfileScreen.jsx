import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import '../styles/profile.css'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(()=>{
    console.log("userinfo:")
    console.log(userInfo)
  }, [userInfo])


  return (
    <div>
      <figure>{userInfo?.first_name?.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.first_name}!</strong> You can view this page
        because you're logged in
      </span>
      <div className="userInfo">
        <span> <strong>UUID:</strong> {userInfo?.uuid}</span> 
        <span></span>
      </div>
    </div>
  )
}

export default ProfileScreen
