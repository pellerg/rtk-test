import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spaceApi } from "../app/services/space/spaceService";

const HomeScreen = () => {
  const [skip, setSkip] = React.useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const {
    data: sandboxSpaces,
    isSuccess,
    isUninitialized,
  } = spaceApi.useGetSandboxSpacesQuery("", {
    skip,
  });

  useEffect(() => {
    console.log(sandboxSpaces);
  }, [sandboxSpaces]);

  useEffect(() => {
    setSkip(!isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    console.log("isUninitialized: " + isUninitialized);
  }, [isUninitialized]);

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
          {isSuccess &&
            sandboxSpaces?.items.map((space) => (
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
