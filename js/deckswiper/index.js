import React from 'react';
import {AsyncStorage} from 'react-native';
import {Toast} from 'native-base';


import config from '../../config';
import Page from '../page';
import Swiper from './swiper';

class PageSwiper extends React.Component {
  state = {
    loading: true,
    posts: [],
    itemNumberCurrent: 0,
    itemNumberTotal: 0
  };
  session = null;
  liked = null;

  saveSession = () => {
    AsyncStorage.setItem('session', JSON.stringify(this.session));
  }

  resetSession = (day) => {
    this.session = {
      day: day,
      swiped: [] // not implemented with shift because the order & the number of posts could change
    }

    this.saveSession()
  }

  async componentDidMount() {
    try {
      const fetched = await fetch(config.LATEST_ENDPOINT);
      const json = await fetched.json();
      const session = await AsyncStorage.getItem('session');
      const liked = await AsyncStorage.getItem('liked');

      if (!json || !json.posts || json.posts.length === 0) {
        throw new Error('No posts');
      }

      if (session === null) {
        this.resetSession(json.posts[0].day);
      } else {
        this.session = JSON.parse(session);

        if (this.session.day !== json.posts[0].day) { // new day => new session
          this.resetSession(json.posts[0].day);
        }
      }

      if (liked === null) {
        this.liked = {news: [], archived: []};
      } else {
        this.liked = JSON.parse(liked);
      }

      this.setState({
        posts: json.posts.filter(p => this.session.swiped.indexOf(p.id) === -1),
        loading: false,
        itemNumberCurrent: this.session.swiped.length + 1,
        itemNumberTotal: json.posts.length
      });
    } catch(error) {
      Toast.show({
        text: 'Verify your internet connection and retry',
        position: 'bottom',
        buttonText: 'OKAY'
      })
    }
  }

  onSwipe = (o) => {
    this.session.swiped.push(o.id);
    this.saveSession();

    if (this.state.posts.indexOf(o) === this.state.posts.length - 1) {
      this.setState({posts: []});
    } else {
      this.setState({itemNumberCurrent: this.state.itemNumberCurrent + 1});
    }
  }

  onSwipeLeft = (o) => {
    this.onSwipe(o);
  }

  onSwipeRight = (o) => {
    this.onSwipe(o);
    this.liked.news.push(o);
    AsyncStorage.setItem('liked', JSON.stringify(this.liked));
  }

  render() {
    return (
      <Page title="Hunty - Swiper" navigation={this.props.navigation} loading={this.state.loading}>
        <Swiper
          itemNumberCurrent={this.state.itemNumberCurrent}
          itemNumberTotal={this.state.itemNumberTotal}
          items={this.state.posts}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          />
      </Page>
    );

  }
}

export default PageSwiper;
