import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { NativeBaseProvider,VStack,Button  } from 'native-base'

export default function BottomSheetComponent(props) {
    console.log();
  return (
 
             <VStack flex={1} space={2} w="100%" justifyContent="center"  alignItems="center">
                   <TouchableOpacity
                      style={styles.button}
                      onPress={props.onCam}
                   > 
                     <Text style={styles.text}>Camera</Text>
                   </TouchableOpacity>
                    
                   <TouchableOpacity
                      style={styles.button}
                      onPress={props.onGallery}
                    > 
                     <Text style={styles.text}>Select on gallery</Text>
                   </TouchableOpacity>
             </VStack>
       
  )
}

const styles = StyleSheet.create({
        button:{
            alignItems:"center",
            justifyContent:"center",
            width:"80%",
            height:"35%",
            borderRadius:5,
            backgroundColor:"green",
        },
        text:{
            fontSize:16,
            fontWeight:"250",
            color:"white"
        }
});