import React from 'react';
import { StyleSheet, Text, initialRoute, NavigatorIOS, requireNativeComponent } from 'react-native';
import NavigatorIOSApp from "./Components/Nav.js";
import { View } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <NavigatorIOSApp />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F9FB',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
