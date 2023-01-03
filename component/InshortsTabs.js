import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import {SceneMap, TabView  } from "react-native-tab-view";
import DiscoveryScreen from '../Screens/DiscoveryScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';



const InshortsTabs = () => {

    const layout = useWindowDimensions();
    
    const [index, setIndex] = useState(1);
    
    const [routes] =  useState([
        {key:'first',title:'Discovery'},
        {key:'second',title:'News'},
    ])
    const renderScene = SceneMap({
        first: DiscoveryScreen,
        second: NewsScreen,
      });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
        renderTabBar={()=><TopNavigation index={index} setIndex={setIndex}/>}
    />
  )
}

export default InshortsTabs