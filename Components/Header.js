import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

Feather;
const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput placeholder="Search Amazon.in" style={styles.textInput}/>
          </View>
          <AntDesign name="scan1" size={22} color="#909594" />
        </View>
        <Feather name="mic" size={22} color="#000000" />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  inputBox:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#a1bcc0',
    borderRadius:8,
    backgroundColor:'#ffffff',
    width:'90%',
    justifyContent:'space-between',
    paddingHorizontal:10,
    elevation:5,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  textInput:{
    padding:8
  }
});

export default Header;
