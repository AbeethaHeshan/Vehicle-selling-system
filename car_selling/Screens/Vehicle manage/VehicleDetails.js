import { View, Text,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React,{useEffect,useState,CSSProperties}from 'react'
import { Button, NativeBaseProvider ,HStack, VStack,FlatList,IconButton} from 'native-base'
import VehicleDetailCard from '../../components/VehicleDetailCard'
import { MaterialIcons } from "@expo/vector-icons";
import ClipLoader from "react-spinners/ClipLoader";



const override = StyleSheet.create({display: "block", margin: "0 auto",borderColor: "red"});



export default function VehicleDetails({navigation}) {
    const [vehData, setVehData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  
   useEffect(() => {
    console.log("SDSD");
      async function GetAllVehicleDetails(){
        await fetch('http://192.168.8.100:4000/vehicle/').then((response)=>{
          console.log("LOad 1");
          return response.json();
        }).then((data)=>{
          console.log("LOad 2");
         setVehData(data)
         console.log(vehData.length);
        }).catch((err)=>{
          console.log(err);
        })
      }
     
      GetAllVehicleDetails();
   
  },[])

  return (
    <NativeBaseProvider>
       <VStack flex={1} >
          
           <HStack>
              
          </HStack>

          <VStack >
              {
                   vehData.length ? 
                   <FlatList  data={vehData} renderItem={({item}) => 
                          <VStack space={5} style={styles.card}>
                              <VehicleDetailCard data={item} /> 
                          </VStack> 

                    }
                   /> : 
                       <VStack style={{backgroundColor:"#F4F5F6"}} h="100%"  justifyContent="center"  alignItems="center">
                            <Image source={require("../../assets/Loading_icon.gif")  } style={styles.gif} />
                       </VStack>
                         
                          
                          
              }
              
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
    
    },
    gif:{
       borderColor:"red",
       borderWidth:2,
       width:280,
       height:280
    }

})