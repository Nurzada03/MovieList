import React from "react";
import styled from "styled-components";
// import "./button.css";
const Button = ({ background, onClick, children }) => {
  return (
    <div>
      <StyledButton
        onClick={onClick}
        style={{ background: `${background}` }}
        className="btn"
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #f67722;
  background: #f67722;
  color: rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin: 0 0.5rem;
`;