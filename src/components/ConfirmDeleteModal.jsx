import React from "react";
import styled from "styled-components";
import Modal from "./UI/Modal";


export const ConfirmDeleteModal = ({ onClose, onConfirm, deleteTodo, id }) => {
  const deleteMovieList = () => {
    onConfirm();

    deleteTodo(id);
  };

  return (
    <Modal onClose={onClose}>
      <StyleModal>
          <h2> Are you sure you wanna delete? </h2>
    
    <StyledButtonModal>

        <StyledButton onClick={onClose}>No</StyledButton>
        <StyledButton onClick={deleteMovieList}>Yes</StyledButton>
  
    </StyledButtonModal>
  
      
      </StyleModal>
    
    </Modal>
  );
};


const StyleModal = styled.div`
  border-radius: 10px;
  background-color: #ffff;
  padding: 30px;
  min-width: 500px;
  min-height: 250;
  position: fixed;
  left:50% ;
  top: 50%;
`;

const StyledButtonModal = styled.div`
  display:flex;
  justify-content: end;
  align-items:flex-end;
  gap: 20px;
  

`

const StyledButton = styled.button`
  padding: 10px 30px;
  border: none;
  color: blue;

  :hover {
    background-color: #34347e;
    color: white;
    border-radius: 7px;
  }
`;