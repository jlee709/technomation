import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import { data } from './LibList';

class ListItem extends Component{
  render(){
    console.log('HEHEHEHE');
    return(
      <CardSection>
        <Text>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}
console.log(this.props, 'ajhadfasdfasfs');
const styles = {

}

export default ListItem;