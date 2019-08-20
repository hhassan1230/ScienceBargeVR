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
import { connect, changeRoom } from './store';
import house from './data/houseData';

export class Buttons extends React.Component {

  clickHandler(roomSelection) {
    changeRoom(roomSelection);
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
    const { roomName, info, adjacentRooms } = this.props;
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

export class HouseInfoPanel extends React.Component {

  render() {
    const { roomName, info, adjacentRooms } = this.props;
    return (
      <View style={styles.panel}>
        <View>
          <Text> Room Info </Text>
          <Text> { info } </Text>
        </View>
      </View>
    );
  }
};

const ConnectedButtons = connect(Buttons);
const ConnectedHouseInfoPanel = connect(HouseInfoPanel);

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

AppRegistry.registerComponent('ConnectedButtons', () => ConnectedButtons);
AppRegistry.registerComponent('ConnectedHouseInfoPanel', () => ConnectedHouseInfoPanel);
