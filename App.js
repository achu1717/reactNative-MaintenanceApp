import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login/Login";
import Signup from "./screens/signUp/Signup";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "./screens/dashboard/Dashboard";
import Addata from "./screens/addData/AddData"
import Userhome1 from "./screens/home/Userhome1";
import Verifycode from "./screens/verifycode/verifycode"
import Addinquiry from "./screens/addinquiry/Addinquiry"
import Icon from "react-native-vector-icons/Ionicons";
import nehome from "./screens/home/nehome";
import AddUpdates from "./screens/addailyupdates/Addupdates";
export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const AppNavigator = createStackNavigator({
  REGISTER:{
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  LOGIN: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      
    }
  },

  PROFILE: {
    screen: Dashboard,
    navigationOptions: {
      title: "PROFILE",
      headerTintColor: '#fff',
      headerLeft: null,
          
          headerStyle: {
            backgroundColor: '#2C78E4',
          },
    },
  },
  VERIFYCODE: {
    screen : Verifycode,
    navigationOptions: {
        headerShown: false,
    },
  },
  USERHOME:{
    screen: Userhome1,
    navigationOptions: {
      title: "Department",
      headerTintColor: 'white',
      gesturesEnabled: false,
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={30}
          backgroundColor="#FF9900"
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button
          name="notifications-outline"
          size={30}
          backgroundColor="#FF9900"
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
          headerStyle: {
            backgroundColor: '#FF9900',
          },
    },
  },
  ADDINQUIRY:{
    screen: Addinquiry,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={30}
          backgroundColor="#FF9900"
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
      headerStyle: {
        backgroundColor: '#FF9900',
      },
    },
  },
  ADDUPDATES:{
    screen: AddUpdates,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={30}
          backgroundColor="#FF9900"
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
      headerStyle: {
        backgroundColor: '#FF9900',
      },
    },
  },
  NEHOME:{
    screen: nehome,
    navigationOptions: {
      title: "Network Department",
      headerTintColor: '#fff',
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={30}
          backgroundColor="#FF9900"
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
      headerStyle: {
        backgroundColor: '#FF9900',
      },
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);




const styles = StyleSheet.create({});
