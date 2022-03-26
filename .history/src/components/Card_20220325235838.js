import React from "react"
import {TouchableWithoutFeedback, View, Text, StyleSheet, Image, TextInput } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Chat, MessageType } from '@flyerhq/react-native-chat-ui'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Card(props) {
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' }
  const [messages, setMessages] = React.useState([
    {
      author: user,
      createdAt: Date.now(),
      text: "message.text",
      type: 'text',
    }
  ])

  const addMessage = (message) => {
    setMessages([message, ...messages])
  }

  const handleSendPress = (message) => {
    const textMessage = {
      author: user,
      createdAt: Date.now(),
      text: message.text,
      type: 'text',
    }
    addMessage(textMessage)
  }

  const [number, onChangeNumber] = React.useState(null);


    return (
        <View style={{ paddingHorizontal: 16 }}>
         
          <View style={styles.mainCardView}>
          <Image
                style={styles.tinyLogo}
                source={require('../imgs/cancel.png')}
              />
              
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>

                  <Text style={{ textAlign: "center", color: '#1C89F2', fontSize: 22}}>
                    Anna
                  </Text>
                  <Text style={{ textAlign: "center", color: '#1C89F2'}}>
                    Active
                  </Text>
                </View>

              <View style={{ ...styles.mainCardView2 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  
                  <Image
                    style={styles.tinyLogo}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                  />

                  <Text style={{ paddingLeft: 10, color: '#1C89F2', }}>
                    Bonjour xavier
                  </Text>
                </View>

                  <Text style={{ paddingTop: 5, color: '#1C89F2', }}>
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
                  </Text>
                  <Text style={{ paddingTop: 5, color: '#1C89F2', textDecorationLine: 'underline'}}>
                    Lu a 21h30
                  </Text>
              </View>

            <View style={{ ...styles.mainCardView2, alignSelf: 'flex-end',backgroundColor: '#1C89F2' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                />

                <Text style={{ paddingLeft: 10,  color: 'white',  }}>
                  Bonjour xavier
                </Text>
              </View>

                <Text style={{ paddingTop: 5,  color: 'white',  }}>
                  Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
                </Text>
                <Text style={{ paddingTop: 5, color: 'white', textDecorationLine: 'underline'}}>
                    Lu a 21h30
                  </Text>
              </View>



          <View style={{ 
            backgroundColor: "#1C89F2", 
            borderRadius: 10, 
            position: "absolute", 
            bottom: 0, 
            right: 0, 
            width: wp('92%'), 
            flexDirection: 'row',
            alignItems: 'center'
          }}>

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />

              <Image
                style={styles.tinyLogo}
                source={require('../imgs/send.png')}
              />


          </View>
          </View >


              
        </View>
    );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
    mainCardView2: {
      width: wp('50%'),
      backgroundColor: "white",
      borderRadius: 10,
      shadowColor: "#7B7B7B",
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
      paddingLeft: 16,
      paddingRight: 14,
      marginBottom: 6,
      paddingVertical: 10,
    },
    input: {
      height: 40,
      margin: 12,
      color: "#1C89F2",
      padding: 10,
      backgroundColor:  "white",
      borderRadius: 20,
      marginLeft: 50,
      width: wp('65%')
    },
    mainCardView: {
      height: hp('70%'),
      width: wp('92%'),
      backgroundColor: "white",
      borderRadius: 15,
      shadowColor: "#7B7B7B",
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      paddingTop: 10,
      top: 0,
      left: '0%'
    }
  });