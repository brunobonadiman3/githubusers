import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Container, NumberContainer, Container2 } from "./styles";

const UserNumbers = (props) => {
  const history = useHistory();
  const handleOnClick = (route) => history.push(route);
  console.log(props);
  return (
    <>
      <Container>
        <NumberContainer onClick={() => handleOnClick(`/repos`)}>
          <h1>{props?.repos}</h1>
          <h2>Repos</h2>
        </NumberContainer>

        <NumberContainer>
          <h1>{props?.followers}</h1>
          <h2>Followers</h2>
        </NumberContainer>

        <NumberContainer>
          <h1>{props?.following}</h1>
          <h2>Following</h2>
        </NumberContainer>

        <NumberContainer onClick={() => handleOnClick(`/starred`)}>
          <h1> <i className="material-icons">star</i> </h1>
          <h2>Starred</h2>
        </NumberContainer>
      </Container>      
    </>
  );
};

export default UserNumbers;
