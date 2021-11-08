import {
  Container,
  Wrapper,
  Title,
  Content,
  PlanetImage,
  PlanetContent,
  PlanetNav,
  NavItem,
  PlanetDescription,
  PlanetMetrics,
} from './styles';

import Header from '../../components/Header';

import { useState } from 'react';

import data from '../../data.json';

export default function Destination() {

  const [planet, setPlanet] = useState(0);

  return (
    <Container>
      <Header navItemSelected="destination" />

      <Wrapper>
        <Title data-aos="fade-right"><b>01</b> Pick your destination</Title>

        <Content>
          <PlanetImage data-aos="zoom-in">
            <img src={data.destinations[planet].images.png} alt={data.destinations[planet].name} />
          </PlanetImage>

          <PlanetContent data-aos="fade-left">
            <PlanetNav>
              { data.destinations.map((destination, index) => (
                <NavItem 
                  key={index}
                  onClick={() => setPlanet(index)}
                  selected={planet === index && true}
                >{destination.name}</NavItem>
              )) }
            </PlanetNav>

            <PlanetDescription>
              <h1>{data.destinations[planet].name}</h1>

              <p>{data.destinations[planet].description}</p>
            </PlanetDescription>

            <PlanetMetrics>
              <div>
                <label>Avg. Distange</label>
                <span>{data.destinations[planet].distance}</span>
              </div>

              <div>
                <label>Est. travel time</label>
                <span>{data.destinations[planet].travel}</span>
              </div>
            </PlanetMetrics>
          </PlanetContent>
        </Content>
      </Wrapper>
    </Container>
  );
}