import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
// import { set_data } from "../store/actions";
const Home = (props) => {
  console.log('props', props.Users);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0095a9"
        translucent={true}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 100,
          alignItems: 'center',
          backgroundColor: '#0095a9',
        }}>
        <View style={styles.admin}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('AdminLogin');
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/admin.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.company}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CompanyLogin');
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/company.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.student}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('StudentLogin');
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/student.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

// export default Home;

const styles = StyleSheet.create({
  company: {flex: 1},
  student: {flex: 1},
  admin: {flex: 1},
});

const mapStateToProps = (state) => ({
  Users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  set_data: (e) => {
    dispatch(set_data(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

{
  /*
    const myData = { name: "labeb", email: "labeb@gmail.com" };
     <View>
<Text>okay i am in Homes</Text>
<Button
  title="click me"
  onPress={() => {
    alert("Hurry i am click");
  }}
/>
<Button
  title="set me"
  onPress={() => {
    props.set_data(myData);
  }}
/>
</View> */
}
