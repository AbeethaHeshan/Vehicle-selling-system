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
 
  return (
   
    <NativeBaseProvider>
         
              <ScrollView>
                     <VStack flex={1} space={2} alignItems="center" h={700} style={styles.border} >
                      
                           <VStack flex={1}>
                              <TouchableOpacity  style={styles.tochableOp} onPress={() => {refRBSheet.current.open()}} > 
                                      <Image source={icon} style={styles.image} />
                              </TouchableOpacity> 
                          </VStack> 
                          <VStack space={2}  alignItems="center" justifyContent="center" alignSelf="center" style={styles.border} w="80%">
                              <Input variant="outline" placeholder="Name" />
                              <Input variant="outline" placeholder="Vehicle Name" />
                              <Input variant="outline" placeholder="Address" />
                              <Input variant="outline" placeholder="Country" />
                              <Input variant="outline" placeholder="Date" />
                              <Input variant="outline" placeholder="Tel" />
                              <Input variant="outline" placeholder="Price" />
                              <Button>Save</Button>
                          </VStack>

                    </VStack>   
                </ScrollView>
                {/* <RBSheet
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
  */}
  </NativeBaseProvider>
      
   
  )
}



const styles = StyleSheet.create({
  image:{
      width:"100%",
      height:"100%",
      borderColor:"green",
      borderWidth:2,
      borderRadius:10,
      alignSelf: 'center',
  },
  tochableOp:{
  
    borderColor:"red",
    borderWidth:2, 
    width:200,
    height:"40%",
    alignSelf:"center",
    marginVertical:20
  },
  imageContainer:{

    borderColor:"yellow",
    borderWidth:2,
    alignSelf:"center",
    width:"90%",
    height:"30%"
},
camSize:{
   width:"50%",
   height:100,
   borderColor:"red",
   borderWidth:2,
   
},
border:{
     
  borderColor:"green",
  borderWidth:2,
},
})