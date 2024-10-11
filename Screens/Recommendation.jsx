import React, { Component } from 'react'
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import ImageSlider from 'react-native-image-slider'
import Slideshow from 'react-native-image-slider-show'

export class Recommendation extends Component {
  render() {
    return (
      <View className="left-12">
        <ScrollView className="-mx-16 pl-2" >
        <View className= "h-16 w-full rounded-md bg-emerald-400"> 
            <Image className="w-10 h-10 top-3 left-3 rounded-full" source={require("../assets/hiking.jpeg")}></Image>
            <Text className="left-16 -top-5 text-lg font-serif font-semibold">Hike Mate</Text>
        </View>
        <View className = "flex-row">
            <ImageBackground className="w-full h-48" source={require("../assets/forest.jpeg")}>
            <Text className="font-bold top-16 left-5 text-3xl font-mono text-zinc-50">What is Today's Exploring</Text>
            <View className="left-16 top-32 rounded-3xl w-64 h-12 bg-slate-400 flex-row">
                <Image className="h-12 w-12" source={require("../assets/search logo.png")}></Image>
                <Text className="top-3 left-2">Search by city, trail, park</Text>
            </View>
            </ImageBackground> 
        </View>

        <View>
            <Text className="text-2xl top-8 font-bold left-3">Near Me</Text>
            <View className="justify-center items-center top-8">
                {/* <Image className="top-10 w-96 h-56" source={require("../assets/Stong_1.jpg")}></Image> */}
                <Slideshow
      dataSource={[
        { url:require("../assets/Stong_1.jpg") },
        { url:require("../assets/Stong_1.jpg") },
        { url:require("../assets/Stong_1.jpg")}
    ]}/>
            </View>
        </View>

        <View className="top-10 left-3">
            <Text className="text-xl">Gunung Stong,Kelantan</Text>
            <Text className="text-base">Dabong, Kelantan</Text>    
            <Text className="text-base">⭐ 4.4 . Hard . 8.5km . Est 1h 50m </Text>
            
        </View>

        <View className="top-14 left-3">
            <Text className="text-2xl font-bold">Popular</Text>
            <Image className="top-2 left-14 w-72 h-48 rounded-md" source={require("../assets/Kinabalu 2.jpeg")}></Image>
            <View className="left-2 top-2">
                <Text className="top-1 text-lg">Mount Kinabalu</Text>
                <Text className="text-base">Ranau, Sabah</Text>
                <Text className="text-base">⭐ 4.9 (2138) . Hard . 22.4km . Est 49h </Text>
            </View>
        </View>

        <View className="top-24">
            <Image className="left-14 w-72 h-48 rounded-md" source={require("../assets/Penang HH.jpeg")}></Image>
            <Text className="top-1 text-lg">Penang Hill Heritage</Text>
            <Text className="text-base">Ranau, Sabah</Text>
            <Text className="text-base">⭐ 4.9 (2138) . Hard . 8.5km . Est 49h</Text>    
        </View>
        
        </ScrollView>
      </View>
    )
}
}
export default Recommendation
