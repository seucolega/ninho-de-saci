import React from 'react';
import styled from 'styled-components';
import { Button, Container, SectionHeader, Text, Wrapper } from '../../components/atoms';
import { useAboutActionContext } from '../../context/contexts';
import { getThemeColor } from '../../styles/utils';

const BoxWrapper = styled(Wrapper)``;
const TextWrapper = styled(Wrapper)``;
const HeaderWrapper = styled(Wrapper)``;

const About = ({ className }) => {
  const toggleShowAbout = useAboutActionContext();

  return (
    <Container className={ className }>
      <BoxWrapper>
        <HeaderWrapper>
          <SectionHeader>Sobre o Livro</SectionHeader>
          <Button onClick={ toggleShowAbout }>X</Button>
        </HeaderWrapper>
        <TextWrapper>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus at, voluptate, debitis rerum laudantium ducimus iusto illo quasi distinctio neque nesciunt porro? Praesentium earum molestiae minus quisquam commodi sint distinctio!
          </Text>
          <Text>
            Odit magni deleniti iste cupiditate quae. Tempora voluptate pariatur libero tenetur numquam quam exercitationem magni neque porro eveniet ex, saepe odit dolorem sunt sequi amet quo quidem facilis fugiat ipsa.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus at, voluptate, debitis rerum laudantium ducimus iusto illo quasi distinctio neque nesciunt porro? Praesentium earum molestiae minus quisquam commodi sint distinctio!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus at, voluptate, debitis rerum laudantium ducimus iusto illo quasi distinctio neque nesciunt porro? Praesentium earum molestiae minus quisquam commodi sint distinctio!
          </Text>
        </TextWrapper>
      </BoxWrapper>
    </Container>
  );
};

export default styled(About)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 1;

  ${BoxWrapper} {
    background-color: ${getThemeColor('primary')};
    box-shadow: 15px 15px ${getThemeColor('secondary')};
    color: white;
    width: 50%;
    height: 70%;
    margin: auto;
    overflow: hidden;
    overflow-x: hidden;
    min-width: 400px;
  }

  ${HeaderWrapper} {
    padding: 20px 20px 10px 30px !important;
    width: 100%;
    height: 40px;
    background-color: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${TextWrapper} {
    background-color: none;
    box-shadow: none;
    color: white;
    width: 100%;
    height: 70%;
    overflow: scroll;
    overflow-x: hidden;
    min-width: 400px;
    padding: 0 40px 5% 30px;
  }

  ${SectionHeader} {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 400;
    /* margin: 0 0 1rem 0; */
  }

  ${Button} {
    text-transform: uppercase;
    font-size: 1.8rem;
    background-color: ${getThemeColor('primary')};
    color: white;
    border: 0;
    padding: 10px;

    :hover {
      color: ${getThemeColor('secondary')};
      cursor: pointer;
    }

    :active {
      transform: scale(0.75);
      color: ${getThemeColor('secondary')};
    }
  }

  ${Text} {
    font-size: 1.45rem;
    margin: 0 0 1rem 0;
  }
`;
