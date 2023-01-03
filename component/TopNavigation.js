import { View, Text,StyleSheet, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const TopNavigation = ({index,setIndex}) => {
  return (
    <View style={{...styles.container,backgroundColor:'#282c35' }}>
     {index === 0 ? (
      <TouchableOpacity style={styles.left}>
        <Text style={{...styles.text,color:'lightgrey'}}>
        <Image style={{width: 24, height: 24}} source={require('../android/app/src/main/assets/theme_light_dark_icon.png')} />
        </Text>
        

      </TouchableOpacity>
     ) : (
      <TouchableOpacity style={styles.left}
      onPress={()=>setIndex(index===0 ? 1 : 0)}>
      <Image style={{width: 16, height: 16}} source={require('../android/app/src/main/assets/arrowLeft.png')} />
      <Text style={{...styles.text,color:'lightgrey'}}>Discover</Text>
      
    </TouchableOpacity>
     )}

     <Text style={{...styles.center,color:'white'}}>
      { index? "All News": "Discover"}
     </Text>
     
     {index ? (
      <TouchableOpacity
        style={styles.right}
        //onPress = {()=>fetchNews('general')} 
      >
        <Text style={styles.text}>
          <Image style={{width: 16, height: 16}} source={require('../android/app/src/main/assets/rel.png')}/>
        </Text>
      </TouchableOpacity>) : (
        <TouchableOpacity style={styles.left}
        onPress={()=>setIndex(index===0 ? 1 : 0)}>
        <Text style={{...styles.text,color:'lightgrey'}}>All News</Text>
        <Image style={{width: 16, height: 16}} source={require('../android/app/src/main/assets/arrowR.png')} />

        
      </TouchableOpacity>

       


      

     )}

     
     
    </View>
  )
}
const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    borderBottomColor:'black',
    borderBottomWidth:0.5,

  },
  left:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:80,
  },
  text:{
    fontSize:16,
  },
  right:{
    alignItems:'flex-end',
    width:80,
  },
  center:{
    borderBottomWidth:5,
    paddingBottom:6,
    borderBottomColor:'#007FFF',
    borderRadius:10,
    fontSize:16,
    fontWeight:'700'


  }
  
})
export default TopNavigation