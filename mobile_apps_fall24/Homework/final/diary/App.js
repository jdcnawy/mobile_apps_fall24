import * as React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as DiaryProvider } from './src/context/DiaryContext';
import IndexScreen from './src/screens/IndexScreen';
import ViewScreen from './src/screens/ViewScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <DiaryProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: '#0000ff' },
            headerTintColor: '#ff6600',
            headerTitleStyle: { fontWeight: 'bold', fontFamily: 'PressStart2P' },
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Text style={{ color: '#ff6600', fontFamily: 'PressStart2P', fontSize: 14, marginRight: 10 }}>Create Post</Text>
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen 
            name="Index" 
            component={IndexScreen} 
            options={{ 
              title: 'Game Reviews',
              headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#ff6600', fontFamily: 'PressStart2P', fontSize: 14 }}>Game Reviews</Text>
                </View>
              ),
            }} 
          />
          <Stack.Screen name="View" component={ViewScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DiaryProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PressStart2P',
  },
});

export default App;