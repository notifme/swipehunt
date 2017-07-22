import React from 'react';
import {DeckSwiper, Button, Text, Footer} from 'native-base';
import {View, Image} from 'react-native';

import Timer from './timer';
import ProductCard from './card';


const img = require('../../img/drawer-cover.png');

const Empty = ({onTimeout, remaining, onPressLikes}) => (
  <View style={{flex: 1}}>
    <Image source={img} style={{resizeMode: 'cover', flex: 2, padding: 50, height: null, width: null}}>
      <Timer remaining={remaining} style={{textAlign: 'center', fontSize: 50, color: 'white'}} onTimeout={onTimeout} />
      <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>until the next session</Text>
    </Image>
    <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Button onPress={onPressLikes}>
          <Text>VIEW MY LIKES</Text>
        </Button>
      </View>
    </View>
  </View>
);

class PureSwiper extends React.PureComponent {
  render() {
    return <DeckSwiper {...this.props} />;
  }
}

const renderItem = (item) => <ProductCard {...item} />;

const Swiper = ({
  items,
  onSwipeRight,
  onSwipeLeft,
  onTimeout,
  itemNumberCurrent,
  itemNumberTotal,
  nextTime,
  onPressLikes
}) => items.length > 0 ? (
        <View style={{flex: 1}}>
          <View style={{flex: 1, padding: 12}}>
              <PureSwiper
                looping={false}
                dataSource={items}
                renderItem={renderItem}
                onSwipeRight={onSwipeRight}
                onSwipeLeft={onSwipeLeft}
              />
          </View>
          <Footer style={{height: 25, elevation:0}}>
            <Text style={{color: 'white'}}>{itemNumberCurrent} / {itemNumberTotal}</Text>
          </Footer>
        </View>
      )
      : <Empty
          onPressLikes={onPressLikes}
          onTimeout={onTimeout}
          remaining={Math.floor((nextTime - Date.now()) / 1000)} />
;

export default Swiper;
