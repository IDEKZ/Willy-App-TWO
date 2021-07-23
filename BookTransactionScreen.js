import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import *as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state={
      hasCameraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState:'normal'
    }
  }
  getCameraPermissions=async()=>{
 const{status}=await Permissions.askAsync (Permissions.CAMERA);
 this.setState({hasCameraPermissions:status==='granted'})
  }
    render() {
      const hasCameraPermissions=this.state.hasCameraPermissions;
      const scaneed=this.state.scanned;
      const buttonState=this.state.buttonState;
      if (buttonState==='clicked' && hasCameraPermissions){
        return(
          <BarCodeScanner onBarCodeScanned={scanned ? undefined:this.handleBarCodeScanned
          }style={StyleSheet.absoluteFillObject}/>
        )
      }
      else if (buttonState==='normal'){


      return (
        <View style={styles.container}>
         <Text style={styles.displayText}>{hasCameraPermissions===true ? this.state.scannedData:'request Camera Permission'}</Text>
         <TouchableOpacity onPress={this.getCameraPermissions} style={styles.scanButton}>
         <Text styles={styles.buttonText}>Scan Qr code</Text></TouchableOpacity>
        </View>
      );
    }
  }
}
  const styles = StyleSheet.create({
  scanButton: {
    backgroundColor: "#acf3f6",
    margin:100,
    padding:'center',
  },
  buttonText:{
fontSize:16,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  displayText:{
    fontSize:16,
    textDecorationLine:'underline',
  },
});