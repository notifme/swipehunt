import {getStorybookUI, configure} from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({port: 7007, host: '192.168.1.10'});
export default StorybookUI;
