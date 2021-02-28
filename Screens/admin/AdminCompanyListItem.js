import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

const AdminCompanyListItem = (props) => {
  console.log('propsssss', props.data);
  const deleteCompany = (key) => {
    // database().ref(`/students/${key}`).remove();

    props.del.delItem(count + 1);
  };
  return (
    <TouchableOpacity>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/company.png')} />
          </Left>
          <Body>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {props.data.companyName}
            </Text>
            <Text note>{'Location ' + props.data.location}</Text>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => {
                deleteCompany(props.data.key);
              }}>
              <Icon
                type="MaterialCommunityIcons"
                name="delete-empty"
                style={{color: '#16365c', fontSize: 35}}
              />
            </TouchableOpacity>
          </Right>
        </ListItem>
      </List>
    </TouchableOpacity>
  );
};

export default AdminCompanyListItem;

const styles = StyleSheet.create({});

// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
