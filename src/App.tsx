import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import Header from './components/Header';
import AddItem from './components/AddItem';
import Item from './components/Item';

import {IItem} from './Interfaces';

const Main = styled.SafeAreaView`
  flex: 1;
  background-color: #f9fafb;
  font-size: 18px;
  font-family: system-ui;
`;

const Wrapper = styled.View`
  padding: 20px;
`;

const App = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  return (
    <Main>
      <Header title="List" />
      <Wrapper>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({item}) => <Item title={item.title} />}
        />
      </Wrapper>
    </Main>
  );
};

export default App;
