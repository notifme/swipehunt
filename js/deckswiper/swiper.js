import React from 'react';
import {DeckSwiper, Button, Text} from 'native-base';
import {View, Image} from 'react-native';

import Timer from './timer';
import ProductCard from './card';


const img = require('../../img/drawer-cover.png');

const Empty = () => (
  <View style={{flex: 1}}>
    <Image source={img} style={{resizeMode: 'cover', flex: 2, padding: 50, height: null, width: null}}>
      <Timer remaining={60} style={{textAlign: 'center', fontSize: 50, color: 'white'}} />
      <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>until the next session</Text>
    </Image>
    <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Button>
          <Text >VIEW MY LIKE</Text>
        </Button>
      </View>
    </View>
  </View>
);

const Swiper = ({
  items,
  onSwipeRight,
  onSwipeLeft,
}) => items.length > 0 ?
      (<View style={{flex: 1, padding: 12}}>
        <DeckSwiper
          looping={false}
          dataSource={items}
          renderItem={item => <ProductCard {...item} />}
          onSwipeRight={onSwipeRight}
          onSwipeLeft={onSwipeLeft}
        />
      </View>)
      : <Empty />
;

export default Swiper;
