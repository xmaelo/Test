/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import FadeInOut from 'react-native-fade-in-out';
import Card from "./src/components/Card"

const App = () => {

  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    console.log('click')
    setVisible(!visible);
  }

  return (
    <View style={{ flex: 1 }}>
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        <Marker coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}>
          <View>
            <FadeInOut visible={visible} scale={true}> 
              <Card/>
            </FadeInOut>
          </View>
        </Marker>
      </MapView>
      <View
        style={{
            position: 'absolute',
            top: '20%',
            left: '40%'
        }}
      >
        <Button onPress={toggleVisible} title="Start Fade" />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1
  },
});

export default App;
