import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { A, Button, Form } from "../../common/styles";
import {
  NewIncidentContainer,
  Section,
  H1,
  Content,
  P,
  Input,
  TextArea
} from "./styles";

import logoImg from "../../assets/logo.svg";

const NewIncident = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const npoId = localStorage.getItem("npoId");

  const history = useHistory();

  const handleNewIncident = async e => {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: { Authorization: npoId }
      });

      history.push("/profile");
    } catch (err) {
      console.log(err);
      alert("Error on registering a new case, try again");
    }
  };
  return (
    <NewIncidentContainer>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <H1>Register a new case</H1>
          <P>Describe the case in detail to find a hero to solve it.</P>

          <A to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Back to Home
          </A>
        </Section>

        <Form onSubmit={handleNewIncident}>
          <Input
            placeholder="Case title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            placeholder="Value in USD"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </NewIncidentContainer>
  );
};

export default NewIncident;
