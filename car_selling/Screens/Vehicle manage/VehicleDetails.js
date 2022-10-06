import { View, Text,StyleSheet, TouchableOpacity,Image,DrawerLayoutAndroid } from 'react-native'
import React,{useEffect,useState,CSSProperties}from 'react'
import { Button, NativeBaseProvider ,HStack, VStack,FlatList,IconButton} from 'native-base'
import VehicleDetailCard from '../../components/VehicleDetailCard'
import { MaterialIcons } from "@expo/vector-icons";
import ClipLoader from "react-spinners/ClipLoader";
import { GoogleSignin} from '@react-native-google-signin/google-signin';


const override = StyleSheet.create({display: "block", margin: "0 auto",borderColor: "red"});



export default function VehicleDetails({navigation}) {
    const [vehData, setVehData] = useState([]);
    const [desable, setDesable] = useState(false);
    let [color, setColor] = useState("#ffffff");
    const[thisUser,setUser] = useState([]);
     
    const signOut = async () => {
      try {
        await GoogleSignin.signOut();
        //this.setState({ user: null }); // Remember to remove the user from your app's state as well
        setUser(null);
      } catch (error) {
        console.error(error);
      }
    };

  
   useEffect(() => {
     
         GoogleSignin.configure({
                webClientId: '159591925222-fpehcia6g2dpj7kgnhf40ds5qnag5ei6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
         });
 

        async  function getCurrentUser(){
              const currentUser = await GoogleSignin.getCurrentUser();
                    const data = {
                         image:currentUser.user.photo,
                         name:currentUser.user.name,
                         email:currentUser.user.email
                    }
              setUser(data)
              //console.log(currentUser);
              //  console.log(user,"sdsds");
         };
      
     
        getCurrentUser();
       
        
    

    
      async function GetAllVehicleDetails(){
        await fetch('http://192.168.8.102:4000/vehicle/').then((response)=>{
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





 


  const navigationView = (
       <VStack   style={{
        flex: 1,
        backgroundColor: "#fff",
        width:250,
        borderColor:"red",
        borderWidth:2,
        alignItems:"center" 
      }}>

         {
        
          thisUser ? 
                <VStack style={styles.navDrawerHeadder}>
                  
                <Image source={{uri:thisUser.image}} style={styles.navProfile}/>
                <Text style={styles.mainText}>{thisUser.name}</Text>
                <Text style={styles.email} >{thisUser.email}</Text>
              
              </VStack> :
               <Text>Not Loin</Text>
         }


          
           <VStack flex={1} w="100%">
                <TouchableOpacity style={styles.logOut} onPress={signOut}>
                      <Text style={{color:"white",fontSize:15}}>Logout</Text>
                  </TouchableOpacity> 
           </VStack> 
       </VStack>
  )

  return (
    <NativeBaseProvider>

       <DrawerLayoutAndroid 
         drawerWidth={250}
         drawerPosition="left"
         renderNavigationView={() => navigationView}
       
       >
     
              {/* <NavigationDrawer
                 width={"50%"}
                 height={50}
                 color="red" 
                 image="" 
                 profile-Image="" />    */}

          <VStack >
              {
                   vehData.length ? 
                   <FlatList  data={vehData} renderItem={({item}) => 
                          <VStack space={5} style={styles.card}>
                              <VehicleDetailCard data={item} /> 
                          </VStack> 

                    }
                   />: 
                       <VStack style={{backgroundColor:"#F4F5F6"}} h="100%"  justifyContent="center"  alignItems="center">
                            <Image source={require("../../assets/Loading_icon.gif")  } style={styles.gif} />
                       </VStack>
                         
                              
                          
              }
              
          </VStack>
              
          <HStack justifyContent="flex-end"  w ="93%" style={styles.hstack} >
            
            <TouchableOpacity style={styles.button} disabled={false} onPress={() => {navigation.navigate('vhicleReg')}}>
               <Text>+</Text>
            </TouchableOpacity>
  
          </HStack>

       </DrawerLayoutAndroid>
 
    </NativeBaseProvider>
  )
}


const navigationDrawer = StyleSheet.create({
       
})


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
    },
    navProfile:{
       marginTop:40,
       marginLeft:20,
      // borderColor:"red",
      // borderWidth:2,
       width:60,
       height:60,
       borderRadius:100,
       alignSelf:"flex-start"
    },
    navDrawerHeadder:{
      //borderColor:"red",
     // borderWidth:2,
      width:"100%",
      height:"28%"
    },
    mainText:{
        fontSize:20,
        marginLeft:22,
        fontWeight:"600",
        color:"black"
    },
    email:{
        fontSize:10,
        marginLeft:23,
    },
    logOut:{
       width:"98%",
       height:50,
       backgroundColor:"red",
       alignItems:"center",
       justifyContent:"center",
       alignSelf:"center",
       marginTop:10,
      
    }

})