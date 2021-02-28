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
import AdminStudentListItem from './AdminStudentListItem';
import {connect} from 'react-redux';

const AdminStudentList = (props) => {
  console.log('----------usessss----', props.userKey);
  const [studentData, setstudentData] = useState([]);
  const [load, setloading] = useState({count: 0, loading: true});

  //   var count = 0;
  const [del, setdel] = useState(0);
  const delItem = (v) => {
    console.log('i-------------', v);
  };
  var _list = [];
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
  }, [props.userKey]);

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
          return (
            <AdminStudentListItem key={index} data={value} del={delItem} />
          );
        })}
      </View>
    </>
  );
};

// export default AdminStudentList;

const styles = StyleSheet.create({});
const mapStateToProps = (state) => ({
  userKey: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  set_data: (e) => {
    dispatch(set_data(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminStudentList);
// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
