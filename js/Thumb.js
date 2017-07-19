import React from 'react';
import {Thumbnail} from 'native-base';

const Thumb = ({uri}) => {
  let newUri = uri.split('?')[0];
  const modifier = 'auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop';

  return <Thumbnail square source={{uri: `${newUri}?${modifier}`}} />;
}

export default Thumb;
