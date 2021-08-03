import React, { Component } from 'react'
import { View, Text ,StyleSheet,TextInput,Button} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
export default class Addinquiry extends Component{
    render() {
    return (
        <View style={styles.container}>
        <View style={styles.b1}>
        <View style={styles.buttonbox}>
      <View>
    <Text style={styles.reguserr}>Issue Type:</Text>
    <View style={styles.drpdwn}>
    <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'No Internet', value: 'No Internet' },
                { label: 'Slow Internet', value: 'Slow Internet' },
                { label: 'System Maintenance', value: 'System Maintenance' },
                { label: 'Software Installation', value: 'Software Installation' },
            ]}
        /></View>
      </View>
      <View>
    <Text style={styles.reguserr}>Location:</Text>
    <View style={styles.drpdwn}>
    <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'MCA LAB', value: 'No Internet' },
                { label: 'UG LAB A', value: 'UG LAB A' },
                { label: 'UG LAB B', value: 'UG LAB B' },
                { label: 'UG LAB C', value: 'UG LAB C' },
                { label: 'CLOUD LAB', value: 'CLOUD LAB' },
            ]}
        /></View>
      </View>
      <View style={styles.btnrw11}>
    <Text style={styles.reguserr}>Description:</Text>
    <TextInput
          placeholder="description"
          placeholderTextColor="white"
          style={styles.descbox}
        />
      </View>
      <View style={styles.v3}>
            <View
              style={styles.signup}
            >
              <Button
                title="Create Inquiry"
                color="white"
                onPress={() => this.props.navigation.navigate("USERHOME")}
              />
              
            </View>
          </View>
  
      </View>
      </View>
      </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: "10%",
    },
    v3: {
        flex: 0.7,
        width: "100%",
        marginTop: "5%",
        alignItems: "center",
      },
    background: {
      flex: 1,
      justifyContent: "flex-end",
    },
    drpdwn:{
        backgroundColor:"white",
        shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          height:"30%",
          borderRadius:10
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
    b1: {
        marginBottom: 3,
        marginLeft: "8%",
        marginRight: "8%",
        borderRadius: 10,
        shadowColor: "#000",
        height: "33%",
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
      descbox: {
        fontSize: 19,
        height: 70,
        width: "100%",
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
})  
