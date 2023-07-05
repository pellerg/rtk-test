import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spaceApi } from "../app/services/space/spaceService";

const HomeScreen = () => {
  const [skip, setSkip] = React.useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const {
    data: sandboxSpaces,
    isLoading,
    isFetching,
    isSuccess,
    isUninitialized,
  } = spaceApi.useGetSandboxSpacesQuery("", {
    skip,
  });

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
              <strong>Sandbox spaces:</strong>
            </span>
          </div>
          {isLoading && <React.Fragment>
            {console.log("LOADING SPACES")}
            <span>Loading spaces...</span></React.Fragment>}
            {isFetching && <React.Fragment>
            {console.log("FETCHING SPACES")}
            <span>isFetching spaces...</span></React.Fragment>}
          {isSuccess &&
            sandboxSpaces?.map((space) => (
              <React.Fragment key={space.uuid}>
                <span>{space.name}</span>
                <br />
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
