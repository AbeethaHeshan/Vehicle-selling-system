import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useEffect,useState}from 'react'
import { Button, NativeBaseProvider ,HStack, VStack,FlatList,IconButton} from 'native-base'
import VehicleDetailCard from '../../components/VehicleDetailCard'
import { MaterialIcons } from "@expo/vector-icons";


export default function VehicleDetails({navigation}) {
    const [vehData, setVehData] = useState([]);
 
  
   useEffect(() => {
      
      async function GetAllVehicleDetails(){
        await fetch('http://192.168.8.100:4000/vehicle/').then((response)=>{
          return response.json();
        }).then((data)=>{
         setVehData(data)
        }).catch((err)=>{
          console.log(err);
         })
     }
     
     GetAllVehicleDetails();
     
   })

  return (
    <NativeBaseProvider>
       <VStack flex={1} >
          
           <HStack>
              
          </HStack>

          <VStack >
              <FlatList  data={vehData} renderItem={({item}) => 

                          
                  <VStack space={5} style={styles.card}>

                       <VehicleDetailCard data={item} />

                   </VStack> 

                
               }
              />    
          </VStack>

          <HStack justifyContent="flex-end"  w ="93%" style={styles.hstack} >

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('vhicleReg')}}>
               <Text>+</Text>
            </TouchableOpacity>
  
          </HStack>

       </VStack>
 
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
     hstack:{
         position:"absolute",
         bottom:10,
         margin:10,
     },
     button:{
         position:"absolute",
         bottom:0,
         width:50,
         height:50,
         alignItems: "center",
         justifyContent:"center",
         backgroundColor: "green",
         borderRadius:50
        
     },
     border:{
        borderColor:"red",
        borderWidth:2
    },
    card:{
      marginVertical: 7,
      marginHorizontal:4,
      borderRadius:8,
      backgroundColor:"#ced4da",
      // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px,
    
    }

})