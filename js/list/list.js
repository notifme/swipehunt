import React from 'react';
import {Content, List, Text, Body, Separator} from 'native-base';

import Item from './item';

const ProductList = ({news, archived, onView}) => (
  <Content>
    <Separator bordered noTopBorder>
      <Text>NEWS</Text>
    </Separator>
    <List
      dataArray={news}
      renderRow={(item) => <Item {...item} onView={() => onView(item)} />}
    />
    {
      news.length === 0 ? (
        <Body style={{padding: 20}}>
          <Text note>No new linked</Text>
        </Body>
      ) : null
    }
    <Separator bordered>
      <Text>ARCHIVED (50 max)</Text>
    </Separator>
    <List
      dataArray={archived}
      renderRow={(item) => <Item {...item} onView={() => onView(item)} />}
    />
    {
      archived.length === 0 ? (
        <Body style={{padding: 20}}>
          <Text note>No archived yet</Text>
        </Body>
      ) : null
    }
  </Content>
);

export default ProductList;
