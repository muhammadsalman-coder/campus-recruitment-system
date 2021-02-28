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

const CompanyRegister = (props) => {
  const initialCompany = {
    companyName: '',
    email: '',
    password: '',
    location: '',
    contact: '',
    key: '',
  };
  const [companyRegister, setCompanyRegister] = useState(initialCompany);
  const [error, seterror] = useState({err: true, errmsg: ''});
  console.log('companyRegister', companyRegister);

  const registerCompany = () => {
    if (
      companyRegister.companyName == '' ||
      companyRegister.email == '' ||
      companyRegister.password == '' ||
      companyRegister.location == '' ||
      companyRegister.contact == ''
    ) {
      seterror({
        err: true,
        errmsg: 'Enter All Details',
      });
    } else {
      const newReference = database().ref('/company/').push();
      // let uniqueKey = newReference.key
      companyRegister.key = newReference.key;
      newReference
        .set(companyRegister)
        .then(() => {
          alert('Register company Successfully...');
          props.navigation.navigate('Home');
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
          <Label>Comapny Name</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setCompanyRegister({...companyRegister, companyName: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>email</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setCompanyRegister({...companyRegister, email: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setCompanyRegister({...companyRegister, password: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>contact</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setCompanyRegister({...companyRegister, contact: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>location</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setCompanyRegister({...companyRegister, location: text});
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
          onPress={registerCompany}
          style={{
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: '#16365c',
          }}>
          <Text style={{color: 'white'}}> Register Company</Text>
        </Button>
      </View>
    </View>
  );
};

export default CompanyRegister;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
