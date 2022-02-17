import React, { Fragment } from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <Fragment>
      <UserSearch />
      <UserResults />
    </Fragment>
  );
};

export default Home;
