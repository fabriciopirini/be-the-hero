import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import {
  ProfileContainer,
  Header,
  Img,
  Span,
  A,
  SmallButton,
  H1,
  Ul,
  Li,
  Strong,
  P,
  DeleteButton
} from "./styles";

import logoImg from "../../assets/logo.svg";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const npoId = localStorage.getItem("npoId");
  const npoName = localStorage.getItem("npoName");

  const history = useHistory();

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: npoId
        }
      })
      .then(res => {
        setIncidents(res.data);
      });
  }, [npoId]);

  const handleDeleteIncident = async id => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: npoId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert("Error on deleting case, try again");
    }
  };

  const handleLogout = () => {
    localStorage.clear();

    history.push("/");
  };

  return (
    <ProfileContainer>
      <Header>
        <Img src={logoImg} alt="Be The Hero" />
        <Span>Welcome, {npoName}</Span>

        <A to="/incidents/new">Register new case</A>
        <SmallButton onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </SmallButton>
      </Header>

      <H1>Registered cases</H1>
      <Ul>
        {incidents.map(incident => (
          <Li key={incident.id}>
            <Strong>CASE:</Strong>
            <P>{incident.title}</P>

            <Strong>DESCRIPTION:</Strong>
            <P>{incident.description}</P>

            <Strong>NEEDED:</Strong>
            <P>
              {Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD"
              }).format(incident.value)}
            </P>
            <DeleteButton onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </DeleteButton>
          </Li>
        ))}
      </Ul>
    </ProfileContainer>
  );
};

export default Profile;
