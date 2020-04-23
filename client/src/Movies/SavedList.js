import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const HomeButton = styled.div`
  text-decoration: none;
`;

function SavedList(props) {
  const { goBack } = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to="/">
        <HomeButton className="home-button">Home</HomeButton>
      </Link>
    </div>
  );
}

export default SavedList;
