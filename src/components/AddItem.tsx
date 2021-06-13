import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import styled from 'styled-components/native';

import {IItem} from '../Interfaces';

const Heading = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const Form = styled.View`
  margin-top: 30px;
`;

const Input = styled.TextInput`
  padding: 15px;
  border-color: #d1d5db;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 20px;
  &:focus {
    border-color: #9ca3af;
  }
`;

const Button = styled.TouchableOpacity`
  background-color: #9ca3af;
  padding-vertical: 20px;
  border-radius: 5px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;

interface Props {
  setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
  shoppingList: IItem[];
}

const AddItem: React.FC<Props> = ({shoppingList, setShoppingList}) => {
  const [title, setTitle] = useState('');

  const addNew = () => {
    if (!title) {
      Alert.alert('No Item!', 'You need to add an item');
    } else {
      setShoppingList([...shoppingList, {title}]);
      setTitle('');
    }
  };

  return (
    <View>
      <Heading>Add new item</Heading>
      <Form>
        <Input
          placeholder="Enter item"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Button onPress={addNew}>
          <ButtonText>Add New</ButtonText>
        </Button>
      </Form>
    </View>
  );
};

export default AddItem;
