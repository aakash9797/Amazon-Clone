import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Catagories } from '../Data/Catagories';
const Category = () => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      >
        {Catagories.map(item =>(

      <View key={item.id}  style={styles.category}>
        <Image source={item.image} style={styles.imgStyle} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
        ))}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        padding:10,
    },
    imgStyle:{
        height:70,
        width:70,
    },
    category:{
        paddingHorizontal:8,
        alignItems:'center'
    },
    title:{
        fontSize:16,
        color:'#2c4341'
    }
});
