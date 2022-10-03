import axios from "axios";
import { useState } from "react";
import Button from "../components/UI/buttons/Button.jsx";
import Inputs from "../components/UI/froms/Inputs.jsx";
import Labels from "../components/UI/froms/Labels.jsx";

export default function Home(props) {
  const [data, setData] = useState(props.users);
  console.log(data);
  return (
    <div>
      <h1>WebNation</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Labels>Web Nation</Labels>
      <Inputs type="password" />
      <Button>Webnation</Button>
    </div>
  );
}

export const getStaticProps = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: users?.data }, // will be passed to the page component as props
  };
};
