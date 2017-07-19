import React, {Component} from 'react';
import {Image} from 'react-native';

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
} from 'native-base';

import styles from './style';

const drawerCover = require('../../img/drawer-cover.png');

const drawerImage = require('../../img/logo-kitchen-sink.png');

const datas = [
  {
    name: 'P1',
    route: 'Home',
    icon: 'phone-portrait',
    bg: '#C5F442'
  },
  {
    name: 'P2',
    route: 'Anatomy',
    icon: 'phone-portrait',
    bg: '#477EEA',
    types: '3'
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
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
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{color: '#777', fontSize: 26, width: 30}}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types &&
                  <Right style={{flex: 1}}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />

        </Content>
      </Container>
    );
  }
}

export default SideBar;
