import React from "react";
import useForm from "../../../hooks/useForm";
import { validate } from "../../../utils/validation";
import Button from "../../UI/buttons/Button";
import ModalBody from "../../UI/modals/ModalBody";
import ModalContainer from "../../UI/modals/ModalContainer";
import ModalTitle from "../../UI/modals/ModalTitle";
import ModalWrapper from "../../UI/modals/ModalWrapper";
import InputGroup from "../forms/InputGroup";
const init = {
  name: "",
  email: "",
  phone: "",
};

const AddUserModal = ({ setOpenModal, close }) => {
  const {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm({
    init,
    validate,
  });
  const onSubmit = ({ hasError, values, errors }) => {
    console.log(hasError, values, errors);
  };
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
        <ModalTitle>Add new Member</ModalTitle>
        <ModalBody>
          <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <InputGroup
              value={state.name.value}
              label={"Name:"}
              name={"name"}
              placeholder={"Enter Your Name"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={state.name.error}
            />
            <InputGroup
              value={state.email.value}
              label={"Email:"}
              name={"email"}
              type="email"
              placeholder={"Enter Yur Email"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={state.email.error}
            />
            <InputGroup
              value={state.phone.value}
              label={"Phone:"}
              name={"phone"}
              type="phone"
              placeholder={"Enter Your Phone Number"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={state.phone.error}
            />
            <div
              style={{
                padding: "1rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "end",
              }}
            >
              <Button bg="cornflowerblue" color="white" type="submit">
                Add
              </Button>
              <Button
                bg={"crimson"}
                color="#fff"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default AddUserModal;
