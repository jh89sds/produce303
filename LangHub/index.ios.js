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

import ColoredButton from './src/components/ColoredButton';
import Card from './src/components/Card';

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

//AppRegistry.registerComponent('LangHub', () => LangHub);

var Main = require('./src/main')
AppRegistry.registerComponent('LangHub', () => Main);
