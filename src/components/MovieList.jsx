import React, { useState } from "react";
import styled from "styled-components";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import Button from "./UI/button";

const MovieList = ({ deleteTodo, img, title, rating, id }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModlalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };

  const confirmHandler = () => {
    //delete////

    setModalVisible(false);
  };
  return (
    <>
      {isModalVisible ? (
        <ConfirmDeleteModal
          onClose={toggleModlalHandler}
          onConfirm={confirmHandler}
          deleteTodo={deleteTodo}
          id={id}
        />
      ) : null}
      <StyledMovieList>
        <MovieElement>
          <MovieElementImage>
            <ImgFoto src={img} />
          </MovieElementImage>
          <MovieElementInfo>
            <h2>{title} </h2>
            <ButtonContainer>
              <MovieElementP>{rating} stars</MovieElementP>
              <Button onClick={toggleModlalHandler} background="#c22a1f">
                Delete
              </Button>
              <Button background="#073698">Edit</Button>
            </ButtonContainer>
          </MovieElementInfo>
        </MovieElement>
      </StyledMovieList>
    </>
  );
};

export default MovieList;

const StyledMovieList = styled.ul`
  list-style: none;
  width: 40rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 0;
`;
const MovieElement = styled.li`
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
`;

const MovieElementImage = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`;

const ImgFoto = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const MovieElementInfo = styled.div`
  flex: 2;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const MovieElementP = styled.p`
  color: white;
  display: inline;
  background: #f67722;
  padding: 0.25rem 1rem;
  border-radius: 15px;
`;
