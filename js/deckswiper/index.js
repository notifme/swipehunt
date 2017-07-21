import React from 'react';
import Swiper from './swiper';

import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from 'native-base';

class WState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  onSwipe = () => {
    console.log('swipe');
  }

  render() {
    return (
      <Container style={{backgroundColor: '#fbfafa'}}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Deck Swiper</Title>
          </Body>
          <Right />
        </Header>

        <Swiper
          items={this.state.posts}
          onSwipeLeft={this.onSwipe}
          onSwipeRight={this.onSwipe}
          />
      </Container>
    );

  }
}

export default WState;
