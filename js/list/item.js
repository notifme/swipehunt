import React from 'react';
import {Button, ListItem, Text, Left, Body, Right} from 'native-base';

import Thumb from '../Thumb';

const Item = ({
  name,
  tagline,
  thumbnail,
  onView
}) => (
  <ListItem thumbnail>
    <Left>
      <Thumb uri={thumbnail.image_url}/>
    </Left>
    <Body>
      <Text>{name}</Text>
      <Text note numberOfLines={2}>{tagline}</Text>
    </Body>
    <Right>
      <Button transparent onPress={onView}>
        <Text>View</Text>
      </Button>
    </Right>
  </ListItem>
)

export default Item;
