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

const StudentRegister = (props) => {
  const initialStudent = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    education: '',
    percentage: '',
    gender: '',
    key: '',
  };
  const [studentLogin, setStudentLogin] = useState(initialStudent);
  console.log('studentss', studentLogin);
  const [error, seterror] = useState({err: true, errmsg: ''});

  const registerStudent = () => {
    if (
      studentLogin.fullName == '' ||
      studentLogin.email == '' ||
      studentLogin.password == '' ||
      studentLogin.phone == '' ||
      studentLogin.education == '' ||
      studentLogin.percentage == '' ||
      studentLogin.gender == ''
    ) {
      seterror({
        err: true,
        errmsg: 'please enter all details',
      });
    } else {
      const newReference = database().ref('/students/').push();
      // let uniqueKey = newReference.key
      studentLogin.key = newReference.key;
      newReference
        .set(studentLogin)
        .then(() => {
          alert('Register Student Successfully...');
          props.navigation.navigate('StudentLogin');
        })
        .catch((error) => {
          seterror({
            err: true,
            errmsg: error,
          });
        });

      seterror({
        err: false,
        errmsg: 'successfull login',
      });
    }
  };
  return (
    // <View style={styles.container}>
    //   <Text>hello</Text>
    // </View>
    <View style={{flex: 1, paddingTop: 100, backgroundColor: '#0095a9'}}>
      <Form>
        <Item stackedLabel>
          <Label>Full Name</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, fullName: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, email: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input
            autoCapitalize={'none'}
            secureTextEntry={true}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, password: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Phone no</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, phone: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>education</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, education: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>percentage</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, percentage: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>gender</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setStudentLogin({...studentLogin, gender: text});
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
          onPress={registerStudent}
          style={{
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: '#16365c',
          }}>
          <Text style={{color: 'white'}}> Register Student</Text>
        </Button>
      </View>
    </View>
  );
};

export default StudentRegister;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
