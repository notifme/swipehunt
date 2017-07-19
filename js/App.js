import React from 'react';

import {DrawerNavigator} from 'react-navigation';
import SideBar from './sidebar';
import PageList from './list';
import DeckSwiper from './deckswiper';

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: PageList },
    Anatomy: { screen: DeckSwiper },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
