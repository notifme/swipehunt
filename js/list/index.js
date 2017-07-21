import React from 'react';
import {Linking} from 'react-native';
import Thumb from '../Thumb';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  Separator
} from 'native-base';

const sankhadeep = 'https://ph-files.imgix.net/503fa6cf-d3bb-4ed7-938e-dad5f11237c9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop';

const datas = [
  {
    img: sankhadeep,
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    img: sankhadeep,
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: sankhadeep,
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: sankhadeep,
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  },
  {
    img: sankhadeep,
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  }
];

const Item = ({
  discussion_url,
  name,
  tagline,
  thumbnail
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
      <Button transparent onPress={() => Linking.openURL(discussion_url)}>
        <Text>View</Text>
      </Button>
    </Right>
  </ListItem>
)

const PageList = ({navigation}) => (
  <Container>
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
        <Title>Yup List</Title>
      </Body>
      <Right />
    </Header>

    <Content>
      <Separator bordered noTopBorder>
        <Text>NEW</Text>
      </Separator>
      <List
        dataArray={[]}
        renderRow={item => <Item {...item} />}
      />
      <Separator bordered>
        <Text>ARCHIVED</Text>
      </Separator>
      <Body style={{padding: 20}}>
        <Text note>No archived Yup yet</Text>
      </Body>
      <List
        dataArray={[]}
        renderRow={item => <Item {...item} />}
      />
    </Content>
  </Container>
);

export default PageList;
