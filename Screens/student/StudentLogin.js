import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import database from '@react-native-firebase/database';

const StudentLogin = (props) => {
  const [studentInput, setStudentInput] = useState({
    username: '',
    password: '',
  });
  const [error, seterror] = useState({err: true, errmsg: ''});

  const loginStudent = () => {
    if (studentInput.username == '' || studentInput.password == '') {
      seterror({
        err: true,
        errmsg: 'Invalid username Password',
      });
    } else {
      database()
        .ref('/students/')
        .on('child_added', (snapshot) => {
          var studentData = snapshot.val();
          console.log(
            ' studentData.username',
            studentData.username,
            'studentData.password',
            studentData.password,
          );
          if (
            studentData.email == studentInput.username &&
            studentData.password == studentInput.password
          ) {
            alert('login Successfully');
            seterror({
              err: false,
              errmsg: 'successfull login',
            });
            props.navigation.navigate('StudentHome');
          } else {
            seterror({
              err: true,
              errmsg: 'login error',
            });
          }
        });

      //
    }
  };
  return (
    // <View style={styles.container}>
    //   <Text>hello</Text>
    // </View>
    <View style={{flex: 1, paddingTop: 100, backgroundColor: '#0095a9'}}>
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentInput({...studentInput, username: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentInput({...studentInput, password: text});
            }}
          />
        </Item>
      </Form>
      {error.err ? (
        <View style={{marginLeft: 50, marginTop: 10}}>
          <Text style={{color: 'red'}}>{error.errmsg}</Text>
        </View>
      ) : (
        <View></View>
      )}
      <View style={{flexDirection: 'row'}}>
        <Button
          light
          onPress={loginStudent}
          style={{
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: '#16365c',
          }}>
          <Text style={{color: 'white'}}> Student Login </Text>
        </Button>
        <Button
          light
          onPress={() => {
            props.navigation.navigate('StudentRegister');
          }}
          style={{
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: '#16365c',
          }}>
          <Text style={{color: 'white'}}> Register Student </Text>
        </Button>
      </View>
    </View>
  );
};

export default StudentLogin;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
