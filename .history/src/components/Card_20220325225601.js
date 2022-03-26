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
            <SafeAreaProvider>
              <Chat
                messages={messages}
                onSendPress={handleSendPress}
                user={user}
              />
            </SafeAreaProvider>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    mainCardView: {
      height: hp('70%'),
      width: wp('92%'),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
      borderRadius: 15,
      shadowColor: "#7B7B7B",
      // shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      // position: "absolute",
      top: 0,
      left: '0%'
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      // backgroundColor: Colors.history_back,
      // borderColor: Colors.color_eeeeee,
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });