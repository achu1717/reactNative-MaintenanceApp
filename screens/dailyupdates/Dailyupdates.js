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

export default class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.b11}>
          <View style={styles.buttonbox}>
              <Text style={styles.reguser}>We have the Issue with Airtal server. so, Today you would face  internet for the whole day.</Text>
          </View>
        </View>
        <View style={styles.b11}>
          <View style={styles.buttonbox}>
              <Text style={styles.reguser}>We have the Issue with Airtal server. so, Today you would face  internet for the whole day.</Text>
          </View>
        </View>
        <View style={styles.b11}>
          <View style={styles.buttonbox}>
              <Text style={styles.reguser}>We have the Issue with Airtal server. so, Today you would face  internet for the whole day.</Text>
          </View>
        </View>
        <View style={styles.b11}>
          <View style={styles.buttonbox}>
              <Text style={styles.reguser}>We have the Issue with Airtal server. so, Today you would face  internet for the whole day.</Text>
          </View>
        </View>
      </View>
    );
  }
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
    backgroundColor: "#1E538F",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  signup1: {
    width: "30%",
    marginLeft: 0,
    alignContent: "center",
    backgroundColor: "#1E538F",
    height: 33,
    justifyContent: "center",
    borderRadius: 10,
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
    marginTop: "10%",
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
    height: "18%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  catgrybutton: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    height: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FD820B",
    borderRadius: 10,
  },
  btnrw11: {
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "space-around",
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
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  logintxtbxx1: {
    fontSize: 15,
    height: 25,
    width: "40%",
    borderColor: "gray",
    marginBottom: 30,
    borderRadius: 10,
    paddingLeft: 35,
    marginTop: 2,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "red",
  },
  logintxtbxx2: {
    fontSize: 15,
    height: 25,
    width: "40%",
    borderColor: "gray",
    marginBottom: 30,
    borderRadius: 10,
    paddingLeft: 35,
    marginTop: 2,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "#80E220",
  },
});
