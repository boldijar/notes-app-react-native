/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import CardView from 'react-native-cardview'
import Ripple from 'react-native-material-ripple';

const ds = new ListView.DataSource({rowHasChanged :(row1,row2) => row1 != row2 });
export default class App extends Component<{}> {
  constructor(){
    super();
    this.state={
      dataSource: ds.cloneWithRows([
        {
          "title":"eat today",
          "description": "don't forget to eat today bro!!"
        },
        {
          "title":"do workout today",
          "description": "don't forget to do some workout bro! don't forget to do some workout bro! don't forget to do some workout bro!don't forget to do some workout bro !"
        },
        {
          "title":"homework",
          "description": "With tail in the air munch on tasty moths. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff put butt in owner's face. Cough hairball on conveniently placed pants steal the warm chair right after you get up. Lick sellotape instantly break out into full speed gallop across the house for no reason and eat plants, meow, and throw up because i ate plants."
        },
        {
          "title":"feed doog",
          "description": "Doggo ipsum tungg you are doing me the shock sub woofer doing me a frighten heckin angery woofer, pupperino floofs. Heckin good boys and girls doggo yapper the neighborhood pupper much ruin diet you are doing me the shock waggy wags, shooberino extremely cuuuuuute puggorino doggorino. Shoober lotsa pats pats many pats lotsa pats, length boy shooberino doge, the neighborhood pupper very taste wow yapper. Smol borking doggo with a long snoot for pats wrinkler sub woofer"
        },
        {
          "title":"pokemon games",
          "description":"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Squirtle"
        }
      ]),
    }
  }


  _renderRow(rowData){
    return (
      <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
          style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{rowData.title}</Text>
        <Text style={styles.itemDescription}>{rowData.description}</Text>
      </CardView>
    );
  }
  render() {
    return (
      <View style={styles.background}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        <Ripple><Text style={styles.loginButton}>ADD NOTE</Text></Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemTitle:{
    fontSize: 17,
    color: '#000000'
  },
  itemDescription:{
    fontSize: 13,
    color: '#000000'
  },
  itemContainer:{
    padding: 10
  },
  loginButton: {
    textAlign: 'center',
    color: '#ffffff',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#1D6FCE'
  },
  background: {
    flex: 1,
  },
});
