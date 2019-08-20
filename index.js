import React from 'react';
import {
  asset,
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
// import Area from './Components/Area';
import house from './data/houseData';

export class Buttons extends React.Component {
  state = {
    playerState: null,
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms,
  }
  
  static defaultProps = {
    video: 'static.mp4',
    transform: [10, 0, -9],
    playing: 'pause',
    videoControllerStyles: {height: 0.2, width: 4},
    videoStyles: {height: 7.5, width: 13.7},
  };

  clickHandler(roomSelection) {
    this.setState({
      room: house[`${roomSelection}`].roomName,
      info: house[`${roomSelection}`].info,
      adjacentRooms: house[`${roomSelection}`].adjacentRooms,
    })

    Environment.setBackgroundImage(asset(`./360_${house[roomSelection].img}`));
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room => (
      buttons.push(
        <VrButton key={`${room}-button`} onClick={() => this.clickHandler(room)}> 
          <Text style={{backgroundColor: 'green'}}> { room }</Text>
        </VrButton>
        )
    ));

    return buttons;
  }

  render() {
    const { roomName, info, adjacentRooms } = this.state;
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}> Area Selection </Text>
          <Text> { roomName } </Text>
          { this.createRoomButtons(adjacentRooms) }
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}> Room Info </Text>
          <Text> { info } </Text>
        </View>
      </View>
    );
  }
};

export class InfoPanel extends React.Component {

  state = {
    playerState: null,
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms,
  }

  static defaultProps = {
    video: 'static.mp4',
    transform: [10, 0, -9],
    playing: 'pause',
    videoControllerStyles: {height: 0.2, width: 4},
    videoStyles: {height: 7.5, width: 13.7},
  };

  clickHandler(roomSelection) {
    this.setState({
      room: house[`${roomSelection}`].roomName,
      info: house[`${roomSelection}`].info,
      adjacentRooms: house[`${roomSelection}`].adjacentRooms,
    })

    Environment.setBackgroundImage(asset(`./360_${house[roomSelection].img}`));
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room => (
      buttons.push(
        <VrButton key={`${room}-button`} onClick={() => this.clickHandler(room)}> 
          <Text style={{backgroundColor: 'green'}}> { room }</Text>
        </VrButton>
        )
    ));

    return buttons;
  }

  render() {
    const { roomName, info, adjacentRooms } = this.state;
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}> Area Selection </Text>
          <Text> { roomName } </Text>
          { this.createRoomButtons(adjacentRooms) }
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}> Room Info </Text>
          <Text> { info } </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('Buttons', () => Buttons);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
