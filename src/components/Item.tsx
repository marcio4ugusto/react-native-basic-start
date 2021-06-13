import React from 'react';
import styled from 'styled-components/native';

import {IItem} from '../Interfaces';

const ItemWrapper = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #d1d5db;
`;

const ItemName = styled.Text`
  font-weight: 400;
`;

const Item: React.FC<IItem> = ({title}) => {
  return (
    <ItemWrapper>
      <ItemName>{title}</ItemName>
    </ItemWrapper>
  );
};

export default Item;
