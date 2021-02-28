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

const AdminLogin = (props) => {
  const [adminLogin, setadminLogin] = useState({username: '', password: ''});
  const [error, seterror] = useState({err: true, errmsg: ''});

  const loginAdmin = () => {
    if (adminLogin.username == 'admin' && adminLogin.password == 'admin') {
      seterror({
        err: false,
        errmsg: 'successfull login',
      });
      props.navigation.navigate('AdminHome');
    } else {
      seterror({
        err: true,
        errmsg: 'Invalid username Password',
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
          <Label>Username</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setadminLogin({...adminLogin, username: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setadminLogin({...adminLogin, password: text});
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
      <Button
        light
        onPress={loginAdmin}
        style={{
          marginTop: 30,
          marginLeft: 10,
          backgroundColor: '#16365c',
        }}>
        <Text style={{color: 'white'}}> Admin Login </Text>
      </Button>
    </View>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
