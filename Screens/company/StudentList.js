import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
} from 'native-base';
import database from '@react-native-firebase/database';
import StudentListItem from './StudentListItem';

const StudentList = (props) => {
  const [studentData, setstudentData] = useState([]);
  const [load, setloading] = useState({count: 0, loading: true});
  var _list = [];
  //   var count = 0;
  useEffect(() => {
    database()
      .ref('/students/')
      .on('child_added', (snapshot) => {
        console.log('-------------students-----', snapshot.val());

        _list.push(snapshot.val());
        setstudentData(_list);
        //   count = count +1
        var len = load.count + 1;
        setloading({count: len, loading: false});
      });
  }, []);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#16365c"
        translucent={true}
      />
      <View style={{flex: 1}}>
        {studentData.map((value, index) => {
          //   console.log('----------index---------', index, '--------', value);
          return <StudentListItem key={index} data={value} />;
        })}
      </View>
    </>
  );
};

export default StudentList;

const styles = StyleSheet.create({});

// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
