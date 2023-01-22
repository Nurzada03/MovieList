import React, { forwardRef } from "react";

import styled from "styled-components";

const Input = forwardRef(({ children, id, type, onChange }, ref) => {
  console.log(id);
  return (
    <>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      <br />
      <StyledInput onChange={onChange} type={type} id={id} ref={ref} />
    </>
  );
});

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 2px solid;
  :hover {
    background-color: #e4e7cc;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;
