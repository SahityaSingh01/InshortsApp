import React from 'react';
import { Text, View,StyleSheet,StatusBar, ImageBackground} from 'react-native';
import InshortsTabs from './component/InshortsTabs';

const YourApp = () => {
  return (
    <View style= {{...styles.Container,backgroundColor:'#282c35'}}>
     <InshortsTabs/>
        

        


    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    marginTop:StatusBar.currentHeight,
    
  },

  
})
export default YourApp;