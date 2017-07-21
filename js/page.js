import React from 'react';
import {Container, Header, Title, Button, Icon, Left, Right, Body, Spinner} from 'native-base';

const Page = ({title, children, navigation, loading}) => (
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
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>

    {loading ? <Spinner style={{marginTop: 20, flex: 1}} color="#da552f" /> : children}
  </Container>
);

export default Page;
