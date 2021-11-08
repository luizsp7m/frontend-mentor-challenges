import Header from "../../components/Header";

import {
  Container,
  Wrapper,
  Title,
  Image,
  Content,
  TechnologyContent,
  Nav,
  NavItem,
  TechnologyDescription,
} from "./styles";

import data from '../../data.json';

import { useState } from "react";

export default function Technology() {

  const [technology, setTechnology] = useState(0);

  return (
    <Container>
      <Header navItemSelected="technology" />

      <Wrapper>
        <Title data-aos="fade-right"><b>03</b> Space launch 101</Title>

        <Content>
          <TechnologyContent data-aos="fade-right">
            <Nav>
              {data.technology.map((tech, index) => (
                <NavItem
                  key={index}
                  onClick={() => setTechnology(index)}
                  selected={index === technology && true}
                >{index + 1}</NavItem>
              ))}
            </Nav>

            <TechnologyDescription>
              <h2>The terminology...</h2>
              <h1>{data.technology[technology].name}</h1>
              <p>{data.technology[technology].description}</p>
            </TechnologyDescription>
          </TechnologyContent>

          <Image data-aos="fade-left">
            <img src={data.technology[technology].images.portrait} alt="OK" />
          </Image>
        </Content>
      </Wrapper>
    </Container>
  );
}