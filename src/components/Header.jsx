import Button from "./UI/button";
import { useRef, useState } from "react";
import styled from "styled-components";
import Modal from "./UI/Modal";
import Input from "./UI/Input";

const Header = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const titleInputRef = useRef();
  const UrlInputRef = useRef();
  const ratingInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const movieItemsData = {
      title: titleInputRef.current.value,
      Url: UrlInputRef.current.value,
      rating: ratingInputRef.current.value,
      id: Math.round(Math.random() * 12341234),
    };

    props.onSaveMovieItem(movieItemsData);
    addMovieHandler();
  };

  const addMovieHandler = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <>
      <HeaderContainer>
        <h3>Favorite Movies</h3>
        <>
          {isModalVisible ? (
            <Modal onClose={addMovieHandler}>
              <StyledForm>
                <label htmlFor="type"> Movie Title</label>
                <Input id="type" type="title" ref={titleInputRef} />
                <br />
                <label htmlFor="url"> Image URL </label>
                <Input id="url" type="Url" ref={UrlInputRef} />
                <br />
                <label htmlFor="num"> Your Rating </label>
                <Input id="num" ref={ratingInputRef} type="number" />

                <StyledButtonModal>
                  <Button
                    onClick={addMovieHandler}
                    background="#176fdb"
                    border-radius="none"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={submitHandler}
                    background="#176fdb"
                    border-radius="none"
                  >
                    Add
                  </Button>
                </StyledButtonModal>
              </StyledForm>
            </Modal>
          ) : null}
        </>
        <Button onClick={addMovieHandler} background="#e77d3b">
          ADD MOVIE
        </Button>
      </HeaderContainer>
    </>
  );
};

export default Header;
const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #00329e;
  color: aliceblue;
`;

const StyledForm = styled.div`
  border-radius: 10px;
  background-color: #ffff;
  padding: 30px;
  min-width: 500px;
  min-height: 250;
  position: fixed;
`;

const StyledButtonModal = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 20px;
`;
