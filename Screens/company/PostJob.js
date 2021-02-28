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

const PostJob = (props) => {
  var currentdate = new Date();
  var time = currentdate.getHours() + ':' + currentdate.getMinutes();

  const initialCompany = {
    jobTitle: '',
    education: '',
    skills: '',
    location: '',
    timing: '',
    salary: '',
    contact: '',
    time: time,
    key: '',
  };
  const [postJobInput, setpostJobInput] = useState(initialCompany);
  const [error, seterror] = useState({err: true, errmsg: ''});
  console.log('postJobInput', postJobInput);

  const registerCompany = () => {
    if (
      postJobInput.jobTitle == '' ||
      postJobInput.education == '' ||
      postJobInput.skills == '' ||
      postJobInput.location == '' ||
      postJobInput.timing == '' ||
      postJobInput.salary == '' ||
      postJobInput.contact == ''
    ) {
      seterror({
        err: true,
        errmsg: 'Enter All Details',
      });
    } else {
      const newReference = database().ref('/jobsposts/').push();
      // let uniqueKey = newReference.key
      postJobInput.key = newReference.key;
      newReference
        .set(postJobInput)
        .then(() => {
          alert('Post Job Successfully...');
          props.navigation.navigate('CompanyHome');
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
          <Label>Job Title</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, jobTitle: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Require Education</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, education: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Require Skills</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, skills: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>location</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, location: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Timing</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, timing: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Salary</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, salary: text});
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>contact</Label>
          <Input
            autoCapitalize={'none'}
            onChangeText={(text) => {
              setpostJobInput({...postJobInput, contact: text});
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
          <Text style={{color: 'white'}}>Post Job</Text>
        </Button>
      </View>
    </View>
  );
};

export default PostJob;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
