import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text, Dimensions, TextInput, Image, ToastAndroid, TouchableHighlight
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import UserServices from '../Services/UserServices';

const screenHeight = Math.round(Dimensions.get("window").height);

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.config = {
      loginURL: 'http://demo.ciaoworks.com/practical/login.php'
    }
    this.state = {
      loading: false,
      url: 'user.techno.com',
      username: 'practical@gmail.com',
      password: 'user@123',
      remember: false,
      terms: false
    }
    this.UserServices = new UserServices();
    this.Login = this.Login.bind(this);
    this.navigation = this.props.navigation;
  }

  // LOGIN API
  Login = async () => {

    if (this.state.url === '') {
      ToastAndroid.show('URL should not be empty!', ToastAndroid.SHORT);
      return 0;
    } else if (this.state.username === '') {
      ToastAndroid.show('Username should not be empty!', ToastAndroid.SHORT);
      return 0;
    } else if (this.state.password === '') {
      ToastAndroid.show('Password should not be empty!', ToastAndroid.SHORT);
      return 0;
    }

    let data = {
      "username": this.state.username,
      "password": this.state.password,
      "url": this.state.url,
      "multiple_user_login": {
        "device_token": "dMChrtBklsU:APA91bGv-",
        "device_type": "android",
        "dedevicevice_model": "Nokia 4.2",
        "_version": "10",
        "app_version": "2.0",
        "device_name": "Nokia",
        "device_uid": "f123447630d7c358"
      }
    };
    this.UserServices.LoginUser(this.config.loginURL, data).then(data => {
      if (data.code == 200) {
        this.navigation.navigate('Dashboard', { data: data });
      } else {
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        return 0;
      }
    })
  }

  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <View style={styles.FirstSection}>
          <View style={styles.First_Content_Section}></View>
          <View style={styles.Second_Content_Section}></View>
        </View>

        <View style={styles.MiddleSection}>
          <View style={styles.ContentSection}>
            <View style={styles.LogoSection}>
              <Image source={require("../assets/app_logo.png")} style={{ alignSelf: "center" }} />
            </View>
            <View style={styles.InputSection}>
              <View style={styles.InputContainer}>
                <Image
                  source={require('../assets/link-1.5.png')}
                  style={styles.IconContainer} />
                <TextInput style={styles.Inputs}
                  placeholder="URL"
                  placeholderTextColor='#707070'
                  keyboardType="default"
                  onChangeText={(url) => this.setState({ url })} />
              </View>
              <View style={styles.InputContainer}>
                <Image
                  source={require('../assets/padlock-1.5.png')}
                  style={styles.IconContainer} />
                <TextInput style={styles.Inputs}
                  placeholder="Username"
                  placeholderTextColor='#707070'
                  keyboardType="default"
                  onChangeText={(username) => this.setState({ username })} />
              </View>
              <View style={styles.InputContainer}>
                <Image
                  source={require('../assets/user-1.5.png')}
                  style={styles.IconContainer} />
                <TextInput style={styles.Inputs}
                  placeholder="Password"
                  placeholderTextColor='#707070'
                  secureTextEntry={true}
                  keyboardType="default"
                  onChangeText={(password) => this.setState({ password })} />
              </View>

              <View style={styles.InputContainerCheckbox}>
                <TouchableHighlight onPress={() => this.setState({ remember: !this.state.remember })}>
                  <View style={styles.CheckBoxSubConatiner}>
                    <CheckBox
                      tintColors={'#fff'}
                      value={this.state.remember} />
                    <Text style={{ marginTop: 8, marginLeft: 5, color: '#666' }}>Remember me</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => alert("Forgot!")} style={{ alignItems: "flex-end", width: "60%"}} >
                  <View style={styles.CheckBoxSubConatiner}>
                    <Text style={{ marginTop: 8, marginLeft: 5, color: '#F76951', alignSelf: "flex-end" }}>Forgot Password?</Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.InputContainerCheckbox}>
                <TouchableHighlight onPress={() => this.setState({ terms: !this.state.terms })}>
                  <View style={styles.CheckBoxSubConatiner}>
                    <CheckBox
                      tintColors={'#fff'}
                      value={this.state.terms} />
                    <Text style={{ marginTop: 6, marginLeft: 5, color: '#666' }}>I accept Terms & Condition</Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={[styles.InputContainerCheckbox, { justifyContent: "center" }]}>
                <TouchableHighlight style={styles.signInButton}
                  onPress={() => this.Login()}>
                  <Text style={{ color: '#fff' }}>Sign In</Text>
                </TouchableHighlight>
              </View>

              <View style={[styles.InputContainerCheckbox, { justifyContent: "center" }]}>
                <TouchableHighlight style={styles.LinkContainerremver}
                  onPress={() => alert("Sign IN !")}>
                  <Text style={{ color: '#F76951' }} >Privacy Policy</Text>
                </TouchableHighlight>
                <View>
                  <Text style={{ color: "gray", marginTop: 16 }}> and</Text>
                </View>
                <TouchableHighlight style={styles.LinkContainerremver}
                  onPress={() => alert("Terms & Condition!")}>
                  <Text style={{ color: '#F76951' }} >Terms & Condition</Text>
                </TouchableHighlight>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};
const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    flexDirection: "column",
  },
  FirstSection: {
    flex: 1,
    flexDirection: "column",
    height: screenHeight
  },
  First_Content_Section: {
    flex: 0.3,
    backgroundColor: "#fff",
  },
  Second_Content_Section: {
    flex: 0.7,
    backgroundColor: "#F76951",
  },
  MiddleSection: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#fff",
    position: "absolute",
    top: 40,
    left: 20,
    width: "90%",
    elevation: 50,
  },
  ContentSection: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  LogoSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    paddingVertical: 50
  },
  InputSection: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginBottom: 15
  },
  InputContainer: {
    borderWidth: 1,
    borderColor: "#d6d6d6",
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  InputContainerCheckbox: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  Inputs: {
    fontSize: 14,
    height: 54,
    marginLeft: 10,
    paddingLeft: 10,
    flex: 1,
  },
  IconContainer: {
    width: 25,
    height: 25,
    marginTop: 14,
    marginLeft: 15,
  },
  LinkContainerremver: {
    height: 30,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 15,
    marginLeft: 15
  },
  CheckBoxSubConatiner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  signInButton: {
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#F76951",
    borderRadius: 5
  }

});

export default LoginScreen;
