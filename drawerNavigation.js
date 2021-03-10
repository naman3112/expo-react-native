import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() =>
          navigation.navigate('Notifications', {
            item: 'cities',
          })
        }
        title="Go to notifications"
      />
      <Button
        onPress={() =>
          navigation.navigate('Notifications', {
            item: 'country',
          })
        }
        title="Go to notifications"
      />
      <Button
        onPress={() =>
          navigation.navigate('Notifications', {
            item: 'states',
          })
        }
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> i am testing props </Text>
      <Text> {props.show} </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  let props = {
    cit: 'ashok vihar',
    states: 'delhi',
    country: 'india',
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="CITIES">
          {() => <NotificationsScreen show={props.cit} />}
        </Drawer.Screen>
        <Drawer.Screen name="states">
          {() => <NotificationsScreen show={props.states} />}
        </Drawer.Screen>
        <Drawer.Screen name="country">
          {() => <NotificationsScreen show={props.country} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
