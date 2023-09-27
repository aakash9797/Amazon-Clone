import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import React, { useRef, useState } from 'react';
import CarouselSlide , {Pagination} from 'react-native-snap-carousel';
import { CarouselData } from '../Data/CarouselData';

const sliderWidth= Dimensions.get('screen').width;
const Carousel = () => {
  const[activeSlide,setActiveSlide]=useState('0');
    const carouselRef = useRef();
    const renderItem=({item})=>{
        return(
        <View style={styles.slide}>
        <Image source={item.image} style={styles.image}/>
        </View>
        );
    }
  return (
    <View style={styles.carouselContainer}>
      <CarouselSlide
              ref={carouselRef}
              data={CarouselData}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={500}
              onSnapToItem={index=>setActiveSlide(index)}
            />
            <Pagination
              dotsLength={CarouselData.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
                position:'absolute',
                bottom:0,
                left:'20%',
              }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  // marginHorizontal: 8,
                  // backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              dotColor='black'
              inactiveDotColor='red'
            />
    </View>
  );
};

export default Carousel

const styles = StyleSheet.create({
  carouselContainer:{
position:'relative',
  },
  image:{
    height:200,
    width:'100%',
  },
})