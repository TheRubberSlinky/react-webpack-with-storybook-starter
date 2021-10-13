import React from "react";
import { Heading } from "../../components/Typography/Headings";
import Container from "../../wrappers/Container";

const Index: React.FC = () => {
  return (
    <Container>
      <Heading size={1}>About</Heading>
      <Heading size={2}>The Company</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint
        neque explicabo perferendis eligendi accusantium earum, consequatur
        harum, aut eum omnis molestias rem vitae voluptas incidunt ratione vel.
        Corporis, a?
      </p>
    </Container>
  );
};

export default Index;
