import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import CompanyLogin from '../company/CompanyLogin';
import CompanyRegister from '../company/CompanyRegister';
import AdminLogin from '../admin/AdminLogin';
import AdminCompanyList from '../admin/AdminCompanyList';
import StudentLogin from '../student/StudentLogin';
import StudentRegister from '../student/StudentRegister';
import AdminHome from '../admin/AdminHome';
import StudentHome from '../student/StudentHome';
import CompanyHome from '../company/CompanyHome';
import PostJob from '../company/PostJob';
import StudentList from '../company/StudentList';
import JobPostList from '../student/JobPostList';
import CompaniesList from '../student/CompaniesList';
import AdminStudentList from '../admin/AdminStudentList';
const Stack = createStackNavigator();

const Navigation = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            title: '',
          }}
        />
        <Stack.Screen
          name="AdminLogin"
          component={AdminLogin}
          options={{
            title: 'Admin Login',
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHome}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
          }}
        />
        <Stack.Screen
          name="CompanyLogin"
          component={CompanyLogin}
          options={{
            headerTitleStyle: {color: 'white'},
            headerPressColorAndroid: {color: 'red'},
            headerTintColor: '#fff',
            headerTransparent: true,
            title: '',
            color: '#fff',
          }}
        />
        <Stack.Screen
          name="CompanyRegister"
          component={CompanyRegister}
          options={{
            headerTitleStyle: {color: 'white'},
            headerPressColorAndroid: {color: 'red'},
            headerTintColor: '#fff',
            headerTransparent: true,
            title: '',
            color: '#fff',
          }}
        />
        <Stack.Screen
          name="CompanyHome"
          component={CompanyHome}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
          }}
        />
        <Stack.Screen
          name="PostJob"
          component={PostJob}
          options={{
            headerTitleStyle: {color: 'white'},
            headerPressColorAndroid: {color: 'red'},
            headerTintColor: '#fff',
            headerTransparent: true,
            title: '',
            color: '#fff',
          }}
        />
        <Stack.Screen
          name="StudentList"
          component={StudentList}
          options={{
            title: 'Student List',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#16365c',
            },
          }}
        />
        <Stack.Screen
          name="StudentLogin"
          component={StudentLogin}
          options={{
            headerTitleStyle: {color: 'white'},
            headerPressColorAndroid: {color: 'red'},
            headerTintColor: '#fff',
            headerTransparent: true,
            title: '',
            color: '#fff',
          }}
        />
        <Stack.Screen
          name="StudentHome"
          component={StudentHome}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
          }}
        />
        <Stack.Screen
          name="StudentRegister"
          component={StudentRegister}
          options={{
            headerTitleStyle: {color: 'white'},
            headerPressColorAndroid: {color: 'red'},
            headerTintColor: '#fff',
            headerTransparent: true,
            title: '',
            color: '#fff',
          }}
        />
        <Stack.Screen
          name="JobPostList"
          component={JobPostList}
          options={{
            title: 'Job Posts',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#16365c',
            },
          }}
        />
        <Stack.Screen
          name="CompaniesList"
          component={CompaniesList}
          options={{
            title: 'CompaniesList',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#16365c',
            },
          }}
        />
        <Stack.Screen
          name="AdminCompanyList"
          component={AdminCompanyList}
          options={{
            title: 'AdminCompanyList',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#16365c',
            },
          }}
        />
        <Stack.Screen
          name="AdminStudentList"
          component={AdminStudentList}
          options={{
            title: 'Admin Student List',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#16365c',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// In App.js in a new project
