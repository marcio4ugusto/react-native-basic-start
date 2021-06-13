import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding-vertical: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #d1d5db;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <>
      <StatusBar />
      <Container>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default Header;
