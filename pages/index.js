import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import UserCard from "../components/Shared/card/UserCard.jsx";
import Button from "../components/UI/buttons/Button.jsx";
import Inputs from "../components/UI/froms/Inputs.jsx";
const Container = styled.div`
  width: 90%;
  margin: 10px auto;
`;
export default function Home(props) {
  const [data, setData] = useState(props.users);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  console.log(data);
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
        <Button>Webnation</Button>
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
        {data?.map((item) => (
          <UserCard
            key={item.id}
            name={item.name}
            phone={item.phone}
            email={item.email}
          />
        ))}
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: users?.data }, // will be passed to the page component as props
  };
};
