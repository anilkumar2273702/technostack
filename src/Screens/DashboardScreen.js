import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text, Image, TouchableHighlight, Dimensions,
} from 'react-native';
import { color } from 'react-native-reanimated';

const screenHeight = Math.round(Dimensions.get("window").height);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.userData = this.props.navigation.state.params.data.data.Users;
  }

  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <Text style={{ color: "#000", margin:15, fontSize:18, fontWeight:'bold'}}>{this.userData.firstname}{' '}{this.userData.lastname}</Text>
        <View style={styles.Conatiner}>
          <View style={styles.FirstSection}>
            <Text style={{ color: '#f76951', marginHorizontal: 20, marginTop: 12 }}>CONTACT INFO</Text>
            <View style={styles.detailContainer} >
              <View style={styles.text}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>Phone Number</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.phone_number}</Text>
              </View>
              <View style={styles.icon}>
                <Image source={require('../assets/call-1.5x.png')}></Image>
              </View>
            </View>
            <View style={styles.detailContainer} >
              <View style={styles.text}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>Email Address</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.email}</Text>
              </View>
              <View style={styles.icon}>
                <Image source={require('../assets/ic_mail_1.5.png')}></Image>
              </View>
            </View>
          </View>
          <View style={styles.SecondSection}>
            <Text style={{ color: '#f76951', marginHorizontal: 20, marginTop: 12 }}>ADDRESS</Text>
            <View style={styles.detailContainer} >
              <View style={styles.textSecond}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>Street Address</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.street_address}</Text>
              </View>
            </View>
            <View style={styles.detailContainer} >
              <View style={styles.textSecond}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>Suburb</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.suburb}</Text>
              </View>
            </View>
            <View style={styles.detailContainer} >
              <View style={styles.textSecond}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>City</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.city}</Text>
              </View>
            </View>
            <View style={styles.detailContainer} >
              <View style={styles.block}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>State</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.state}</Text>
              </View>
              <View style={styles.block}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>country</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.country.country_name}</Text>
              </View>
              <View style={styles.blockRight}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, margin: 2 }}>Postcode</Text>
                <Text style={{ color: 'gray', margin: 2, fontSize: 18, marginTop: 5 }}>{this.userData.postcode}</Text>
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

  Conatiner: {
    flex: 1,
    flexDirection: "column",
  },

  FirstSection: {
    flex: 0.3,
    margin: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 10,
    elevation: 10
  },

  detailContainer: {
    flex: 0.7,
    marginHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: '#000',
    borderBottomWidth: .3,
    paddingBottom: 20
  },

  SecondSection: {
    margin: 10,
    flex: 0.7,
    borderRadius: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderColor: '#000',
    borderWidth: 0,
    elevation: 10
  },

  text: {
    flex: .8,
    margin: 10,
    borderRadius: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  textSecond: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  block: {
    flex: .3,
    margin: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRightWidth: 1
  },
  blockRight: {
    flex: .3,
    margin: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  icon: {
    flex: .2,
    marginTop: 25,
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'flex-end',
    flexDirection: "column",
  },

  First_Content_Section: {
    flex: 0.3,
    backgroundColor: "#fff",
  },

  Second_Content_Section: {
    flex: 0.7,
  },

  MiddleSection: {
    flex: .5,
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
    backgroundColor: "#F76951"
  }

});

export default Dashboard;

{/* <View style={styles.FirstSection}>
<View style={styles.First_Content_Section}>
  <Image source={require("../assets/app_logo.png")} style={{ alignSelf: "center" }} />
</View>
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
    </View>
  </View>
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
      </View>
    </View>
  </View>
</View>
</View> */}