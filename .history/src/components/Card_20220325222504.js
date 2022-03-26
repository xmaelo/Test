import React from "react"
import {TouchableWithoutFeedback, View, Text, StyleSheet} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Card(props) {
    return (
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.mainCardView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              
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