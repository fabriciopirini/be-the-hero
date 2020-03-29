import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { A, Button, SVG } from "../../common/styles";
import { LogonContainer, Section, Form, H1, FormInput } from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

const Logon = () => {
  const [id, setId] = useState("");
  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const resp = await api.post("sessions", { id });

      localStorage.setItem("npoId", id);
      localStorage.setItem("npoName", resp.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Failed to login, try again.");
    }
  };

  return (
    <LogonContainer>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <H1>Log in</H1>

          <FormInput
            placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
};

export default Logon;
