/*

 */
import Expo from 'expo';
import React from 'react';
import {AsyncStorage} from 'react-native';
import {StyleProvider, Root} from 'native-base';

import App from './js/App';
import StoryBook from './storybook';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

// XXX change false -> true if you want sb
const AppToLoad = false ? StoryBook : App;  //eslint-disable-line

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    if (__DEV__) await AsyncStorage.clear();

    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });

    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <AppToLoad />
        </Root>
      </StyleProvider>
    );
  }
}

export default App1;
