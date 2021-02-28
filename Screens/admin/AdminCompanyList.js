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
import AdminCompanyListItem from './AdminCompanyListItem';

const AdminCompanyList = (props) => {
  const [companiesData, setcompaniesData] = useState([]);
  const [load, setloading] = useState({count: 0, loading: true});
  var _list = [];
  //   var count = 0;
  useEffect(() => {
    database()
      .ref('/company/')
      .on('child_added', (snapshot) => {
        console.log('-------------post job-----', snapshot.val());

        _list.push(snapshot.val());
        setcompaniesData(_list);
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
        {companiesData.map((value, index) => {
          //   console.log('----------index---------', index, '--------', value);
          return <AdminCompanyListItem key={index} data={value} />;
        })}
      </View>
    </>
  );
};

export default AdminCompanyList;

const styles = StyleSheet.create({});

// <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
// <Left>
//   <Text>Simon Mignolet</Text>
// </Left>
// <Right>
//   <Icon name="arrow-forward" />
// </Right>
// </ListItem>
