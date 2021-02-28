import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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

const CompaniesListItem = (props) => {
  console.log('propsssss', props.data);

  return (
    <TouchableOpacity>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/student.png')} />
          </Left>
          <Body>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {props.data.companyName}
            </Text>
            <Text note>{'Location ' + props.data.location}</Text>
          </Body>
          <Right>
            <Text note>co</Text>
          </Right>
        </ListItem>
      </List>
    </TouchableOpacity>
  );
};

export default CompaniesListItem;

const styles = StyleSheet.create({});

// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
