import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Header} from 'native-base';
const StudentHome = (props) => {
  const logout = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 50,
        backgroundColor: '#0095a9',
      }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('JobPostList');
        }}
        style={{
          height: 150,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Job Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CompaniesList');
        }}
        style={{
          height: 150,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Companies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={logout}
        style={{
          height: 150,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StudentHome;

const styles = StyleSheet.create({});
