import React, { useEffect } from "react";
import CardContainer from "../../UI/cards/CardContainer";
import CardTextContainer from "../../UI/cards/CardTextContainer";
import Text from "../../UI/typography/Text";

const UserCard = ({ name, phone, email }) => {
  useEffect(() => {
    console.log(window.screen.width);
  });
  return (
    <CardContainer>
      <CardTextContainer>
        <Text size="lg">{name}</Text>
        <h4>email:{email}</h4>
        <p>Phone: {phone}</p>
      </CardTextContainer>
    </CardContainer>
  );
};

export default UserCard;
