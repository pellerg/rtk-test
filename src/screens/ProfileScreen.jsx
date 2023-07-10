import { useSelector } from 'react-redux'
import React , { useEffect, useState, } from 'react'
import '../styles/profile.css'

import { mwQueries } from '../app/services/mw/mwQueries'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const [skip, setSkip] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const {
    data: searchSpaces,
    isLoading: isSearchSpacesLoading,
    isSuccess: isSearchSpacesSuccess,
  } = mwQueries.useGetSandboxSpacesQuery({}, { skip });
    const [setToFavorite, { result, isLoading: isPostSpaceFavoriteLoading}] =
    mwQueries.usePostSpaceBySpaceUuidFavoriteMutation();

  const [removeFavorite, {isLoading:isDeleteSpaceFavoriteLoading}] =
    mwQueries.useDeleteSpaceBySpaceUuidFavoriteMutation();

  const buttonClick = (space) => {
    if (space.is_favorite) {
      console.log("remove space from favorite, uuid: " + space.uuid);
      removeFavorite({ spaceUuid: space.uuid });
    } else {
      console.log("setting space to favorite, uuid: " + space.uuid);
      setToFavorite({ spaceUuid: space.uuid });
    }
  };

  useEffect(() => {
    setSkip(!isLoggedIn);
  }, [isLoggedIn]);

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
      {isLoggedIn && (
        <div className="sandboxSpaces">
          <div>
            <span>
              <strong>Search spaces:</strong>
            </span>
          </div>
          {isSearchSpacesSuccess &&
            searchSpaces?.items.map((space) => (
              <React.Fragment key={space.uuid}>
                {space && (
                  <React.Fragment>
                    <span>{space.name}</span>
                    <button className={`favorite-button ${space.is_favorite ? "favorite":""} ${isPostSpaceFavoriteLoading?"":""}`}
                      onClick={() => {
                        buttonClick(space);
                      }}
                    >
                      {space.is_favorite ? "Favorite" : "Not favorite"}
                    </button>
                    <br />
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  )
}

export default ProfileScreen
