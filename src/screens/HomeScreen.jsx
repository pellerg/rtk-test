import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spaceApi } from "../app/services/space/spaceService";
import { mwQueries } from "../app/services/mw/mwQueries";

const HomeScreen = () => {
  const [skip, setSkip] = React.useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  // const {
  //   data: sandboxSpaces,
  //   isLoading,
  //   isFetching,
  //   isSuccess: isSandboxSpacesSuccess,
  //   isUninitialized,
  // } = spaceApi.useGetSandboxSpacesQuery("", {
  //   skip,
  // });

  // const {data: allSpaces, isSuccess: allSpacesSuccess} = spaceApi.useGetSpacesQuery("", {skip})
  // const {data: educationSpaces, isSuccess: educationSpacesSuccess} = spaceApi.useGetEducationSpacesQuery("", {skip})
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


  return (
    <div className="home-screen">
      <h1>User Authentication with Redux Toolkit & JWTs</h1>
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
                    <button className={`${space.is_favorite ? "favorite-btn":"default-btn"} ${isPostSpaceFavoriteLoading?"":""}`}
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
  );
};

export default HomeScreen;
