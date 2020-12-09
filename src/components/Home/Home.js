import { Link } from "react-router-dom";

import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-button">
        <Link className="link" to="/nasaphoto">See into the Stars!</Link>
      </div>
    </div>
  );
};

export default Home;
