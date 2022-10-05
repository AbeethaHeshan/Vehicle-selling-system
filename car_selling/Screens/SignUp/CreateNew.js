import {StyleSheet} from 'react-native'
import React  from 'react'
import {Input, NativeBaseProvider, VStack , KeyboardAvoidingView , ScrollView, HStack, Button,Text} from 'native-base'
import useAutoFocusInputs from 'use-auto-focus-inputs';



export default function CreateNew() {
    
    const getAutoFocusableInputProps = useAutoFocusInputs();

  return (
    <NativeBaseProvider>
       
        <ScrollView >
            <VStack flex={1} space={5} alignItems="center" justifyContent="center">
               <VStack>

                  <Text bold  fontSize="2xl"  style={styles.mainText}> New Account </Text>
                  <Text> Create A new Account</Text>

               </VStack>
             
              <VStack space={5} style={styles.width} alignItems="center">
                 
                       <Input  size="sm"
                                {...getAutoFocusableInputProps({
                                    placeholder: 'first name',
                                
                                    })}
                                />

                                <Input
                                {...getAutoFocusableInputProps({
                                    placeholder: 'Last name',
                                
                                    })}
                                />

                                
                                <Input
                                {...getAutoFocusableInputProps({
                                    placeholder: 'Address',
                                
                                    })}
                                />

                                
                                    <Input
                                {...getAutoFocusableInputProps({
                                    placeholder: 'Tel',
                                
                                    })}
                                />

                                    <Input
                                {...getAutoFocusableInputProps({
                                    placeholder: 'Email',
                                
                                    })}
                                />

                                    <Input
                                {...getAutoFocusableInputProps({
                                    placeholder: 'Username',
                                
                                    })}
                                />

                                
                                <Input
                                {...getAutoFocusableInputProps({
                                    placeholder: 'Password',
                                
                                    })}
                                />

                            <HStack flex={1} space={3}  alignItems="flex-end" justifyContent="flex-end" style={styles.border} w="100%">
                                <Button>clear</Button>
                                <Button>Register</Button>
                            </HStack> 

                </VStack>   

             

            </VStack>
         
        </ScrollView>  
        
       
       
         
    </NativeBaseProvider>
  )
}


 
const styles =  StyleSheet.create({
        width:{
            width:"80%"
        },
        mainText:{
            marginTop:25
            
        },
         border:{
             borderWidth:2,
             borderColor:"red"
         }




})