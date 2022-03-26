import React from "react"
import {TouchableWithoutFeedback, View, Text, StyleSheet} from "react-native"

export default function Card(props) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          //this.redirectToChatConverstion(item);
        }}>
        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.subCardView}>
              
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                {'itechinsiders'}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: "#6D757A",
                    fontSize: 12,
                  }}>
                  {'itechinsiders'}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: "#F7B0BB",
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text>
              {0}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    mainCardView: {
      height: 300,
      width: "92%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
      borderRadius: 15,
      // shadowColor: Colors.shadow,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
      position: "absolute",
      bottom: 0,
      left: 0
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