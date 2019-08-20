import React, { Component, PropTypes } from 'react';
import {
  Video,
  View,
  asset,
  VideoControl,
  MediaPlayerState,
  Animated
} from 'react-vr';
// This is the Area Component which is in charge of rendering the video
// No Need to touch this file
export default class Area extends Component {
  constructor(props){
    super();
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, loop: true, muted: true}), // init with muted, autoPlay
    }
  }

  static defaultProps = {
    video: 'static.mp4',
    transform: [10, 0, -9],
    playing: 'pause',
    videoControllerStyles: {height: 0.2, width: 4},
    videoStyles: {height: 7.5, width: 13.7},
  };

  render() {
    const { transform, playing, video, videoStyles, videoControllerStyles } = this.props;
    return (
        <View
          style={{
            backgroundColor: 'black',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            transform: [{translate: [transform[0], transform[1], transform[2]]}],
          }}>
            <Video style={videoStyles} loop={true} playControl={playing} playerState={this.state.playerState} autoPlay={false} source={asset(`${video}`)} />
            <VideoControl style={videoControllerStyles} playerState={this.state.playerState} />
        </View>
    )
  }
}