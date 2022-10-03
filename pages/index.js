import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import UserCard from "../components/Shared/card/UserCard.jsx";
import AddUserModal from "../components/Shared/modal/AddUserModal.jsx";
import Button from "../components/UI/buttons/Button.jsx";
import Inputs from "../components/UI/froms/Inputs.jsx";
const Container = styled.div`
  width: 90%;
  margin: 10px auto;
`;
export default function Home(props) {
  const [userData, setUserData] = useState(props.users);
  const [modalOpen, setModalOpen] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleAddNewMember = (newMember) => {
    setUserData((prev) => [...prev, newMember]);
  };
  return (
    <Container>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <Inputs type="text" placeholder="Search" onChange={handleChange} />
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Webnation
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridGap: "3rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          alignItems: "start",
        }}
      >
        {userData?.map((item) => (
          <UserCard
            key={item.id}
            name={item.name}
            phone={item.phone}
            email={item.email}
          />
        ))}
      </div>
      {modalOpen && (
        <AddUserModal
          setOpenModal={setModalOpen}
          modalOpen={modalOpen}
          handleAddNewMember={handleAddNewMember}
        />
      )}
    </Container>
  );
}

export const getStaticProps = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: users?.data }, // will be passed to the page component as props
  };
};
