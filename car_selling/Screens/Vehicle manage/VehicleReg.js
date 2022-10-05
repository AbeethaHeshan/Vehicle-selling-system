import { View,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import React,{ useRef,useState } from 'react';
import { NativeBaseProvider, VStack ,Input, HStack, Button, Stack,KeyboardAvoidingView } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheetComponent from '../../components/BottomSheetComponent';

export default function VehicleReg() {
    
    const [active, setActive] = useState(false)
    const[image, setimage] = useState('')
    const icon = active ? {uri:`data:image/jpeg;base64,${image}`,} : require("../../assets/null.png");
     
    const [ownerName, setOwnerName] = useState("");
    const [vehicleBrand, setVehicleBrand] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    const [tel, setTel] = useState("");
    const [price, setPrice] = useState("");
    
    const VehData = {
         image:image,
         ownerName:ownerName,
         vehicleBrand:vehicleBrand,
         address:address,
         country:country,
         date:date,
         tel:tel,
         price:price
    }
    
    const imagefromLib = () => {
        ImagePicker.openPicker({
            includeBase64:true, 
        
            cropping:false
          }).then(image => {
            console.log(image.data);
            setimage(image.data);
            setActive(true);
          });
    }


    const imageFromCam = async () => {

        
        ImagePicker.openCamera({
            includeBase64:true,  
            cropping:false,
          }).then(image => {
            console.log('====================================');
            console.log(image.data);
            console.log('====================================');
            
            setimage(image.data);
            setActive(true);
          });




    }
    const refRBSheet = useRef();
     


   // save data to the db
     const saveData = async () => {
      console.log("sdsdsd");
             
        await fetch('http://192.168.8.100:4000/vehicle/', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(VehData),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            clearTextBoxes();
          })
          .catch((error) => {
            console.error('Error:', error);
          });



           
     
     }

     function clearTextBoxes(){
           setActive(false);
           setAddress("");
           setCountry("");
           setDate("");
           setOwnerName("");
           setPrice("");
           setTel("");
           setVehicleBrand("");
           setimage("");
     }
  return (
   
    <NativeBaseProvider>
         
              <ScrollView style={styles.mainContainer}>
                          <VStack  space={5} alignItems="center"  style={styles.mainContainer} >
                      
                           <VStack flex={1} style={styles.imageMainContainer}>
                              <TouchableOpacity  style={styles.tochableOp} onPress={() => {refRBSheet.current.open()}} > 
                                      <Image source={icon} style={styles.image} />
                              </TouchableOpacity> 
                           </VStack> 
                          <VStack  space={3}  alignItems="center" justifyContent="center" alignSelf="center"  w="80%" >
                              <Input variant="outline" placeholder="Name" value={ownerName} onChangeText={(e=>{setOwnerName(e)})}/>
                              <Input variant="outline" placeholder="Vehicle Name"  value={vehicleBrand} onChangeText={(e=>{setVehicleBrand(e)})} />
                              <Input variant="outline" placeholder="Address" value={address} onChangeText={(e=>{setAddress(e)})}/>
                              <Input variant="outline" placeholder="Country" value={country} onChangeText={(e=>{setCountry(e)})}/>
                              <Input variant="outline" placeholder="Date" value={date} onChangeText={(e=>{setDate(e)})}/>
                              <Input variant="outline" placeholder="Tel" value={tel} onChangeText={(e=>{setTel(e)})}/>
                              <Input variant="outline" placeholder="Price" value={price} onChangeText={(e=>{setPrice(e)})}/>
                              <Button onPress={saveData}>Save</Button>
                          </VStack>

                    </VStack>   
                </ScrollView>

                 <RBSheet
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  closeOnPressMask={true}
                  height={150}
                  openDuration={500}
                  closeDuration={500}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent"
                    },
                    draggableIcon: {
                      backgroundColor: "#000"
                    },
                    container:{
                      borderTopLeftRadius:20,
                      borderTopRightRadius:20,
                      width:"98%",
                }
              }}
              >
                    <BottomSheetComponent onCam={imageFromCam} onGallery={imagefromLib} /> 
             </RBSheet>    
  
  </NativeBaseProvider>
      
   
  )
}



const styles = StyleSheet.create({
  image:{
      width:"100%",
      height:"100%",
      // borderColor:"green",
      // borderWidth:2,
      borderRadius:10,
      alignSelf: 'center',
  },
  tochableOp:{
  
    // borderColor:"red",
    // borderWidth:2, 
    width:"100%",
    height:"100%",
    alignSelf:"center",
  },
  imageContainer:{

    // borderColor:"yellow",
    // borderWidth:2,
    alignSelf:"center",
    width:"90%",
    height:"30%"
},
camSize:{
   width:"50%",
   height:120,
   borderColor:"red",
  //  borderWidth:2,
   
},
border:{
     
  // borderColor:"green",
  borderWidth:2,
},
imageMainContainer:{
  margin:10,
  // borderColor:"green",
  // borderWidth:2,
  height:150,
  width:"60%"
},
mainContainer:{
  // borderColor:"blue",
  // borderWidth:2,
  height:"100%"
}

})