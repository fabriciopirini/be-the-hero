import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { A, Button, Form } from "../../common/styles";
import {
  RegisterContainer,
  Content,
  Section,
  H1,
  P,
  Input,
  InputGroup
} from "./styles";

import logoImg from "../../assets/logo.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const history = useHistory();

  const handleRegister = async e => {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      country
    };
    console.log(data);

    try {
      const res = await api.post("npos", data);

      alert(`Your access ID: ${res.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Error on registering, try again.");
    }
  };

  return (
    <RegisterContainer>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <H1>Register</H1>
          <P>Signup on our platform and help people find our NPO cases</P>

          <A to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Go back
          </A>
        </Section>
        <Form onSubmit={handleRegister}>
          <Input
            placeholder="NPO name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Whatsapp number"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <InputGroup>
            <Input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="Country"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </InputGroup>

          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </RegisterContainer>
  );
};

export default Register;
