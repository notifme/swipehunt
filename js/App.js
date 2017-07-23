import {DrawerNavigator} from 'react-navigation';
import SideBar from './sidebar';
import PageList from './list';
import DeckSwiper from './deckswiper';

const DrawerExample = DrawerNavigator(
  {
    Swiper: {screen: DeckSwiper},
    List: {screen: PageList},
  },
  {
    initialRouteName: 'Swiper',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: SideBar
  }
);

export default DrawerExample;
