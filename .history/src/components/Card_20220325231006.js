import React from "react"
import {TouchableWithoutFeedback, View, Text, StyleSheet} from "react-native"
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


    return (
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.mainCardView}>

            <View style={styles.mainCardView2}>
            <Text>TEgddh</Text>
            </View>
            <View style={styles.mainCardView2}>
            </View>
            <View style={styles.mainCardView2}>
              <Text>TEgddh</Text>
            </View>

          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    mainCardView2: {
      height: hp('10%'),
      width: wp('50%'),
      backgroundColor: "white",
      borderRadius: 15,
      shadowColor: "#7B7B7B",
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
      paddingLeft: 16,
      paddingRight: 14,
      marginBottom: 6,
      float: 'left'
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
      top: 0,
      left: '0%'
    }
  });