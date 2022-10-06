import {StyleSheet, View, Alert,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen'
import { Input,VStack,HStack, Text, Center, NativeBaseProvider,Image } from "native-base";

export default function Login({ navigation }) {
   
      const[user,setUserInfo] = useState();
    


      const signIn = async () => {
        try {
          //await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo);
          setUserInfo(userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };


   


      const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if(isSignedIn){
          navigation.navigate('vhicleDetails');
        }
      };




    useEffect(()=>{
      
       SplashScreen.hide();
       

       GoogleSignin.configure({
            webClientId: '159591925222-fpehcia6g2dpj7kgnhf40ds5qnag5ei6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
       });
       
       isSignedIn();

    },[])

    const vehicleDetails = () => {
           navigation.navigate('vhicleDetails');
    }
  return (
    <NativeBaseProvider>
      <VStack space={4} flex={1} alignItems="center" justifyContent="center" style={[styles.border ] } >
              
              <VStack alignItems="center">
                   <Image size={100} borderRadius={100} source={{
                   uri: "https://wallpaperaccess.com/full/317501.jpg"
                   }} alt="Alternate Text" />
                   <Text bold  fontSize="2xl" >Welcome Back</Text>
              </VStack>
              
              <Input type="text" size="xs" placeholder="Username" w="80%" />
              <Input type="password" size="xs" placeholder="Password" w="80%" />
              <TouchableOpacity
                 style={styles.button}
                 onPress={vehicleDetails}
              >
                 <Text>Login</Text>
                </TouchableOpacity>

                <HStack space={1}>
                   <Text >Dont have account ? </Text>
                   <Text onPress={() => {navigation.navigate('createNew')}}>
                       Create a New Accout
                   </Text>
                </HStack>

                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                /> 
                
      </VStack>  
              
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  color: {
    color: 'red',
  },
  border:{
    borderWidth: 2,
    borderColor: "green",

  },
  border2:{
    borderWidth: 2,
    borderColor: "red",
  
  },
  input1:{
     width:"80%",
     margin: 12,
     borderWidth: 1,
     padding: 10,
  },
  input2:{
    width:"80%"
 },
  container:{
     alignItems:"center",
     justifyContent:"center"
  },
  button: {
    backgroundColor: "#2ecc71",
    alignItems: "center",
    padding: 10,
    width:"20%",
    borderRadius:5
  }

});