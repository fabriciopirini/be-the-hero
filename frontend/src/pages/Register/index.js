import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import { A, Button } from "../../common/styles";
import {
  RegisterContainer,
  Content,
  Section,
  H1,
  P,
  Form,
  Input,
  InputGroup
} from "./styles";

import logoImg from "../../assets/logo.svg";

function Register() {
  return (
    <RegisterContainer>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <H1>Register</H1>
          <P>Signup on our platform and help people find our NPO cases</P>

          <A to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Go back
          </A>
        </Section>
        <Form>
          <Input placeholder="NPO name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Telephone number" />

          <InputGroup>
            <Input placeholder="City" />
            <Input placeholder="Country" />
          </InputGroup>

          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </RegisterContainer>
  );
}

export default Register;
