import React from 'react';
import {Image} from 'react-native';

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
} from 'native-base';

import styles from './style';

const drawerCover = require('../../img/drawer-cover.png');
const drawerImage = require('../../img/sidebar-sh.png');

const datas = [
  {
    name: 'Today Featured',
    route: 'Swiper',
    icon: 'md-swap',
  },
  {
    name: 'My Likes',
    route: 'List',
    icon: 'md-heart-outline',
  }
];

const SideBar = ({navigation}) => (
  <Container>
    <Content
      bounces={false}
      style={{flex: 1, backgroundColor: '#fff', top: -1}}
    >
      <Image source={drawerCover} style={styles.drawerCover}>
        <Image square style={styles.drawerImage} source={drawerImage} />
      </Image>
      <List
        dataArray={datas}
        renderRow={data =>
          <ListItem
            button
            noBorder
            onPress={() => navigation.navigate(data.route)}
          >
            <Left>
              <Icon
                active
                name={data.icon}
                style={{color: '#777', fontSize: 26, width: 30}}
              />
              <Text style={styles.text}>{data.name}</Text>
            </Left>
          </ListItem>}
      />

    </Content>
  </Container>
);

export default SideBar;
