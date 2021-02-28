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
  Icon,
} from 'native-base';
import {connect} from 'react-redux';
import {set_data} from '../../store/actions';
const AdminStudentListItem = (props) => {
  console.log('propsssss adminstudentlist', props);
  var currentdate = new Date();
  var time = currentdate.getHours() + ':' + currentdate.getMinutes();
  count = 1;
  var mykey = {key: props.data.key};

  var deleteStudent = () => {
    props.set_data(mykey);
    // database().ref(`/students/${props.data.key}`).remove();
  };
  return (
    <View>
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
            <TouchableOpacity onPress={deleteStudent}>
              <Icon
                type="MaterialCommunityIcons"
                name="delete-empty"
                style={{color: '#16365c', fontSize: 35}}
              />
            </TouchableOpacity>
          </Right>
        </ListItem>
      </List>
    </View>
  );
};

// export default AdminStudentListItem;

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  Users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  set_data: (e) => {
    dispatch(set_data(e));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminStudentListItem);
// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
