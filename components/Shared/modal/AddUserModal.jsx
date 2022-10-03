import React, { useState } from "react";
import Button from "../../UI/buttons/Button";
import ModalBody from "../../UI/modals/ModalBody";
import ModalContainer from "../../UI/modals/ModalContainer";
import ModalTitle from "../../UI/modals/ModalTitle";
import ModalWrapper from "../../UI/modals/ModalWrapper";
import InputGroup from "../forms/InputGroup";
const init = {
  title: {
    value: "",
    error: "",
  },
};
const AddUserModal = ({ setOpenModal, close }) => {
  const [state, setState] = useState({ ...init });
  const handleChange = () => {};

  const handleFocus = () => {};
  const handleBlur = () => {};
  return (
    <ModalWrapper
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </Button>
        </div>
        <ModalTitle>Add new User</ModalTitle>
        <ModalBody>
          <InputGroup
            value={state.title.value}
            label={"Title:"}
            name={"title"}
            placeholder={"Software Engineer"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <InputGroup
            value={state.title.value}
            label={"Title:"}
            name={"title"}
            placeholder={"Software Engineer"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <InputGroup
            value={state.title.value}
            label={"Title:"}
            name={"title"}
            placeholder={"Software Engineer"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <InputGroup
            value={state.title.value}
            label={"Title:"}
            name={"title"}
            placeholder={"Software Engineer"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <InputGroup
            value={state.title.value}
            label={"Title:"}
            name={"title"}
            placeholder={"Software Engineer"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <div
            style={{
              padding: "1rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "end",
            }}
          >
            <Button bg="cornflowerblue" color="white">
              Submit
            </Button>
            <Button
              bg={"crimson"}
              color="#fff"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
          </div>
        </ModalBody>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default AddUserModal;
