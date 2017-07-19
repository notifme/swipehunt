import React from 'react';
import {View} from 'react-native';
import ProductCard from './card';
import data from '../data';

import {
  Container,
  Header,
  Title,
  Button,
  DeckSwiper,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';

const PageSwiper = ({navigation}) => (
  <Container style={{backgroundColor: '#fbfafa'}}>
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Deck Swiper</Title>
      </Body>
      <Right />
    </Header>

    <View style={{flex: 1, padding: 12}}>
      <DeckSwiper
        dataSource={data.posts}
        renderItem={item => <ProductCard {...item} />}
      />
    </View>
  </Container>
);

export default PageSwiper;
