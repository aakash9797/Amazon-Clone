import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Deal from '../Images/Deal.jpeg'
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Recomended Deals for You</Text>
      <Image source={Deal} style={styles.image} />
      <View style={styles.bottomSection} >
        <View style={styles.row}>
            <TouchableOpacity style={styles.ofDealBtn}>
                <Text style={styles.ofDeal}>-8% off</Text>
            </TouchableOpacity>
            <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.discountPrice}>₹1,19,900</Text>
        <Text style={styles.mrp}>M.R.P</Text>
        <Text style={styles.actualPrice}>₹1,29,900</Text>

        </View>
        
      </View>
    </View>

  )
}

export default Deals

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        // paddingHorizontal:10,
      },
      title:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10
      },
      image:{
        height:350,
        width:'100%',
        marginVertical:10
      },
      bottomSection:{
        paddingHorizontal:10,
      },
      ofDealBtn:{
        backgroundColor:'#be0201',
        width:60,
        alignItems:'center',
        padding:5,
        borderRadius:3,
      },
      ofDeal:{
        color:'white',
        fontSize:12,
      },
      deal:{
        color:'#be0201',
        fontWeight:'600',
        marginLeft:6,
        fontSize:12,
      },
       row:{
        flexDirection:'row',
        alignItems:'center',
       },
       discountPrice:{
        color:'black',
        fontSize:12,
        marginVertical:5,
       },
       mrp:{
        padding:5,
        fontSize:10,
        color:'black',

       },
       actualPrice:{
        color:'black',
        fontSize:12,
        textDecorationLine:'line-through'
       }
})