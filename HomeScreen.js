import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Category from './Components/Category';
import Carousel from './Components/Carousel';
import PaymentMethod from './Components/PaymentMethod';
import Deals from './Components/Deals';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
         <Header />
         <SubHeader />
         <Category />
         <Carousel />
         <PaymentMethod />
         <Deals />
    </ScrollView>
  )
}

export default HomeScreen;
