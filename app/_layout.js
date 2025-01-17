import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Search from '../components/search';
import Details from '../components/details';
import Splash from '../components/splash';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName="Movie Time">
        <Stack.Screen name="Movie Time" component={Splash} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Movies' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Movie Details' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Search Movies' }} />
        
      </Stack.Navigator>
  );
}
