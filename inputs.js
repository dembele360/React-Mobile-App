import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';




class Inputs extends Component {
    state = {
        FName: '',
        SName: '',
        city: '',
        Address: '',
        PhoneNumber: '',
        Email: '',
        Password : ''
    }
   
    handleFName = (text) => {
    this.setState({ email: text })

}
handleSName = (text) => {
    this.setState({ sname: text })

}
handleCity = (text) => {
    this.setState({ city: text })

}
handleAddress = (text) => {
    this.setState({  address: text })

}
handlePhoneNumber = (text) => {
    this.setState({ phonenumber: text })

}
     handleEmail = (text) => {
     this.setState({ email: text })
}

handlePassword = (text) => {
    this.setState({ Password : text })
}

     login = (email, pass) => {
     alert('email: ' + email + ' password: ' + pass)
     }

    render(){
     return (
       <View style = {styles.container}>

           <Text style = {styles.heading}>USER REGISTRATION</Text>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "First Name"
              placeholderTextColor = "black"
              autoCapitalize = "none"
              onChangeText = {this.handleFName}/>


               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Second Name"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleSName}/>

            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Enter City"
              placeholderTextColor = "black"
              autoCapitalize = "none"
              onChangeText = {this.handleCity}/>

              <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Address"
              placeholderTextColor = "black"
              autoCapitalize = "none"
              onChangeText = {this.handleAddress}/>
           
           
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "PhoneNumber"
              placeholderTextColor = "black"
              autoCapitalize = "none"
              onChangeText = {this.PhoneNumber}/>


            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Email"
              placeholderTextColor = "black"
              autoCapitalize = "none"
              onChangeText = {this.handleEmail}/>


             <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Password"
              placeholderTextColor = "black"
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}/>


                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.login(this.state.email, this.state.password)
                  }>
                <Text style = {styles.submitButtonText}> Register </Text>
                </TouchableOpacity>
        </View>
    )
  }
}
export default Inputs


const styles = StyleSheet.create({
    container: {
    paddingTop: 50
    },
    input: {
    margin: 15,
    height: 30,
    borderColor: 'orange',
    borderWidth: 1,
    },
    heading: {
        
        borderColor: 'orange',
        textAlign: 'center',
        color: 'red'
        
        },
    submitButton: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 15,
    height: 40,
    textAlign: 'center'
    },
    submitButtonText:{
    color: 'black'
    }
   })