import {
  Container,
  Wrapper,
  Title,
  Content,
  CrewContent,
  CrewDescription,
  NavCrew,
  NavItem,
  CrewImage,
} from "./styles";

import Header from '../../components/Header';

import data from '../../data.json';

import { useState } from "react";

export default function Crew() {

  const [person, setPerson] = useState(0)

  return (
    <Container>
      <Header navItemSelected="crew" />
      <Wrapper>
        <Title><b>02</b> Meet your crew</Title>

        <Content>
          <CrewContent>
            <CrewDescription>
              <h2>{data.crew[person].role}</h2>
              <h1>{data.crew[person].name}</h1>
              <p>{data.crew[person].bio}</p>
            </CrewDescription>

            <NavCrew>
              {data.crew.map((crew, index) => (
                <NavItem
                  key={index}
                  onClick={() => setPerson(index)}
                  selected={person === index && true}
                />
              ))}
            </NavCrew>
          </CrewContent>

          <CrewImage>
            <img src={data.crew[person].images.png} alt={data.crew[person].name} />
          </CrewImage>
        </Content>
      </Wrapper>
    </Container>
  );
}