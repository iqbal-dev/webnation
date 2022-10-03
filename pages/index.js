/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserCard from "../components/Shared/card/UserCard.jsx";
import AddUserModal from "../components/Shared/modal/AddUserModal.jsx";
import Button from "../components/UI/buttons/Button.jsx";
import Inputs from "../components/UI/froms/Inputs.jsx";
import useDebounce from "../hooks/useDebounce.js";
const Container = styled.div`
  width: 90%;
  margin: 10px auto;
`;

const excludeColumns = ["name", "email", "phone"];
export default function Home(props) {
  const [userData, setUserData] = useState(props.users);
  const [modalOpen, setModalOpen] = useState(false);
  const handleAddNewMember = (newMember) => {
    setUserData((prev) => [...prev, newMember]);
  };

  const [searchingValue, setSearchingValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  // exclude column list from filter

  const searchTerm = useDebounce(searchingValue, 200);
  let filter;
  useEffect(() => {
    filter = userData?.filter((el) => {
      //if no input the return the original
      if (searchTerm === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return Object.keys(el).some((key) =>
          excludeColumns.includes(key)
            ? el[key]?.toString().toLowerCase().includes(searchTerm)
            : false
        );
      }
    });
    setFilterData(filter);
  }, [searchTerm?.length, userData?.length]);
  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            margin: "2rem 0",
          }}
        >
          <Inputs
            type="text"
            placeholder="Search by name, email, phone"
            onChange={(e) => setSearchingValue(e.target.value)}
          />
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Add
          </Button>
        </div>
        {userData?.length !== filterData.length && (
          <p style={{ marginBottom: "1rem" }}>
            Result Matches:{filterData?.length}
          </p>
        )}
        {filterData?.length ? (
          <div
            style={{
              display: "grid",
              width: "100%",
              gridGap: "3rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              alignItems: "start",
            }}
          >
            {filterData?.map((item) => (
              <UserCard
                key={item.id}
                name={item.name}
                phone={item.phone}
                email={item.email}
              />
            ))}
          </div>
        ) : (
          <h3 style={{ textAlign: "center" }}>User is not found</h3>
        )}
        {modalOpen && (
          <AddUserModal
            setOpenModal={setModalOpen}
            modalOpen={modalOpen}
            handleAddNewMember={handleAddNewMember}
          />
        )}
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: users?.data }, // will be passed to the page component as props
  };
};
