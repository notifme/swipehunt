import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import data from '../data';

import {
  Container,
  Header,
  Title,
  Right,
  Body,
} from 'native-base';


import Card from '../../js/deckswiper/card';
import Timer from '../../js/deckswiper/timer';
import Swiper from '../../js/deckswiper/swiper';

const card = {
  name: 'Awesome Product',
  tagline: 'This is a awesome project',
  screenshot_url: {'300px': 'http://via.placeholder.com/1480x1037'},
  thumbnail: {image_url: 'http://via.placeholder.com/80x80'},
  topics: [{id: 12, name: 'TECH'}, {id: 641, name: 'OTHER'}]
}
storiesOf('Swiper El', module)
  .addDecorator((getStory) =>
    <Container style={{backgroundColor: '#fbfafa'}}>
      <Header>
        <Body>
          <Title>Headers</Title>
        </Body>
        <Right />
      </Header>

      <View style={{flex: 1, padding: 12}}>
        {getStory()}
      </View>
    </Container>
  )
  .add('Card', () => <Card {...card} />)
  .add('Card Long Tagline', () => <Card {...card} tagline="a very long tagline a very long taglinea very long taglinea very long taglinea very long taglinea very long taglinea very long taglinea very long taglinea very long tagline" />)
  .add('Card Real', () => <Card {...data.posts[0]} />)

  .add('Timer Timeout', () => <Timer remaining={2} style={{textAlign: 'center', fontSize: 50}} onTimeout={action('timeout')} />)
  .add('Timer', () => <Timer remaining={1*3600 + 24*60 + 3} style={{textAlign: 'center', fontSize: 50}} />)
  ;

  storiesOf('Swiper', module)
    .addDecorator((getStory) =>
      <Container style={{backgroundColor: '#fbfafa'}}>
        <Header>
          <Body>
            <Title>Headers</Title>
          </Body>
          <Right />
        </Header>

        {getStory()}
      </Container>
    )
    .add('Empty', () => <Swiper items={[]} onTimeout={action('timeout')} />)
    .add('With 3 products', () => <Swiper
        onTimeout={action('timeout')}
        items={data.posts.slice(0, 3)}
        itemNumberCurrent={12}
        itemNumberTotal={20}
        onSwipeLeft={action('nope')}
        onSwipeRight={action('yup')} />)
    ;
