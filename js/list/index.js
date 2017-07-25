import React from 'react';
import {Linking, AsyncStorage} from 'react-native';

import Page from '../page';
import ProductList from './list';

class PageList extends React.Component {
  state = {
    liked: {
      news: [],
      archived: []
    },
    loading: true
  };

  saveState = () => {

  }

  async componentDidMount() {
    const liked = await AsyncStorage.getItem('liked');

    const newState = {loading: false};
    if (liked !== null) newState.liked = JSON.parse(liked);

    this.setState(newState);
  }

  onView = (product) => {
    Linking.openURL(product.discussion_url);

    const {liked} = this.state;
    if (liked.news.some(p => p.id === product.id)) {
      const newLiked = {
        news: liked.news.filter(p => p.id !== product.id),
        archived: [product, ...liked.archived.slice(0, 49)] // 50 max
      };
      this.setState({liked: newLiked});
      AsyncStorage.setItem('liked', JSON.stringify(newLiked));
    }
  }

  render() {
    return (
      <Page title="My Likes" navigation={this.props.navigation} loading={this.state.loading}>
        <ProductList
          archived={this.state.liked.archived}
          news={this.state.liked.news}
          onView={this.onView} />
      </Page>
    );
  }
}

export default PageList;
