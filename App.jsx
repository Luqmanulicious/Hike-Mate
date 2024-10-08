import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View className = "flex-1 justify-start items-center p-32"> 
    <View className = "w-96 h-16 bg-emerald-400 -top-10 rounded-lg">
      <View className = "flex-row">
        <Image className = "w-10 h-10 top-3 left-3 rounded-full"  source={require("./assets/hiking.jpeg")}></Image>
        <Text className = "text-lg font-semibold text-left top-4 left-5 italic" >HikeMate </Text>
      </View>
     </View>

     <View className="w-screen">
      <Image 
        className = "w-full h-52" 
        source={require("./assets/HikeMate_Exp.png")}
        resizeMode="contain()"
        ></Image>
     </View>

     <View className= "right-36 top-3">
      <Text className= "text-xl font-semibold text-left">Activity</Text>
     </View>

     <View className="flex-row top-5 rounded-md">
      <View className = "w-16 h-16 bg-black mr-2"></View>
      <View className = "w-16 h-16 bg-black mr-2"></View>
      <View className = "w-16 h-16 bg-black mr-2"></View>
      <View className = "w-16 h-16 bg-black mr-2"></View>

     </View>
     </View>

  );
}