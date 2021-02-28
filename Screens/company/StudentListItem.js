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

const StudentListItem = (props) => {
  console.log('propsssss', props.data);
  var currentdate = new Date();
  var time = currentdate.getHours() + ':' + currentdate.getMinutes();
  return (
    <TouchableOpacity>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/student.png')} />
          </Left>
          <Body>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {props.data.fullName}
            </Text>
            <Text note>
              {'Education ' +
                props.data.education +
                '  Percentage' +
                props.data.percentage}
            </Text>
          </Body>
          <Right>
            <Text note>{time} pm</Text>
          </Right>
        </ListItem>
      </List>
    </TouchableOpacity>
  );
};

export default StudentListItem;

const styles = StyleSheet.create({});

// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
