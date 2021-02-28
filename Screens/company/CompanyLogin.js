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

const CompanyLogin = (props) => {
  const [companyInput, setCompanyInput] = useState({
    username: '',
    password: '',
  });
  const [error, seterror] = useState({err: true, errmsg: ''});
  console.log("'company input", companyInput);
  const loginCompany = () => {
    if (companyInput.username == '' || companyInput.password == '') {
      seterror({
        err: true,
        errmsg: 'Invalid username Password',
      });
    } else {
      database()
        .ref('/company/')
        .on('child_added', (snapshot) => {
          var companyData = snapshot.val();
          console.log(
            ' studentData.username',
            companyData.username,
            'studentData.password',
            companyData.password,
          );
          if (
            companyData.email == companyInput.username &&
            companyData.password == companyInput.password
          ) {
            alert('login Successfully');
            seterror({
              err: false,
              errmsg: 'successfull login',
            });
            props.navigation.navigate('CompanyHome');
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
              setCompanyInput({...companyInput, username: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setCompanyInput({...companyInput, password: text});
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
          onPress={loginCompany}
          style={{
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: '#16365c',
          }}>
          <Text style={{color: 'white'}}> Company Login </Text>
        </Button>
        <Button
          light
          onPress={() => {
            props.navigation.navigate('CompanyRegister');
          }}
          style={{
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: '#16365c',
          }}>
          <Text style={{color: 'white'}}> Register Company </Text>
        </Button>
      </View>
    </View>
  );
};

export default CompanyLogin;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
