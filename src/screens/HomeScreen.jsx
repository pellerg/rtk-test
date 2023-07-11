import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spaceApi } from "../app/services/space/spaceService";
import { mwQueries } from "../app/services/mw/mwQueries";

const HomeScreen = () => {
  const [skip, setSkip] = React.useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const {
    data: demoSpaces,
    isLoading: isDemoSpacesLoading,
    isSuccess: isDemoSpacesSuccess,
  } = mwQueries.useGetSandboxSpacesQuery({}, { skip });

  const {
    data: educationSpaces,
    isLoading: isEducationSpacesLoading,
    isSuccess: isEducationSpacesSuccess,
  } = mwQueries.useGetEducationSpacesQuery({}, { skip });

  const {
    data: eventSpaces,
    isLoading: isEventSpacesLoading,
    isSuccess: isEventSpacesSuccess,
  } = mwQueries.useGetEventSpacesQuery({}, { skip });

  const [setToFavorite, { result, isLoading: isPostSpaceFavoriteLoading }] =
    mwQueries.usePostSpaceBySpaceUuidFavoriteMutation();

  const [removeFavorite, { isLoading: isDeleteSpaceFavoriteLoading }] =
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
      <h1>{isLoggedIn ? "Spaces:" : "Log in to Browse Spaces!"}</h1>
      {isLoggedIn && (
        <div className="sandboxSpaces">
          <div>
            <span>
              <strong>Demo spaces:</strong>
            </span>
          </div>
          {isDemoSpacesSuccess &&
            demoSpaces?.items.map((space) => (
              <React.Fragment key={space.uuid}>
                {space && (
                  <React.Fragment>
                    <span>{space.name}</span>
                    <button
                      className={`favorite-button ${
                        space.is_favorite ? "favorite" : ""
                      } ${isPostSpaceFavoriteLoading ? "" : ""}`}
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
      {isLoggedIn && (
        <div className="sandboxSpaces">
          <div>
            <span>
              <strong>Event spaces:</strong>
            </span>
          </div>
          {isEventSpacesSuccess &&
            eventSpaces?.items.map((space) => (
              <React.Fragment key={space.uuid}>
                {space && (
                  <React.Fragment>
                    <span>{space.name}</span>
                    <button
                      className={`favorite-button ${
                        space.is_favorite ? "favorite" : ""
                      } ${isPostSpaceFavoriteLoading ? "" : ""}`}
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
      {isLoggedIn && (
        <div className="sandboxSpaces">
          <div>
            <span>
              <strong>Education spaces:</strong>
            </span>
          </div>
          {isEducationSpacesSuccess &&
            educationSpaces?.items.map((space) => (
              <React.Fragment key={space.uuid}>
                {space && (
                  <React.Fragment>
                    <span>{space.name}</span>
                    <button
                      className={`favorite-button ${
                        space.is_favorite ? "favorite" : ""
                      } ${isPostSpaceFavoriteLoading ? "" : ""}`}
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
