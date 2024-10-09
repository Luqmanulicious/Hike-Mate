import React, { Component } from 'react'
import { Alert, Image, Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export class Home extends Component {
  render() {
    return (

      <View className="flex-1 justify-start items-center py-10">
      <ScrollView className="-mx-16 pl-2">
        <View className="w-96 h-16 bg-emerald-400 -top-0 rounded-lg ">
          <View className="flex-row">
            <Image className="w-10 h-10 top-3 left-3 rounded-full" source={require("../assets/hiking.jpeg")}></Image>
            <Text className="text-lg font-semibold text-left top-4 left-5 italic" >HikeMate </Text>
          </View>
        </View>
  
        <View className="w-screen top-2">
          <Image
            className="w-full h-52"
            source={require("../assets/HikeMate_Exp.png")}
            resizeMode="contain()"
          ></Image>
        </View>
  
        <View className="right-0 top-3">
          <Text className="text-xl font-semibold text-left">Activity</Text>
        </View>
  
        <View className="flex-row top-6 -right-8">
          <Pressable onPress={() => Alert.alert ('Anda berminat untuk mendaki?')}>
          <View className="w-16 h-16 bg-green-400 mr-5 rounded-lg">
            <Image className="w-8 h-8 top-4 left-4 rounded-full" source={require("../assets/Hike Logo.png")}></Image>
            <Text className="top-8 left-3 font-serif font-semibold" >Hiking </Text>
          </View>
          </Pressable>
  
          <Pressable onPress={() => Alert.alert ('Ayuh berkhemah bersama sahabat anda')}>
          <View className="w-16 h-16 bg-green-400 mr-5 rounded-lg">
            <Image className="w-10 h-10 top-3 left-3 rounded-full" source={require("../assets/camping logo.jpeg")}></Image>
            <Text className="top-6 left-1 font-serif font-semibold" >Campsite</Text>
          </View>
          </Pressable>
  
          <Pressable onPress={() => Alert.alert ('Trails of what mountain?')}>
          <View className="w-16 h-16 bg-green-400 mr-5 rounded-lg">
            <Image className="w-10 h-10 top-3 left-3 rounded-full" source={require("../assets/trails logo.jpeg")}></Image>
            <Text className="top-6 left-4 font-serif font-semibold" >Trails</Text>
          </View>
          </Pressable>
  
          <Pressable onPress={() => Alert.alert ('lets go do some activity')}>
          <View className="w-16 h-16 bg-green-400 mr-5 rounded-lg">
            <Image className="w-10 h-10 top-3 left-3 rounded-full" source={require("../assets/Outdoor activities logo.png")}></Image>
            <Text className="top-6 left-2 font-serif font-semibold" >Outdoor activities</Text>
          </View>
          </Pressable>
        </View>
  
        <View className="">
          <View className="flex-row">
            <Text className="text-2xl font-bold top-20 -right-2">Review</Text>
          </View>
          <View className="top-20 flex-row -right-2 w-80 h-20">
            <Image className="w-12 h-12 right-0 top-2  rounded-full" source={require("../assets/Pipol.jpeg")}></Image>
            <Text className="font-serif text-lg font-semibold">Andre Onana</Text>
           <Text className="right-24 top-8 text-ellipsis">Mount kinabalu is one of the best hiking destination in Sabah</Text>
          </View>
          <View className="flex-row">
          <Image className="top-2 rounded-md w-80 h-80 left-6 " resizeMode= "contain" source={require("../assets/kinabalu.jpeg")}></Image>
          </View>
        </View>
  
      </ScrollView>
      </View>
    )
  }
}

export default Home
