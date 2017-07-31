import Expo from 'expo';
import React from 'react';
import {AsyncStorage} from 'react-native';
import {StyleProvider, Root} from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import config from './config';
import Onboarding from './js/onboarding';
import App from './js/App';
import StoryBook from './storybook';

// XXX change false -> true if you want sb
const AppToLoad = false ? StoryBook : App;  //eslint-disable-line

class App1 extends React.Component {
  state = {
    ready: false,
    onboarding: true
  };

  async componentWillMount() {
    if (__DEV__) await AsyncStorage.multiRemove(['onboardingDone', 'session', 'liked']);

    const onboardingDone = await AsyncStorage.getItem('onboardingDone');

    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });

    if (!__DEV__) Expo.Amplitude.initialize(config.AMPLITUDE_KEY);

    Expo.Amplitude.logEvent('Load');

    if (onboardingDone === null) {
      Expo.Amplitude.logEvent('Onboarding.Start');
    }

    this.setState({
      ready: true,
      onboarding: onboardingDone === null
    });
  }

  onOnboardingDone = () => {
    Expo.Amplitude.logEvent('Onboarding.Done');
    AsyncStorage.setItem('onboardingDone', '1');
    this.setState({onboarding: false});
  }

  render() {
    if (!this.state.ready) return <Expo.AppLoading />;

    if (this.state.onboarding) return <Onboarding onDone={this.onOnboardingDone} />;

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
