import { View, Image,StyleSheet} from 'react-native'
import { HStack, NativeBaseProvider, VStack ,Text} from 'native-base';
import React from 'react'

export default function VehicleDetailCard(props) {
   
    let base64Icon = props.data.image;
   
  return (
    <NativeBaseProvider style={styles.st}>
            

                <HStack space={1}  h="120" w="100%" alignItems="center" >
                        <Image source={{uri:`data:image/jpeg;base64,${base64Icon}`,}} style={{height: 100,width:125}} />
                        <VStack h="120" w="62%" space={5} alignItems="center">
                            <VStack alignItems="center">
                                <Text bold fontSize="md"  style={{top:8}}>{props.data.brand}</Text>
                            </VStack>
                            
                            <VStack  w="100%"  h="62" >
                                   <Text style={styles.owner} fontSize="xs">{props.data.currentOwner}</Text>
                                   <Text style={styles.address} fontSize="xs">{props.data.address}</Text>
                                   <Text style={styles.country} fontSize="xs">{props.data.country}</Text>
                                   <Text bold style={styles.date} fontSize="xs">{props.data.date}</Text>
                                   <Text style={styles.tel} fontSize="xs" >{props.data.tel}</Text>
                                   <Text bold style={styles.price} fontSize="xs">{props.data.price} </Text>
                                     
                            </VStack>   
                          
                             
                            
                        </VStack>
                 </HStack>

           
              
             
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
        border2:{
            borderColor:"red",
            borderWidth:2,
            borderRadius:5,
            backgroundColor:"white"
            
        },
        border:{
            borderColor:"red",
            borderWidth:2,
            // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px,
            shadowColor: "black",
            shadowOpacity:10,
            shadowOffset:20
        },
        st:{
            marginBottom:10
        },
        address:{
              position:"absolute",
              alignItems:"center",
              top:0,
              left:10
        },
        country:{
            position:"absolute",
            left:10,
            top:11
        },
        date:{
            position:"absolute",
            bottom:-5,
            left:10      
        },
        price:{
            position:"absolute",
            bottom:-5,
            right:2,  
        },
        tel:{
            position:"absolute",
            bottom:20,
            right:0,
            left:10,
            
        },
        owner:{
              position:"absolute",
              alignItems:"center",
              top:-13,
              left:10
        }
});