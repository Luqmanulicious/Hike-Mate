import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home';
import Recommendation from './Screens/Recommendation';

const Drawer = createDrawerNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Recommendation">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Recommendation" component={Recommendation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 