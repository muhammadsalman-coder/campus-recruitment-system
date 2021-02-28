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

const JobPostListItem = (props) => {
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
              {props.data.jobTitle}
            </Text>
            <Text note>
              {'Require Education ' +
                props.data.education +
                '  Percentage ' +
                props.data.salary}
            </Text>
          </Body>
          <Right>
            <Text note>{props.data.time} pm</Text>
          </Right>
        </ListItem>
      </List>
    </TouchableOpacity>
  );
};

export default JobPostListItem;

const styles = StyleSheet.create({});

// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
