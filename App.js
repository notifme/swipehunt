import Expo from 'expo';
import React from 'react';
import {StyleProvider} from 'native-base';

import App from './js/App';
import StoryBook from './storybook';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

// XXX change false -> true if you want sb
const AppToLoad = true ? StoryBook : App;  //eslint-disable-line

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
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
        <AppToLoad />
      </StyleProvider>
    );
  }
}

export default App1;
