import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className = "text-xl">Assalamualaikum Dunia</Text>
      <Text>Hike Mate</Text>
      <Image className= "w-52 h-96" source={require('./hiking.jpeg')} />
      <StatusBar style="auto" />
      <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Press Me"
/>
    </View>
    
  );
}


