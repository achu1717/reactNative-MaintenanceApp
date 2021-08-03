const react = require("react");

import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from "../notifications/Notifications";
import Createupdates from "../createUpdates/Createupdates"
function CreateUpdates({ navigation }) {
  return (
    <Createupdates/>
  );
}

function MyInquiryScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.b11}>
        <View style={styles.buttonbox}>
        <View style={styles.btnrw11}>
    <Text style={styles.reguserr}></Text>
    <TextInput
          placeholder="Not assign"
          placeholderTextColor="white"
          style={styles.logintxtbxx1}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Issue Type:</Text>
    <TextInput
          placeholder="Internet Issue"
          placeholderTextColor="black"
          style={styles.logintxtbxx}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Location:</Text>
    <TextInput
          placeholder="MCA LAB"
          placeholderTextColor="black"
          style={styles.logintxtbxx}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Assigned To:</Text>
    <TextInput
          placeholder="Mr. Maintenance"
          placeholderTextColor="black"
          style={styles.logintxtbxx}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
      <View style={styles.signup1}>
            <Button
              title="view"
              color="white"
              onPress={() => this.props.navigation.navigate("LOGIN")}
            />
          </View>
      </View>
      </View>
        </View>
        <View style={styles.b11}>
        <View style={styles.buttonbox}>
        <View style={styles.btnrw11}>
    <Text style={styles.reguserr}></Text>
    <TextInput
          placeholder="Not assign"
          placeholderTextColor="white"
          style={styles.logintxtbxx2}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Issue Type:</Text>
    <TextInput
          placeholder="Internet Issue"
          placeholderTextColor="black"
          style={styles.logintxtbxx}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Location:</Text>
    <TextInput
          placeholder="MCA LAB"
          placeholderTextColor="black"
          style={styles.logintxtbxx}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Assigned To:</Text>
    <TextInput
          placeholder="Mr. Maintenance"
          placeholderTextColor="black"
          style={styles.logintxtbxx}
          editable={false}
        />
      </View>
      <View style={styles.btnrw11}>
      <View style={styles.signup1}>
            <Button
              title="view"
              color="white"
              onPress={() => this.props.navigation.navigate("LOGIN")}
            />
          </View>
      </View>
      </View>
        </View></View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Notifications/>
    </View>
  );
}

function Logoutt({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Notificationss/>
    </View>
  );
}
const Drawer = createDrawerNavigator();
export default function AddUpdates() {
  
 
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Daily Updates" component={CreateUpdates} />
        <Drawer.Screen name="Inquiries" component={MyInquiryScreen} />
        <Drawer.Screen name="Notification" component={NotificationsScreen} />

        <Drawer.Screen name="Logout" component={Logoutt} />
      </Drawer.Navigator>
    </NavigationContainer>
      
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  signup: {
    width: "40%",
    marginLeft: 0,
    alignContent: "center",
    backgroundColor:"#1E538F",
    height:50,
    justifyContent:"center",
    borderRadius:10,
  },
  signup1: {
    width: "30%",
    marginLeft: 0,
    alignContent: "center",
    backgroundColor:"#1E538F",
    height:33,
    justifyContent:"center",
    borderRadius:10,
  },
  v2: {
    flex: 0.7,
    alignContent: "center",
    paddingTop: "0%",
  },
  v3: {
    flex: 0.6,
    width: "100%",
    marginTop: "5%",
    alignItems: "center",
    alignContent: "flex-end",
  },
  nruy: {
    fontSize: 20,
    fontFamily: "Arial",
    color: "white",
  },
  reguser: {
    fontSize: 18,
    marginBottom: 3,
    color: "black",
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: "8%",
    marginRight: "8%",
  },
  reguser1: {
    fontSize: 16,
    marginBottom: 3,
    color: "#1E538F",
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: "8%",
    marginRight: "8%",
  },
  reguser2: {
    fontSize: 18,
    marginBottom: 3,
    color: "black",
    marginTop: 10,
    marginLeft: "30%",
    marginRight: "30%",
    marginTop:"10%"
  },
  b1: {
    backgroundColor: "#F7F7FA",
    marginBottom: 3,
    marginLeft: "8%",
    marginRight: "8%",
    borderRadius: 10,
    shadowColor: "#000",
    height: "30%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  btnrw1: {
    paddingTop: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "space-around",
  },
  b11: {
    backgroundColor: "#F7F7FA",
    marginBottom: 10,
    marginLeft: "8%",
    marginRight: "8%",
    borderRadius: 10,
    shadowColor: "#000",
    height: "33%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  catgrybutton: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:"#FD820B",
    borderRadius:10
},
btnrw11:{
    flexDirection:"row",
    justifyContent:"space-between",
    justifyContent:"space-around"
  },
  reguserr: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginLeft: "3%",
    marginRight: "3%",
  },
  logintxtbxx: {
    fontSize: 19,
    height: 30,
    width: "50%",
    borderColor: "gray",
    marginBottom: 30,
    borderRadius:10,
    paddingLeft:10,
    backgroundColor:"white",
    shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
  },
  logintxtbxx1: {
    fontSize: 15,
    height: 25,
    width: "40%",
    borderColor: "gray",
    marginBottom: 30,
    borderRadius:10,
    paddingLeft:35,
    marginTop:2,
    marginLeft:20,
    marginBottom:10,
    backgroundColor:"red",
  },
  logintxtbxx2: {
    fontSize: 15,
    height: 25,
    width: "40%",
    borderColor: "gray",
    marginBottom: 30,
    borderRadius:10,
    paddingLeft:35,
    marginTop:2,
    marginLeft:20,
    marginBottom:10,
    backgroundColor:"#80E220",
  },
});
