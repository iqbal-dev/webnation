import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Shared/card/Card.jsx";
import Button from "../components/UI/buttons/Button.jsx";
import CardTextContainer from "../components/UI/cards/CardTextContainer.jsx";
import Inputs from "../components/UI/froms/Inputs.jsx";
import Labels from "../components/UI/froms/Labels.jsx";
import Text from "../components/UI/typography/Text.jsx";
const Container = styled.div`
  width: 80%;
  margin: 10px auto;
`;
export default function Home(props) {
  const [data, setData] = useState(props.users);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
        <Card>
          <CardTextContainer>
            <Text size="lg">Joh Doe</Text>
            <h4>email:text@gmail.com</h4>
            <p>Phone: 3878q2348</p>
          </CardTextContainer>
        </Card>
      </div>
      <Labels>Web Nation</Labels>
      <Inputs type="password" placeholder="Enter your password" />
      <Text>asdjhfj</Text>
      <Button>Webnation</Button>
    </Container>
  );
}

export const getStaticProps = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: users?.data }, // will be passed to the page component as props
  };
};
