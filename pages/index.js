import axios from "axios";
import { useState } from "react";
import Button from "../components/UI/buttons/Button.jsx";
import Inputs from "../components/UI/froms/Inputs.jsx";

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
