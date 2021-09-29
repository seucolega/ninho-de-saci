import React from 'react';
import styled from 'styled-components';
import { Button, Container, SectionHeader, Text, Wrapper } from '../../components/atoms';
import { useAboutActionContext } from '../../context/contexts';
import { getThemeColor } from '../../styles/utils';
import { aboutContent } from '../../utils/data';
import generateKey from '../../utils/uniqueKeyGenerator';

const BoxWrapper = styled(Wrapper)``;
const TextWrapper = styled(Wrapper)``;
const HeaderWrapper = styled(Wrapper)``;

const About = ({ className }) => {
  const toggleShowAbout = useAboutActionContext();
  const text = aboutContent.text.split('\n');

  return (
    <Container className={ className }>
      <BoxWrapper>
        <HeaderWrapper>
          <SectionHeader>{ aboutContent.title }</SectionHeader>
          <Button onClick={ toggleShowAbout }>X</Button>
        </HeaderWrapper>
        <TextWrapper>
          { text.map((paragraph) => <Text key={ generateKey() }>{ paragraph }</Text>) }
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
