import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import amzPay from '../Images/amzPay.jpeg';
import SendMoney from '../Images/SendMoney.jpeg';
import Scan from '../Images/Scan.jpeg';
import Bills from '../Images/Bills.jpeg';
import { RecentSearchData } from '../Data/RecentSearchData';


const PaymentMethod = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:20}}
      style={styles.container}>

{/* Payment Container */}
      <View style={styles.paymentContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={amzPay} />
            <Text style={styles.title}>Amazone Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={SendMoney} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={Scan} />
            <Text style={styles.title}>Scan any QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={Bills} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>

{/* Recent Search Container */}
        {RecentSearchData.map(item=>(
         
      <View key={item.id} style={styles.outerContainer} >
        <Text style={styles.recentSearch} >{item.title}</Text>
        <Image source={item.image} style={styles.outerImage} />
      </View>
        ))
        }
    </ScrollView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  // Payment Container Style
  row: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  imgStyle:{
    height:50,
    width:50,
    borderRadius:50,
  },
  paymentContainer:{
    backgroundColor:'#ffffff',
    borderRadius:5,
    elevation:10,
  },
  title:{
    fontSize:10,
    color:'black',
    marginTop:2,
  },
  innerContainer:{
    padding:10,
    alignItems:'center',
    paddingTop:15,
  },
  container:{
    marginTop:-20,
    paddingHorizontal:10,
  },

  // Recent Search Container
  outerImage:{
    width:'100%',
    height:140,
  },
  outerContainer:{
    backgroundColor:'white',
    marginLeft:16,
    borderRadius:5,
    elevation:5,
    padding:5,
    width:140,
  },
  recentSearch:{
    fontSize:13,
    color:'black',
    marginBottom:8,
  }

});
