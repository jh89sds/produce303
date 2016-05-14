/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ColoredButton from './views/ColoredButton';
import Card from './views/Card';

class LangHub extends Component {
  render() {
    return (
        <View>
          <ColoredButton/>
          <Card/>
        </View>
    );
  }
}

AppRegistry.registerComponent('LangHub', () => LangHub);
