import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SubHeader = () => {
  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
    style={styles.container}>
        <Feather name="map-pin" size={20} color="#2c4341" />
      <Text  style={styles.text}>Deliver to Aakash -Ambala 134003</Text>
      <MaterialIcons name='keyboard-arrow-down' size={26} color="#2c4341"/>
    </LinearGradient>
  )
}

export default SubHeader

const styles = StyleSheet.create({
    container:{
        padding:13,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:15,
        color:'#2c4341',
        padding:5
    }
})