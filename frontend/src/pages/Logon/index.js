import React from "react";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import { A, Button, FormInput, SVG } from "../../common/styles";
import { LogonContainer, Section, Form, H1 } from "./styles";

function Logon() {
  return (
    <LogonContainer>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <H1>Log in</H1>

          <FormInput placeholder="Your ID" />
          <Button type="submit">Login</Button>

          <A to="/register">
            <SVG size={16} color="E02041" />
            I'm not registered yet
          </A>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </LogonContainer>
  );
}

export default Logon;
