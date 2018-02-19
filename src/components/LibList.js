import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, List } from 'react-native';
import ListItem from './ListItem';


class LibList extends Component {

  componenetWillMount(){
    const ds = new FlatList.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.DataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <FlatList library={library} />;
  }

  render(){
    return(
      <FlatList 
      dataSource={this.dataSource} 
      renderRow={this.renderRow} />
    );
  }
}
console.log(this.state, 'hehe');

const mapStateToProps = state => {
  return {libraries: state.library};
};

export default connect(mapStateToProps)(LibList);