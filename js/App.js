import {DrawerNavigator} from 'react-navigation';
import SideBar from './sidebar';
import PageList from './list';
import DeckSwiper from './deckswiper';

const DrawerExample = DrawerNavigator(
  {
    List: {screen: PageList},
    Swiper: {screen: DeckSwiper},
  },
  {
    initialRouteName: 'List',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: SideBar
  }
);

export default DrawerExample;
